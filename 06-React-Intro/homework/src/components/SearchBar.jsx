import React from "react";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className="my-container">
      <div className="search-bar-container">
        <input type="text" placeholder="Ciudad..." />
        <button onClick={onSearch}>Agregar</button>
      </div>
    </div>
  );
}
