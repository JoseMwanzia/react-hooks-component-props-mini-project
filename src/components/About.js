import React from "react";
import blogData from "../data/blog";

function About({ image,about }) {
  return (
    <aside>
      <img src = {image ? image : "https://via.placeholder.com/215"} alt='blog logo' ></img>
      <p>{about}</p>
    </aside>
  );
}

export default About;
