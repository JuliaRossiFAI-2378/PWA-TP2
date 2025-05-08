import React, { useState, useEffect } from "react";
import styles from "./Idioma.module.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"; //se muestra como que no se usa pero si lo borras explota la pagina

const Idioma = () => {
  const [language, setLanguage] = useState(localStorage.getItem("idioma") || "en");
  const [checked, setChecked] = useState(language === "es");
  const { i18n } = useTranslation();

  const handleChange = () => {
    setLanguage(language === "es" ? "en" : "es");
    setChecked(!checked);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("idioma", language);
  }, [language]);

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className={styles.slider}>
        <span className={`${styles.sliderButton} ${checked ? styles.translate : ""}`}>
          {checked ? "ES" : "EN"}
        </span>
      </span>
    </label>
  );
};

export default Idioma;

