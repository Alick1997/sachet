"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type Paintings = {
    id: string;
    title: string;
    size: string;
    description: string;
    image: string;
    category: string;
    year: string;
}

export default function ImagesGrid({ data }: { data: Paintings[] }) {
    const [page, setPage] = useState(1)
    const [imgsPerPage, setImagesPerPage] = useState(10);
    const numPages = Math.ceil(data.length / imgsPerPage)
    const startIndx = (page - 1) * imgsPerPage
    const endIndx = startIndx + imgsPerPage
    const activeData = data.slice(startIndx, endIndx)

    useEffect(() => {
        function updateImagesPerPage() {
          if (window.innerWidth < 448) {
            setImagesPerPage(4); // Mobile devices
          } else if (window.innerWidth <= 1536) {
            setImagesPerPage(8); // Large screens
          } else {
            setImagesPerPage(10); // XL screens and above
          }
        }
    
        updateImagesPerPage(); // Set initial value
        window.addEventListener("resize", updateImagesPerPage);
    
        return () => window.removeEventListener("resize", updateImagesPerPage);
      }, []);

      function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setPage(parseInt(e.currentTarget.value))
      }

    return (
        <div className="w-full flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {activeData.map((val) => (
                <Link className="group relative w-60 h-60 border border-white p-10 cursor-pointer hover:scale-105" key = {val.id} href = {`/${val.category.toLowerCase()}/${val.year}/${val.id.toLowerCase()}`}>
                    <Image fill className="object-cover"  src={val.image} alt={val.title} />
                    <span className="opacity-75 flex md:hidden md:group-hover:flex text-center text-sm font-bold absolute bottom-0 left-0 p-6 text-white bg-black w-full">
                        {val.title}
                    </span>
                </Link>
                ))}
            </div>
            {numPages > 1 && (
            <div className="flex gap-4 mt-6">
            <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className={`px-4 py-2 border border-white text-white ${
                page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-black"
                }`}
            >
                Previous
            </button>
            <select
            value={page}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 bg-white text-black shadow-md rounded-md text-md"
            >
                {[...Array(numPages)].map((_, index) => {
                    const pageNum = index+1;
                    return (
                    <option key={pageNum} value={pageNum}>
                        Page {pageNum}
                    </option>
                    );
                })}
            </select>
            <button
                onClick={() => setPage((prev) => Math.min(prev + 1, numPages))}
                disabled={page === numPages}
                className={`px-4 py-2 border border-white text-white ${
                page === numPages ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-black"
                }`}
            >
                Next
            </button>
            </div>
        )}
        </div>
    )
}