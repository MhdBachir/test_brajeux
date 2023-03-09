import React, { useState } from "react";
import fs from "fs";

const ImageList = () => {

function ImageList(props) {
  const [imageData, setImageData] = useState([]);

  // lire les images dans le dossier ./IMAGES-site
  const imageList = fs.readdirSync("./IMAGES-site");

  function handleInputChange(index, event) {
    // mettre à jour la légende de l'image
    const updatedImageData = [...imageData];
    updatedImageData[index].legend = event.target.value;
    setImageData(updatedImageData);
  }

  function handleNumberChange(index, event) {
    // mettre à jour l'entier de l'image
    const updatedImageData = [...imageData];
    updatedImageData[index].order = event.target.value;
    setImageData(updatedImageData);
  }

  function handleSubmit() {
    // écrire les données dans le fichier orderOfImages.js
    const data = imageData.map((image, index) => {
      const imageName = imageList[index];
      const orderName = `${image.order}_${image.legend}`;
      const imageUrl = `./IMAGES-site/${imageName}`;
      return { orderName, imageUrl };
    });

    const fileContent = `module.exports = ${JSON.stringify(data)};`;
    fs.writeFileSync("orderOfImages.js", fileContent);
  }

  return (
    <div className="w-full h-full">
      <h1>Liste des images</h1>
      <ul>
        {imageList.map((imageName, index) => (
          <li key={index}>
            <img src={`./IMAGES-site/${imageName}`} alt={imageName} />
            <input
              type="text"
              placeholder="Légende"
              value={imageData[index]?.legend}
              onChange={(event) => handleInputChange(index, event)}
            />
            <input
              type="number"
              placeholder="Entier"
              value={imageData[index]?.order}
              onChange={(event) => handleNumberChange(index, event)}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

}
export default ImageList;