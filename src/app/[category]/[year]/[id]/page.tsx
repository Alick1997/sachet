import paintings from '../../../../data/paintings.json'
import Link from "next/link"
import SelectDropDown from "@/components/selectDropdown"
import ImageModal from "@/components/imageModal"

export async function generateStaticParams() {
    return paintings.map(val => {
        return { year: val.year, category: val?.category?.toLowerCase(), id: val?.id?.toLowerCase() }
    })
  }

export default function PaintingDetailPage({ params } : { params: { id: string, year: string, category: string }}) {
    
    const filteredArr = paintings.filter(p=> p.year === params.year).sort()
    const indx = filteredArr.findIndex(p=> p.id === params.id)
    if(!indx || indx >= filteredArr.length) {
        <div className="h-screen flex flex-col md:flex-none md:grid md:grid-cols-2 lg:grid-cols-3 text-white px-6">
            <p className='text-center font-bold p-3 text-white'>Looks like this peice does not exist.</p>
            <Link href={'/'} >Go Home</Link>
        </div>
    }
    const val = filteredArr[indx]
    const prev = (indx > 0) ? filteredArr[indx -1] : null
    const next = (indx < filteredArr.length -1) ? filteredArr[indx + 1] : null

    return (
        <div className="h-screen flex flex-col md:flex-none md:grid md:grid-cols-2 lg:grid-cols-3 text-white px-6">
            {
            val ?
            <>
                <div className="w-full lg:h-screen my-10 md:my-0 flex justify-center items-center">
                    <div className="max-w-lg relative w-60 h-60 lg:h-[600px] lg:w-[600px]">
                        <ImageModal src = {val.image} alt = {val.title} />
                    </div>
                </div>
                    <div className="lg:col-span-2 flex items-center justify-center w-full">
                        <div className="p-4 text-center max-w-3xl min-w-2xl">
                            <h1 className="font-bold text-2xl mb-4">{val.title}</h1>
                            <p className="italic">{val.size}</p>
                            <p className="justify my-10 lg:text-2xl" dangerouslySetInnerHTML={{ __html: val.description }}/>
                            <p className="italic">{val.material}</p>
                            <div className="w-full flex items-center self-center justify-center gap-10 mt-5">
                                {prev && <Link href={prev.id} className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black">Previous</Link>}
                                <SelectDropDown defaultValue={val.id} options={filteredArr} />
                                {next && <Link href={next.id} className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black">Next</Link>}
                            </div>
                        </div>
                </div>
            </> :
            <p className='text-center font-bold p-3 text-white'>Looks like this peice does not exist.</p>
            }
        </div>
    )
}