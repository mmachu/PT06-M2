import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const onChange = (value) => {
    setCity(value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => onChange(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
