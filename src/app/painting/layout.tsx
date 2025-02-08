
export default function layout({children}: {children: React.ReactNode}) {

    return(
        <main className="min-h-screen min-w-screen bg-main">
            <div className="grid grid-cols-3 items-center">
                <span className="bg-white dark:bg-black text-black dark:text-white text-xl xl:text-5xl text-center p-6">
                    WORDS FOR WEDNESDAY
                </span>
                <span className="col-span-2 bg-main text-white text-5xl w-full text-center h-full items-center flex justify-center">
                    PAINTINGS
                </span>
            </div>
            {children}
        </main>
    )
}