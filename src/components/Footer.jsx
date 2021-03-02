import React from "react";
import "./PokeList"

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className ="footer">
      <p>Jason Zhang ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
