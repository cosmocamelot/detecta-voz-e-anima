import { Outlet } from "react-router";
import { Move, Power } from "lucide-react";

import styles from './style.module.css';

const hiddenClass = styles.hidden;

export default () => {
  const closeApp = () => window.customAPI.exitApp();

  return (
    <div className={styles.mainPageContainer}>
      <span className={styles.dragWindow}>
        <Move />
      </span>

      {/* Manuprincipal + Seleção de perfis */}
      <div className={styles.sideBar}>
        <div className={[styles.group, styles.expanded].join(' ')}>
        </div>
        <div className={styles.group}>
          <button className={[styles.button, styles.exitAppButton].join(' ')} onClick={closeApp}>
            <Power strokeWidth={3} />
          </button>
        </div>
      </div>

      <main className={styles.display}>
        <Outlet />
      </main>

      {/* Configuração de perfis */}
      <div className={styles.sideBar}>
        <div className={[styles.group, styles.expanded].join(' ')}>

        </div>
      </div>
    </div>
  );
}
