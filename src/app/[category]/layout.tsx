import Link from "next/link";

export default function layout({children, params}: {children: React.ReactNode, params: { category: string }}) {

    return(
        <main className="min-h-screen min-w-screen bg-main">
            <div className="grid grid-cols-3 items-center">
                <Link href = "/" className="bg-white dark:bg-black text-black dark:text-white text-xl xl:text-5xl text-center p-6 font-martelSans cursor-pointer hover:scale-105">
                    WORDS FOR WEDNESDAY
                </Link>
                <div className=" flex items-center justify-center col-span-2 bg-main text-white text-5xl w-full h-full">
                    <span className="text-center items-center flex justify-center font-arimo border border-white p-4">
                        {params.category?.toUpperCase()}
                    </span>
                </div>
            </div>
            {children}
        </main>
    )
}