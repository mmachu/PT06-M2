import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data, { Cairns } from "./data.js";
import stylesMainCard from "./css/mainCard.module.css";
import stylesCards from "./css/cards.module.css";

function App() {
  return (
    <div className="App">
      <SearchBar onSearch={(ciudad) => alert(ciudad)} />
      <Card
        max={Cairns.main.temp_max}
        min={Cairns.main.temp_min}
        name={Cairns.name}
        img={Cairns.weather[0].icon}
        onClose={() => alert(Cairns.name)}
        styles={stylesMainCard}
      />

      <Cards cities={data} styles={stylesCards} />
    </div>
  );
}

export default App;
