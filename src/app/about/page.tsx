"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    id: 1,
    title: "WORDS FOR WEDNESDAY",
    subtitle: "ABOUT THE PEN HOLDER",
    image: "/about-1.jpg", // Update paths if needed
    buttonLabel: "READ MORE"
  },
  {
    id: 2,
    content: (
      <>
        <p className="text-lg text-white max-w-3xl mx-auto text-center leading-loose">
          "Born in Dominica and now based in Toronto, this mixed-media artist
          crafts their work with a ‘What if?’ approach—no plans, no clear
          images, just the thrill of discovering what happens next. With zero
          formal training (unless you count high school art class), the artist’s
          creations are always a surprise, even to them."
        </p>
        <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
          The images tell the artist their stories as they evolve, and there’s
          an openness to hearing others’ stories about what they see, building a
          universe for each narrative as more people contribute.
        </p>
      </>
    ),
    buttonLabel: "WHY AM I HERE?",
  },
  {
    id: 3,
    content: (
      <>
        <h2 className="text-4xl text-white text-center font-semibold">
          Once upon a Wednesday
        </h2>
        <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
        Once upon a Wednesday, some decades ago, a creature was born on the small Caribbean Island of Dominica. It was an island just finding its footing as an independent nation in the wake of Colonialism. The island was alive with rushing rivers, calming streams, temperamental seas and inescapable lush green landscapes. It held promise for the future, glowing with the calm vibrancy of its natural surroundings, but it's society still and heavy under the quiet and heavy weight of its recent history.
        </p>
        <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
        The creature small and inquisitive grew into a paradox befitting its surroundings. It was quiet but talkative, cautious but curious. It may have been smart once-at least that's what it was told. It learned quickly, followed instructions, and investigated often. But no matter how sharp its mind, there was always some difficulty in the world's unspoken rules. The creature often found itself stumbling over tasks that had to be completed just so, with steps that seemed arbitrary, yet somehow sacred to everyone
        </p>
        <Link
        href={"/"}
        className="border border-white text-white px-6 py-3 mt-6 text-xl hover:bg-white hover:text-black transition"
        >
        HOME
        </Link>
      </>
    ),
  },
];

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative">
       { currentIndex === 0 &&
         <h1 className="text-5xl font-serif text-white p-6 bg-main inline-block absolute top-0 left-0">
            WORDS FOR WEDNESDAY
        </h1>
        }
      <AnimatePresence mode="wait">
        {sections.map(
          (section, index) =>
            index === currentIndex && (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-4xl flex flex-col items-center text-center"
              >
                {section.image ? (
                  <div className="w-full">
                    <p className="border border-white text-white py-3 px-6 mt-4 text-xl">
                      {section.subtitle}
                    </p>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="rounded-full w-80 h-80 mx-auto mt-6"
                    />
                  </div>
                ) : (
                  section.content
                )}

                {section.buttonLabel && (
                  <button
                    className="border border-white text-white px-6 py-3 mt-6 text-xl hover:bg-white hover:text-black transition"
                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                  >
                    {section.buttonLabel}
                  </button>
                )}
              </motion.div>
            )
        )}
      </AnimatePresence>
    </main>
  );
}