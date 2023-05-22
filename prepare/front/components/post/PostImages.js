import React from "react";

export default function PostImages({ image }) {
  console.log(image);
  return (
    <div>
      {image.map((img) => (
        <img src={img.src} />
      ))}
    </div>
  );
}
