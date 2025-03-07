import paintings from '../../../data/paintings.json'
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
    const data = paintings.filter(painting=> painting?.category?.toLowerCase() === params.category?.toLowerCase() && painting.year === params.year)

    return (
    <div className="flex flex-col md:flex-row pt-6 pb-10 gap-6 items-center min-h-screen justify-center md:px-10">
        <span className="border border-white p-6 text-3xl lg:text-5xl text-white">
            {params.year}
        </span>
       { data && data.length > 0 ?
        <ImagesGrid data={data} />:
        <p className='text-center font-bold p-3 text-white'>No results found for {params.category} from {params.year}</p>
        }
    </div>
    )
}