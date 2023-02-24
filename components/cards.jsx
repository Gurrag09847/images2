import { useEffect, useState } from "react";
import Card from "./card";

export default function Cards() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?query=forest&per_page=1000&client_id=L_zVSqq714P8lah4wbT-cdwU2nJpsT0OanZUq_RxhNk`
      );
      const res = await data.json();

      setImages(res.results);
    }
    fetchImages();
  }, []);

  return (
    <div className="cards">
      {images?.map((image) => (
        <Card key={image.urls.regular} image={image} />
      ))}
    </div>
  );
}
