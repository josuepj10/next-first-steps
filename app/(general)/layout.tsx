import { Navbar } from "../components/navbar/Navbar";


//lrc + tab
export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
       <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hello world</span>
        {/* Show all its children */}
        { children }
      </main>
    </>
  );
}