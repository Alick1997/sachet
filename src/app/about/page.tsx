"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    id: 1,
    title: "WORDS FOR WEDNESDAY",
    subtitle: "ABOUT THE PEN HOLDER",
    image: "/about.jpg", // Update paths if needed
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
        The creature small and inquisitive grew into a paradox befitting its surroundings. It was quiet but talkative, cautious but curious. It may have been smart once-at least that's what it was told. It learned quickly, followed instructions, and investigated often. But no matter how sharp its mind, there was always some difficulty in the world's unspoken rules. The creature often found itself stumbling over tasks that had to be completed just so, with steps that seemed arbitrary, yet somehow sacred to everyone else.
        </p>
      </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 4,
    content: (
      <>
        <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
        It stumbled often, but still, it persisted. It moved along the beaten and well-intentioned path—the one that promised it would lead to success and the ever-elusive sense of belonging. As the being grew, it became aware. The world was loud. Very loud. Voices, footsteps, flickering lights, and the constant hum of electricity all blended like an endless symphony. The symphony made waves that could be felt on the skin of its physical form, echoing in its little mind. Did everyone feel like this all the time? Surely they did, the being was not special. It was exhausting and distracting, but the being adapted. It just needed something to focus on. So—the being would draw.        
        </p>
        <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
        The creature small and inquisitive grew into a paradox befitting its surroundings. It was quiet but talkative, cautious but curious. It may have been smart once-at least that's what it was told. It learned quickly, followed instructions, and investigated often. But no matter how sharp its mind, there was always some difficulty in the world's unspoken rules. The creature often found itself stumbling over tasks that had to be completed just so, with steps that seemed arbitrary, yet somehow sacred to everyone else.
        </p>
      </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 4,
    content: (
        <Image src = '/about1.png' width={220} height={220} alt = "Drawing from 2005." />
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 5,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            Soon, the being learned about subtext. The people around the it were always saying more than the words that they used. The being was confronted with the subtext in its own speech—never what it intended to say and changing from person to person. Every glance, every shift in tone, every unspoken rule was absorbed by the being. It was hard to tell which pieces of information truly mattered, so the being collected them all. Surely, it would be easier to decipher as the being got older and understood more. In the meantime, the being would learn to speak less.            </p>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The being found that it thought in colours and images and that others could not recognize its language. The being found its physical body a hinderance to its mind. If only it could vibrate thoughts, images or emotions to those around it as it wished it could. Nothing would be impossible. But as it could not, the being continued to adapt. It collected words and actions, translated them into colours and images for itself, and then painstakingly converted them back into sounds and syllables for a world that only valued speech. This took additional energy, often more than the being had, but it continued to collect. Education fed its curiosity and would surely teach it the words and methods it needed to communicate. There had to be rules for communication somewhere.            
            </p>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 6,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The being travelled to Canada. Much louder. New subtext. This world was grey—and cold. The being adapted. It learned formally and informally, weaving together these strands of knowledge with its experience. As it went, the being continued to draw, sketch and scribble.
            </p>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 7,
    content: (
        <Image src = '/about2.png' width={220} height={220} alt = "Drawing for about page 2." />
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 8,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The being completed its work, starting with legal studies, moving on to psychology and anthropology, later finding itself in library services; a series haphazard efforts to some, but a logical collection of missing pieces for the being. It made connections and delivered results, that were praised and celebrated—until the moments when it truly mattered.             
            </p>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The being tried in earnest to take its knowledge and its own journey of survival to do what it had always wanted to do—help. It had survived a series life’s unavoidable tragedies—death, illness and loss—heavy, inflexible parts of life, all on its own. First one. Then three. And eventually eleven. These events shaped the being but still, the being accomplished. It struggled, and accomplished, but before it could celebrate, the world had already moved on: “What are you doing next?” The being persisted, though it was never sure why.            
            </p>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 9,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The being found itself in academia, the ultimate environment for the permanently curious. A labyrinth of knowledge as fascinating as it was needlessly complicated. Existing between the life altering unavoidable events and the supposedly natural stresses of being a student, the being wondered: why were things this hard when they didn’t need to be? Life was already difficult enough—surely, the gatekeepers of information didn’t have to make it worse.            
            </p>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            And so, the being found ambition in its mission to make information more accessible. It had learned how language could shape a person, a society. It’s health. It knew that words could easily build bridges or walls depending on how they were used and interpreted. It worked hard to untangle complex language, translate jargon into clarity without losing the essence of what mattered for itself. It had seen others around it struggle to do the same, so it earned to translate, so it could do what it wished others had done for it and its peers: taking the time, having the patience to make things make sense.            
            </p>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 10,
    content: (
        <Image src = '/about3.png' width={620} height={220} alt = "Drawing for about page 2." />
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 11,
    content: (
        <>
            <h1 className="text-4xl text-white text-center font-semibold">With words, sometimes less is more. </h1>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The being was excited to have found its purpose, determined to contribute to a kinder way of navigating the world, creating light on the path for others even as the path remained dim for itself. The being worked, constantly navigating social norms and obligations and communicating as it learned others preferred. The being had prepared, trained, studied for this, and now it was time to put it to work.             
            </p>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 12,
    content: (
        <Image src = '/about4.jpg' width={220} height={220} alt = "Drawing for about page 2." />
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 13,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The being found resistance. At first, it thought it might be a misunderstanding. Words had always been complicated, this was simply a failure to communicate its needs and intentions. Perhaps some unintended subtext was louder than the words it had used. It thought hard, and tried to explain itself, but the resistance was louder and firmer than before. “This is not how things are done.” The being was told. Its goals were labelled, unnecessary, a waste of time. The wrong way. 
            </p>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The being however, had been trained well. It did what it had always been taught to do when presented with doubt: find evidence, re-evaluate and try again. It researched. It adjusted. It practiced. It found the words to explain its reasonings. Surely, it thought, resistance would soften when met with proof. When met with visible effort. But soften it did not. The being was encouraged to abandon its goals, those born from empathy and built on hard won understanding of how to navigate its environments. It was asked to set aside what it knew to be valuable and replace it with what would be appropriate, dethatched from the things it cared about and without the meaning it had spent so long searching for.
            </p>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 14,
    content: (
        <h1 className="text-4xl text-white text-center font-semibold">“This is what is best.” The world told the being.{'\n'} And so, the being did as it was told.</h1>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 15,
    content: (
        <Image src = '/about5.jpg' width={620} height={220} alt = "Drawing for about page 5." />
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 16,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The being struggled, but it persisted. It always had. This was simply another challenge— “This is just what life is.” it was told. The being pushed forward even as things got heavier, felt harder. Still, the being accomplished and with each accomplishment came more tasks, more assigned goals. More and more and life itself continued around it. And the world became louder.
            </p>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 17,
    content: (
        <Image src = '/about6.png' width={420} height={420} alt = "Drawing for about page 6." />
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 18,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            Overwhelmed, the being asked for help. Surely, it thought the world would understand having seen all she had done, continued to do. This load was too much for one being. But the world was unyielding: “You are not trying hard enough.” So the being tried harder. It stretched itself thinner and thinner, sacrificing rest, joy, and its own well-being to meet the demands it was told should be manageable. The being turned inward as it had so often had to do, looking for new ways to adapt. Each time it found some small adjustment to make life more bearable, it was discouraged. “This is normal, and you need to try harder. This is how things are done. This is how they have always been done.”
            </p>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            So, the being tried. It kept trying long after it reserves had run dry. It sought help using new words, new approaches, scripting new ways of explaining what it needed. Why it needed. It made efforts to be present and reciprocate the way it thought was would be appreciated. They did not come naturally, but the being made efforts. Surely, if it could just say the right thing, the right way, things would change. They would see how hard it tried. They would understand. 
            </p>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 19,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            But the world grew tired of the being’s struggle and its patience wore thin. It looked at the being with disdain, “Why can’t you just get it?” It decided the being could not be overwhelmed, exhausted, expressing a genuine need for something different. No, it decided that the being was avoiding its responsibilities. The being was idle and clearly just did not care. It didn’t understand how things worked, how they are supposed to be. The being was simply being difficult. 
            </p>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The being was at a loss. It had bent, stretched, suppressed, forced and changed...adapted to prove its worth. To show that it could succeed in the way the world insisted, to show that it cared. And yet—it found that even those who were supposed to know it best of all, could not, or perhaps would not understand it. It had run out of steam. It had done everything it was supposed to do and more yet somehow it was still not enough.  The being wondered, not for the first time: What if it never would be? 
            </p>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 20,
    content: (
        <Image src = '/about7.png' width={620} height={220} alt = "Drawing for about page 7." />
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 21,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The being was stopped. It could not eat, it could not sleep, and it could no longer make itself speak.             
            </p>
            <h1 className="text-4xl text-white text-center font-semibold">
            What the fuck just happened?              
            </h1>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 22,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The being felt, disoriented. It had done everything it “should” on the path it was told to follow, only to find itself not just broken, but punished for how the universe had built it. It would never be enough. The being retreated into itself.              
            </p>
            <h1 className="text-4xl text-white text-center font-semibold">
            It had a decision to make.               
            </h1>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 23,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            Life was a choice. The being knew it didn’t have to continue. This was unsustainable, how could it continue? It didn't know what to do, but it did what it always did to ground itself—it drew—and painted.              
            </p>
            <h1 className="text-4xl text-white text-center font-semibold">
            "Why should I be here?" it thought.               
            </h1>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 24,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            It could no longer trust the path, the people or the system that had brought it to this breaking point. It did not belong there, it never had. The world did not want it as itself, but some imagined version that it could not be.            
            </p>
            <h1 className="text-4xl text-white text-center font-semibold">
            So what now?                
            </h1>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 25,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The questions swirled, and the being kept drawing. What choice did it have?            
            </p>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            The being found itself at zero. Its physical abilities faltered, its energy bled away as from an open wound, it could not think, yet the world’s demands continued: “Just do more.” But the being could not. It could only draw, and paint.
            </p>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 26,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            It would draw. The being had been taught that this was not enough, but its mind had taken its leave. Perhaps the one thing that had always grounded it, could be the foundation for something new. The being had tried using words and actions, but they always ended up lost in translation leaving the being feeling like an anomaly in its own existence. “Maybe working against yourself isn’t the key to success.” It thought. “You idiot.”
            </p>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            What if, the being just let its brain work as it does? Subtext would not matter, there would be no need to translate, and re-translate. The being had no formal training in creation, no rules to follow except the ones it made for itself. It drew its feelings, often without meaning to, letting shapes and colors lead the way. Scenes evolved naturally, the process messy and unpredictable, but honest. Which is all it ever wished it had the safety to be.  “It would be a risk.” thought the being but it would have to try.            
            </p>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 27,
    content: (
        <>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            It didn’t matter if the interpretations were "wrong"—there was no wrong. It did not matter what its process looked like on the outside. The being had other ways it knew to communicate, asking its favorite question: I know what I see, but what do you see? The being never got the same answer twice, but every conversation was a shared experience of storytelling where everyone took as much or as little as they need. Each piece of art earned its own universe with every new interpretation.
            </p>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            "Maybe this is it." thought the being. "Maybe this is how it was meant to be." It knew the world had been nothing but resistance up until now, and it remained realistic, even fearful. But the being persists. It learns and it improves. It finds itself on a journey of trusting its brain’s natural flow, of not forcing things—embracing the unusual and the imperfect. That is all it ever has been. The being does not know why, but it still, persists.            
            </p>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 28,
    content: (
        <>
            <h1 className="text-4xl text-white text-center font-semibold">
            After all, what other choice does it have?         
            </h1>
        </>
    ),
    buttonLabel: ">",
    backButtonLabel: "<"
  },
  {
    id: 29,
    content: (
        <>
            <h1 className="text-4xl text-white text-center font-semibold">
            Too Long Didn’t Read (TLDR): {'\n'}
            </h1>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            Turns out the being is neurodiverse. 
            </p>
            <p className="text-lg text-white max-w-3xl mx-auto text-center mt-4 leading-loose">
            It tried to fit in, it failed, and now it must build a hovel of inclusion for itself.        
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
       { (currentIndex === 0 ||( currentIndex === sections.length - 1)) &&
         <Link href = '/' className="text-5xl hover:scale-105 font-martelSans text-white p-6 bg-main inline-block absolute top-0 left-0">
            WORDS FOR WEDNESDAY
        </Link>
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
                <div className="flex items-center gap-4">
                {section.backButtonLabel && (
                  <button
                    className="border border-white text-white px-6 py-3 mt-6 text-xl hover:bg-white hover:text-black transition"
                    onClick={() => setCurrentIndex((prev) => prev - 1)}
                  >
                    {section.backButtonLabel}
                  </button>
                )}
                {section.buttonLabel && (
                  <button
                    className="border border-white text-white px-6 py-3 mt-6 text-xl hover:bg-white hover:text-black transition"
                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                  >
                    {section.buttonLabel}
                  </button>
                )}
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </main>
  );
}