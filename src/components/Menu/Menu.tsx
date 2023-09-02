import { FC } from "react";
import ElementMenu from "./ElementMenu/ElementMenu";
import styles from "./index.module.scss";
import { GoHome } from "react-icons/go";

const Menu: FC = () => {
  return (
    <nav className={styles.navMenu}>
      <ul className={styles.menuList}>
        <ElementMenu>
          <div id="icon">
            <GoHome />
          </div>
          <p>Home</p>
        </ElementMenu>
        <ElementMenu>
          <div id="icon">
            <GoHome />
          </div>
          <p>Home</p>
        </ElementMenu>
        <ElementMenu>
          <div id="icon">
            <GoHome />
          </div>
          <p>Home</p>
        </ElementMenu>
        <ElementMenu>
          <div id="icon">
            <GoHome />
          </div>
          <p>Home</p>
        </ElementMenu>
        <ElementMenu>
          <div id="icon">
            <GoHome />
          </div>
          <p>Home</p>
        </ElementMenu>
      </ul>
    </nav>
  );
};

export default Menu;
