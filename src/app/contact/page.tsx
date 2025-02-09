import Link from "next/link";

export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
        <Link href = "/" className="hover:scale-105 font-martelSans text-5xl font-serif text-white p-6 bg-main inline-block absolute top-0 left-0">
            WORDS FOR WEDNESDAY
        </Link>
        <h1 className="text-5xl font-serif text-white p-6 bg-[#32402f] inline-block">
          CONTACT
        </h1>
  
        <p className="text-lg text-center max-w-2xl mt-6">
          For inquiries regarding <span className="font-semibold">custom paintings, drawings, or purchasing art</span>, please reach out to us at:
        </p>
  
        <a
          href="mailto:inquiries@example.com"
          className="border border-white text-white px-6 py-3 mt-6 text-xl hover:bg-white hover:text-black transition"
        >
          wfw.arts@gmail.com
        </a>
  
        <p className="text-sm text-gray-400 mt-4">
          We’ll get back to you as soon as possible.
        </p>
      </main>
    )
}