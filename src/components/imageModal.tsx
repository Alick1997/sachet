"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageModal({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Thumbnail Image (Click to Open Modal) */}
      <Image
        src={src}
        alt={alt}
        width={300}
        height={200}
        className="cursor-pointer rounded-lg shadow-md hover:scale-105 transition-transform"
        onClick={() => setIsOpen(true)}
      />

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setIsOpen(false)} // Close on background click
        >
          <div
            className="relative p-4 bg-white rounded-lg shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            {/* Full-Size Image */}
            <Image
              src={src}
              alt={alt}
              width={800}
              height={600}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}