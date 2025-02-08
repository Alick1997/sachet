
const pages = [
  {title: "PAINTING", url: "/painting"},
  {title: "DRAWING", url: "/drawing"},
  {title: "CLAY", url: "/clay"},
  {title: "FAQ", url: "/faq"},
  {title: "ABOUT THE PEN HOLDER", url: "/about"},
  {title: "CONTACT US", url: "/contact"},
]

export default function Home() {
  return (
      <main className="min-h-screen min-w-screen lg:flex-row items-center sm:items-start">
        <div className="flex items-center justify-start w-full h-screen">
          <div className="flex flex-col items-center p-auto w-1/2 h-screen justify-center">
            <h1 className="text-5xl my-4">WORDS FOR WEDNESDAY</h1>
            <p>pencil</p>
            <h2 className="text-3xl my-4">LETTING ART SPEAK SO I DONT HAVE TO.</h2>
          </div>
          <div className="flex flex-col items-center justify-center px-10 bg-main w-1/2 h-screen gap-4">
            {pages.map((page) => (
              <a key = {page.url} href = {page.url} className="w-full border border-white py-2 text-white text-center cursor-pointer hover:scale-105">
                {page.title}
              </a>
              ))}
          </div>
        </div>
      </main>
  );
}
