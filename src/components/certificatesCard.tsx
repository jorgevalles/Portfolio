import React from "react";
import img1 from "../../public/React_JS_Developer.jpg";
import img2 from "../../public/consumoApi.jpg";
import img3 from "../../public/diploma-frontend-developer-practico.jpg";
import img4 from "../../public/diploma-javascript-practico.jpg";
import img5 from "../../public/diploma-basico-javascript.jpg";
import img6 from "../../public/diploma-prework-windows.jpg";
import img7 from "../../public/english_for_developers.png";
import Image from "next/image";

export default function CertificatesCard() {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  return (
    <div>
      {images.map((img) => (
        <div key={img.src} className="my-3 flex justify-center">
          <Image
            src={img.src}
            alt="Landscape picture"
            width={800}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}
