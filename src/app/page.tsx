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
    const randomIndex = Math.floor(Math.random() * noResponses.length);
    setNoText(noResponses[randomIndex]);
    const randomImageIndex = Math.floor(Math.random() * sadImages.length);
    setImageSrc(sadImages[randomImageIndex]);
    setYesSize((prevSize) => prevSize + 10);
    setNoSize((prevSize) => (prevSize > 10 ? prevSize - 2 : prevSize));
  };

  return (
    <section className="bg-[url(/fondo2.jpg)] h-screen flex justify-center items-center text-center">
      <div className="flex flex-col justify-center">
        <h1 className="text-white font-bold text-5xl text-center">
          ¿Quieres ser mi San Valentín?
        </h1>
        <img
          src={imageSrc}
          width={400}
          height={400}
          alt="San Valentin"
          className="mx-auto transition-all duration-300"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center justify-center p-5">
          <button
            className="bg-green-500 m-4 relative text-white font-bold p-2 rounded-md transition-all duration-300"
            style={{ fontSize: `${yesSize}px`, padding: `${yesSize / 3}px` }}
          >
            Sí
          </button>
          <button
            className="bg-red-500 m-4 text-white font-bold rounded-md transition-all duration-300"
            style={{ fontSize: `${noSize}px`, padding: `${noSize / 3}px` }}
            onClick={handleNoClick}
          >
            {noText}
          </button>
        </div>
      </div>
    </section>
  );
}
