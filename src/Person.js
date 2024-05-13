import React from "react";

export default function Person({ name, age, images }) {
  return (
    <article>
      <div className="person">
        <img src={images} alt={name} className="img" />
        <h4>{name}</h4>
        <p>{age} year</p>
      </div>
    </article>
  );
}
