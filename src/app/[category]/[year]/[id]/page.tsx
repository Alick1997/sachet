import Image from "next/image"
import paintings from '../../../../data/paintings.json'
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return paintings.map(val => {
        return { year: val.year, category: val.category.toLocaleLowerCase(), id: val.id.toLocaleLowerCase() }
    })
  }

export default function PaintingDetailPage({ params } : { params: { id: string, year: string, category: string }}) {
    
    const val = paintings.find(painting=> painting.id.toLocaleLowerCase() === params.id.toLocaleLowerCase())
    if(!val) {
        notFound()
    }

    return (
        <div className="h-screen flex flex-col md:flex-none md:grid md:grid-cols-2 lg:grid-cols-3 text-white">
            <div className="w-full lg:h-screen my-10 md:my-0 flex justify-center items-center">
                <div className="max-w-lg relative w-60 h-60 lg:h-[500px] lg:w-[500px]">
                    <Image fill className="object-cover" src = {val.image} alt = {val.title} />
                </div>
            </div>
                <div className="lg:col-span-2 flex items-center justify-center w-full">
                    <div className="p-4 text-center max-w-3xl">
                        <h1 className="font-bold text-2xl mb-4">{val.title}</h1>
                        <p className="italic">{val.size}</p>
                        <p className="justify my-10 lg:text-2xl">{val.description}</p>
                        <p className="italic">{val.material}</p>
                    </div>
                </div>
        </div>
    )
}