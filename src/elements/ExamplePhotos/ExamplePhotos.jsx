import React from "react";
import "./ExamplePhoto.css";
import example1 from "../../images/ExamplePhotos/image 1.png";
import example2 from "../../images/ExamplePhotos/image 3 (1).png";
import { useLang } from "../../context/LangContextProvider";

const ExamplePhotos = () => {
  const { translationsEgg } = useLang();
  return (
    <div className="example_images_main">
      <h3>{translationsEgg.example}</h3>
      <div className="example_images_photos">
        {" "}
        <img src={example2} alt="example 2" />
        <img src={example1} alt="example 1" />
      </div>
    </div>
  );
};

export default ExamplePhotos;
