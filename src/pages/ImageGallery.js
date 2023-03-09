import React from "react";
import fs from "fs";

function ImageGallery() {
  // lire les images dans le dossier ./IMAGES-site
  const imageList = fs.readdirSync("./IMAGES-site");

  return (
    <div>
      <h1>Galerie d'images</h1>
      <ul>
        {imageList.map((imageName, index) => (
          <li key={index}>
            <img src={`./IMAGES-site/${imageName}`} alt={imageName} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;
