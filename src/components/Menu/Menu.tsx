import { FC } from "react";
import ElementMenu from "./ElementMenu/ElementMenu";
import styles from "./index.module.scss";
import { GoHome } from "react-icons/go";
import { SiCss3 } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReact } from "react-icons/tb";

const Menu: FC = () => {
  return (
    <nav className={styles.navMenu}>
      <ul className={styles.menuList}>
        <ElementMenu>
          <div id="icon">
            <AiFillHome />
          </div>
          <p>Главная</p>
        </ElementMenu>
        <ElementMenu>
          <div id="icon">
            <SiCss3 />
          </div>
          <p>Фишка</p>
        </ElementMenu>
        <ElementMenu>
          <div id="icon">
            <IoLogoJavascript />
          </div>
          <p>JavaScript</p>
        </ElementMenu>
        <ElementMenu>
          <div id="icon">

          </div>
          <p>н/д</p>
        </ElementMenu>
        <ElementMenu>
          <div id="icon">
            {/* <TbBrandReact /> */}
          </div>
          <p>н/д</p>
        </ElementMenu>
      </ul>
    </nav>
  );
};

export default Menu;
