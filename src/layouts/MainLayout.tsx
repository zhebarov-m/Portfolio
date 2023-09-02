import { FC } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import Menu from "../components/Menu/Menu";
import styles from './index.module.scss'

const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.flexContainer}>
        <Profile />
        <div>
          <Menu />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
