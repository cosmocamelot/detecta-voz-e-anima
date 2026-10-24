import { useState } from 'react';
import styles from './style.module.css';

const CHROMAKEY_DEFAULT_COLOR = '#00FF00';
const CHROMAKEY_COLOR_OPTIONS = [
  ['verde', '#00FF00'],
  ['azul', '#0000FF'],
  ['magenta', '#FF00FF']
];

export function ChromaKeyColorSelect() {
  const [selectedColor, setSelectedColor] = useState(CHROMAKEY_DEFAULT_COLOR);

  const onChangeColor = (event) => {
    const value = event.target.value;
    setSelectedColor(value);
  }

  const selectColorSuggestion = (event) => {
    const value = event.target.dataset.colorValue;
    setSelectedColor(value);
  }

  return (
    <>
      <div className={styles.chromaKeyContainer}>
        <h4>Altere a cor do Chroma Key</h4>

        {/* TODO: validar com regex a entrada */}
        <label className={styles.label}>
          <input type="text" className={styles.inputColorText} value={selectedColor} onChange={onChangeColor} />
        </label>

        <label className={styles.label} style={{ backgroundColor: selectedColor }}>
          <input id='input-color' type="color" className={styles.inputColor} value={selectedColor} onChange={onChangeColor} />
        </label>

        <div className={styles.suggestion}>
          {CHROMAKEY_COLOR_OPTIONS.map(([text, value]) => (
            <button className={styles.colorSuggentionButton} key={value} data-color-value={value} onClick={selectColorSuggestion}>{text}</button>
          ))}
          <label htmlFor="input-color" className={styles.colorSuggentionButton}>
            personalizada
          </label>
        </div>

        <div className={styles.info}>
          <b>Formatos aceitos:</b>
          <ul className={styles.infoList}>
            <li>
              <i><b>Hex:</b> #FFFFFF</i>
            </li>
            <li>
              <i><b>RGB:</b> rgb(255,255,255)</i>
            </li>
            <li>
              <i><b>RGBA:</b> rgb(255,255,255,1.0)</i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
