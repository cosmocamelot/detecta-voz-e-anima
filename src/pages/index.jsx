import { Outlet } from "react-router";
import { Move, Power, Target } from "lucide-react";

import styles from './style.module.css';
import { useState } from "react";
import { ChromaKeyColorSelect } from "../components/chroma-key-color-select";

const hiddenClass = styles.hidden;

export default () => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [configurationPanel, setConfigurationPanel] = useState('');
  const closeApp = () => window.customAPI.exitApp();

  const toggleMenuVisibility = () => setMenuVisible(!menuVisible);

  const selectConfigurationPanel = (event) => {
    const panel = event.target.dataset.panel;
    const newValue =  (configurationPanel === panel) ? '' : panel;

    setConfigurationPanel(newValue);
  };

  return (
    <>
      <div className={[styles.mainPageContainer, (!menuVisible && hiddenClass)].join(' ')}>
        <span className={styles.dragWindow}>
          <Move />
        </span>

        {/* Manuprincipal + Seleção de perfis */}
        <div className={styles.sideBar}>
          <div className={[styles.group, styles.expanded].join(' ')}>
            <button className={styles.button} data-panel="chroma-key" onClick={selectConfigurationPanel}>
              <Target className={styles.icon} />
              <span className={styles.buttonContent}>
                Chroma Key
              </span>
            </button>
          </div>
          <div className={styles.group}>
            <button className={[styles.button, styles.exitAppButton].join(' ')} onClick={closeApp}>
              <Power strokeWidth={3} />
            </button>
          </div>
        </div>

        <main className={styles.display} onClick={toggleMenuVisibility}>
          <Outlet />
        </main>

        {/* Configuração de perfis */}
        <div className={styles.sideBar}>
          <div className={[styles.group, styles.expanded].join(' ')}>

          </div>
        </div>
      </div>

      <div className={styles.windowConfig}>
        {configurationPanel == 'chroma-key' && <ChromaKeyColorSelect />}
      </div>
    </>
  );
}
