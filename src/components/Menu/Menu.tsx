import { FC } from "react";
import ElementMenu from "./ElementMenu/ElementMenu";
import styles from "./index.module.scss";

import { SiCss3 } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";

const Menu: FC = () => {
  return (
    <nav className={styles.navMenu}>
      <ul className={styles.menuList}>
        <ElementMenu to="/">
          <div id="icon">
            <AiFillHome />
          </div>
          <p>Главная</p>
        </ElementMenu>
        <ElementMenu to="/css">
          <div id="icon">
            <SiCss3 />
          </div>
          <p>Фишка</p>
        </ElementMenu>
        <ElementMenu to="/javascript">
          <div id="icon">
            <IoLogoJavascript />
          </div>
          <p>JavaScript</p>
        </ElementMenu>
        <ElementMenu to="https://github.com/zhebarov-m/Portfolio.git">
          <div id="icon">
            <BsGithub />
          </div>
          <p>Мой код</p>
        </ElementMenu>
        <ElementMenu to="/not-found">
          <div id="icon">{/* <TbBrandReact /> */}</div>
          <p>н/д</p>
        </ElementMenu>
      </ul>
    </nav>
  );
};

export default Menu;
