import Link from "next/link";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev Jorge",
  description: "This is my neato developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={
          "min-h-screen flex flex-col text-slate-700 " + poppins.className
        }
      >
        <header className="flex p-4 sm:p-5 border-b">
          <div className="flex font-medium text-xs sm:text-sm items-center max-w-[900px] mx-auto w-full">
            <Link href={"/"} className="hidden sm:inline">
              Jorge Valles
            </Link>

            <Link href={"/"} className="sm:hidden">
              JV
            </Link>
          </div>
        </header>
        {children}
        <footer className="flex p-4 py-16 text-xs text-slate-600 sm:text-sm border-t items-center justify-center flex-col gap-6">
          <div className="flex items-center justify-center gap-4">
            <a
              download
              href="/Currículum-jorge-valles.pdf"
              className="cursor-pointer hover:opacity-60 duration-200"
            >
              PDF Resume
            </a>
            <p>|</p>
            <Link
              href={"/projects"}
              className="cursor-pointer hover:opacity-60 duration-200"
            >
              Projects
            </Link>

            <p>|</p>
            <a className="cursor-pointer hover:opacity-60 duration-200">Blog</a>
          </div>
          <div className="flex items-center justify-center gap-4 text-lg sm:text-xl">
            <a
              className="cursor-pointer hover:opacity-60 duration-200"
              href={"https://www.linkedin.com/in/jorgeluisvalles/"}
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              className="cursor-pointer hover:opacity-60 duration-200"
              href={"https://github.com/jorgevalles"}
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="cursor-pointer hover:opacity-60 duration-200"
              href={"mailto:1jorgevalles@gmail.com"}
              target="_blank"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              className="cursor-pointer hover:opacity-60 duration-200"
              href={"//wa.me/+573232373531"}
              target="_blank"
            >
              <i className="fa-brands fa-square-whatsapp"></i>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
