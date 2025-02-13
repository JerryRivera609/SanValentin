"use client";

import { useState } from "react";

export default function Home() {
  const [noText, setNoText] = useState("No");
  const [yesSize, setYesSize] = useState(20); // Tamaño inicial en px
  const [imageSrc, setImageSrc] = useState(
    "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
  );
  const [showMessage, setShowMessage] = useState(false);
  const [noSize, setNoSize] = useState(20); // Tamaño inicial del botón "No"

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
    setNoSize((prevSize) => Math.max(prevSize - 2, 0)); // Reduce tamaño del botón "No"
  };

  const handleYesClick = () => {
    setShowMessage(true);
  };

  return (
    <section className="bg-[url(/fondo2.jpg)] h-screen flex justify-center items-center text-center p-5">
      {showMessage ? (
        <>
        <div className="flex flex-col">
        <h2 className="text-white font-bold text-5xl">¡Sabia que dirias que si!! 💖</h2>
        <img src="https://media.tenor.com/W-byiJCQlucAAAAi/peach-goma.gif" alt="" />
        </div>
        </>
      ) : (
        <div className="flex flex-col justify-center w-full max-w-sm">
          <h1 className="text-white font-bold text-3xl">¿Quieres ser mi San Valentín?</h1>
          <img
            src={imageSrc}
            width={260}
            height={260}
            alt="San Valentin"
            className="mx-auto transition-all duration-300"
          />
          <div className="flex justify-around  mt-5 relative w-full overflow-hidden">
            <button
              className="bg-green-500 text-white font-bold rounded-md transition-all duration-300"
              style={{ fontSize: `${yesSize}px`, padding: `${yesSize / 3}px` }}
              onClick={handleYesClick}
            >
              Sí
            </button>
            {noSize > 0 && (
              <button
                className="bg-red-500 text-white font-bold rounded-md transition-all duration-300"
                style={{ fontSize: `${noSize}px`, padding: `${noSize / 3}px` }}
                onClick={handleNoClick}
              >
                {noText}
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
