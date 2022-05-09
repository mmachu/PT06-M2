import React from "react";
import styles from "../css/searchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
export default function SearchBar(props) {
  // acá va tu código

  return (
    <div className={styles.container}>
      <input
        className={styles.searchBox}
        type="text"
        placeholder=" Ciudad..."
        name="ciudad"
        id="ciudad"
      />
      <button className={styles.searchButton}>
        <AiOutlineSearch size={30} />
      </button>
    </div>
  );
}
