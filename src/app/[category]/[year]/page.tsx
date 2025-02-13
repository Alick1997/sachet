import paintings from '../../../data/paintings.json'
import { notFound } from "next/navigation";
import ImagesGrid from "./imagesGrid";

export async function generateStaticParams() {
    return [
      { year: "2023", category: "paintings" },
      { year: "2024", category: "paintings" },
      { year: "2025", category: "paintings" },
      { year: "2023", category: "drawings" },
      { year: "2024", category: "drawings" },
      { year: "2025", category: "drawings" },
      { year: "2023", category: "clay" },
      { year: "2024", category: "clay" },
      { year: "2025", category: "clay" },
    ];
  }

export default function PaintingsFromYear({ params }: { params: { year: string, category: string }}) {
    const data = paintings.filter(painting=> painting.category.toLocaleLowerCase() === params.category.toLocaleLowerCase() && painting.year === params.year)
    if(!data || data.length === 0) {
        notFound()
    }

    return (
    <div className=" text-3xl flex flex-col md:flex-row py-6 gap-6 items-center min-h-screen justify-center md:px-10">
        <span className="border border-white p-6 text-3xl lg:text-5xl text-white">
            {params.year}
        </span>
        <ImagesGrid data={data} />
    </div>
    )
}