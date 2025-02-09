import Image from "next/image"

const painting = {
    image: "/painting.png",
    title: "Bug #1 and Bug #2",
    size: "6 x 3 in",
    description: "Adorable little cuties, born weeks apart but never to be separated. These busy little bugs very focused on whatever it is they're doing. I don't know where they're off to, but I love running into them on my way out of the house. Their motivation is inspiring.",
    material: "Mixed media, watercolor"

}

export async function generateStaticParams() {
    return [
        { year: "2023", category: "paintings", id: "test" },
        { year: "2024", category: "paintings", id: "test" },
        { year: "2025", category: "paintings", id: "test" },
        { year: "2023", category: "drawings", id: "test" },
        { year: "2024", category: "drawings", id: "test" },
        { year: "2025", category: "drawings", id: "test" },
        { year: "2023", category: "clay", id: "test" },
        { year: "2024", category: "clay", id: "test" },
        { year: "2025", category: "clay", id: "test" },
      ];
  }

export default function PaintingDetailPage({ params } : { params: { id: string, year: string, category: string }}) {
    return (
        <div className=" h-screen flex flex-col md:flex-none md:grid md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full lg:h-screen my-10 md:my-0 flex justify-center items-center">
                <div className="max-w-lg relative w-60 h-60 lg:w-96 lg:w-96">
                    <Image fill className="object-cover" src = {painting.image} alt = {painting.title} />
                </div>
            </div>
                <div className="lg:col-span-2 flex items-center justify-center w-full">
                    <div className="p-4 text-center max-w-3xl">
                        <h1 className="font-bold text-2xl mb-4">{painting.title}</h1>
                        <p className="italic">{painting.size}</p>
                        <p className="justify my-10 lg:text-2xl">{painting.description}</p>
                        <p className="italic">{painting.material}</p>
                    </div>
                </div>
        </div>
    )
}