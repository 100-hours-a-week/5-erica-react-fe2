import search from "../../assets/images/search.png";
import styles from "../../styles/SearchBar.module.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  function handleFocusInput() {
    setFocus(true);
  }

  function handleClickOutside(event) {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setFocus(false);
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("q", inputValue);
      navigate(`${currentUrl.pathname}${currentUrl.search}`);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchContainerRef}
      className={focus ? styles.searchContainerFocus : styles.searchContainer}
    >
      <img alt="search" src={search} className={styles.searchIcon} />
      <input
        onFocus={handleFocusInput}
        className={styles.searchInput}
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}
