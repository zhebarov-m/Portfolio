import { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

interface iElementMenuProps {
  children: ReactNode;
  to: string;
}

const ElementMenu: FC<iElementMenuProps> = (props) => {
  const { children, to } = props;
  return (
    <NavLink className={styles.menuItem} to={to}>
      <li>{children}</li>
    </NavLink>
  );
};

export default ElementMenu;
