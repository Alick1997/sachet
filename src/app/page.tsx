import Link from "next/link";
import { HiPencil } from "react-icons/hi2";

const pages = [
  {title: "PAINTING", url: "/paintings"},
  {title: "DRAWING", url: "/drawings"},
  {title: "CLAY", url: "/clay"},
  {title: "FAQ", url: "/faq"},
  {title: "ABOUT THE PEN HOLDER", url: "/about"},
  {title: "CONTACT US", url: "/contact"},
]

export default function Home() {
  return (
      <main className="bg-main min-h-screen min-w-screen flex flex-col justify-center lg:justify-start lg:flex-row items-center items-start">
          <div className="text-center bg-white text-black dark:bg-black dark:text-white flex flex-col items-center h-[50vh] px-4 md:p-auto w-full lg:w-1/2 lg:h-screen justify-center">
            <h1 className="text-3xl lg:text-5xl my-4 font-martel-sans">WORDS FOR WEDNESDAY</h1>
            <HiPencil className="text-5xl" />
            <h2 className="text-2xl lg:text-3xl my-4 font-arimo">LETTING ART SPEAK SO I DONT HAVE TO.</h2>
          </div>
          <div className="flex flex-col items-center justify-center px-10 h-[50vh] bg-main w-full lg:w-1/2 lg:h-screen gap-4">
            {pages.map((page) => (
              <Link key = {page.url} href = {page.url} className="w-full border border-white py-2 text-white text-center cursor-pointer hover:scale-105">
                {page.title}
              </Link>
              ))}
          </div>
      </main>
  );
}
