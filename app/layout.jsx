import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex w-screen h-screen">
          <div className="flex h-full w-[15%] min-w-55">
            <Sidebar />
          </div>
          <div className="flex flex-col w-[100%]">
            <header className="h-[8%]">
              <Navbar />
            </header>
            <main>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}