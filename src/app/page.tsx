"use client";

import { useState } from "react";

export default function Home() {
  const [noText, setNoText] = useState("No");
  const [yesSize, setYesSize] = useState(20);
  const [noSize, setNoSize] = useState(20);
  const [imageSrc, setImageSrc] = useState(
    "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
  );

  const noResponses = [
    "¿Estás segura?",
    "¿En serio?",
    "¡Piénsalo bien!",
    "Última oportunidad...",
    "No me hagas esto 😢",
    "Te arrepentirás...",
    "Dame una chance 🥺",
  ];

  const sadImages = [
    "https://media.tenor.com/Bn88VELdNI8AAAAi/peach-goma.gif",
    "https://c.tenor.com/Fld60zdbNpwAAAAd/tenor.gif",
    "https://media.tenor.com/cbEccaK9QxMAAAAi/peach-goma.gif",
    "https://i.pinimg.com/originals/77/6b/21/776b215bed3deeef47fd3aa657685a18.gif",
    "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif",
    "https://c.tenor.com/YwvrqWj5CsMAAAAC/tenor.gif",
  ];

  const handleNoClick = () => {
    setNoText(noResponses[Math.floor(Math.random() * noResponses.length)]);
    setImageSrc(sadImages[Math.floor(Math.random() * sadImages.length)]);
    setYesSize((prev) => prev + 10);
    setNoSize((prev) => Math.max(prev - 2, 10));
  };

  return (
    <section className="bg-[url(/fondo2.jpg)] h-screen flex justify-center items-center text-center px-4">
      <div className="flex flex-col justify-center w-full max-w-xs">
        <h1 className="text-white font-bold text-5xl sm:text-4xl">¿Quieres ser mi San Valentín?</h1>
        <img
          src={imageSrc}
          width={250}
          height={250}
          alt="San Valentin"
          className="mx-auto transition-all duration-300 mt-5"
        />
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            className="bg-green-500 text-white font-bold rounded-md transition-all duration-300"
            style={{ fontSize: `${yesSize}px`, padding: `${yesSize / 3}px`, minWidth: "60px" }}
          >
            Sí
          </button>
          <button
            className="bg-red-500 text-white font-bold rounded-md transition-all duration-300"
            style={{ fontSize: `${noSize}px`, padding: `${noSize / 3}px`, minWidth: "5px" }}
            onClick={handleNoClick}
          >
            {noText}
          </button>
        </div>
      </div>
    </section>
  );
}
