import React, { useState, useEffect } from "react";
const url = "./IMAGES-site"
function ImageList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(url);
      const data = await response.json();
      setImages(data);
    }

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Liste des images</h1>
      <form>
        <div>
          <label htmlFor="legende">Légende :</label>
          <input type="text" id="legende" name="legende" />
        </div>
        <div>
          <label htmlFor="ordre">Ordre :</label>
          <input type="number" id="ordre" name="ordre" />
        </div>
      </form>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img src={image.url} alt={`Image ${index}`} />
            <p>{image.legende}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageList;