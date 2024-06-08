'use client';
import React from "react";
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {

  const pathName = usePathname();

  return (
    // If the pathName is equal to the path, then the link is active and the style is applied.
    <Link className={ `${style.link} ${ (pathName === path) && style['active-link']}` } href={path}>
      {text}
    </Link>
  );
};
