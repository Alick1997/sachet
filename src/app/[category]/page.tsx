import Link from "next/link"
const years = [
    {title: "2023", url: "/painting/2023"},
    {title: "2024", url: "/painting/2024"},
    {title: "2025", url: "/painting/2025"},
]
export default function PaintingLanding({ params }: { params: { category: string} }) {

    return(
        <div className=" text-3xl flex gap-6 items-center min-h-screen justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-6">
            {years.map((year) => (
                <Link className="border border-white p-10 cursor-pointer hover:scale-105 min-size-9xl text-3xl xl:text-9xl" key = {year.url} href = {`/${params.category}/${year.title}`}>
                    {year.title}
                </Link>
                ))}
            </div>
        </div>
    )
}