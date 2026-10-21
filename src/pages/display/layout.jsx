import { Outlet } from "react-router";
import styles from './style.module.css';

export default () => {
  return (
    <div className={styles.chromaKey}>
      <Outlet />
    </div>
  );
}
