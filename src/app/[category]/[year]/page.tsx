import Image from "next/image"
import Link from "next/link"
const imgs = [
    '/painting.png',
    '/painting.png',
    '/painting.png',
    '/painting.png',
    '/painting.png',
    '/painting.png'
]

export default function PaintingsFromYear({ params }: { params: { year: string, category: string }}) {
    
    return (
    <div className=" text-3xl flex gap-6 items-center min-h-screen justify-start md:px-10">
        <span className="border border-white p-6 text-3xl lg:text-5xl">
            {params.year}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 3xl:grid-cols-4 gap-6">
        {imgs.map((img, indx) => (
            <Link className=" relative w-60 h-60 border border-white p-10 cursor-pointer hover:scale-105" key = {`${img} ${indx}`} href = {`/${params.category}/${params.year}/test`}>
                <Image fill className="object-cover"  src={img} alt="test img" />
            </Link>
            ))}
        </div>
    </div>
    )
}