import Link from "next/link"
const years = [
    {title: "2023", url: "/paintings/2023"},
    {title: "2024", url: "/paintings/2024"},
    {title: "2025", url: "/paintings/2025"},
]
export async function generateStaticParams() {
    return [
      { category: "paintings" },
    ];
  }

export default function PaintingLanding({ params }: { params: { category: string} }) {

    return(
        <div className=" text-3xl flex gap-6 items-center min-h-screen justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-6 text-white">
            {years.map((year) => (
                <Link className="border border-white p-10 cursor-pointer hover:scale-105 min-size-9xl text-3xl xl:text-9xl" key = {year.url} href = {`/${params.category}/${year.title}`}>
                    {year.title}
                </Link>
                ))}
            </div>
        </div>
    )
}
