import { Outlet } from "react-router-dom";
import AppNave from "./AppNave";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNave />
      <Outlet />
      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorlWise Inc
      </p>
    </div>
  );
}

export default Sidebar;
