import { FC, ReactNode } from "react";
import styles from './index.module.scss'

interface iElementMenuProps {
  children: ReactNode;
}

const ElementMenu: FC<iElementMenuProps> = (props) => {
  const { children } = props;
  return <li className={styles.menuItem}>{children}</li>;
};

export default ElementMenu;
