import { FC } from "react";
import styles from './Header.module.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Xarcho.ev</div>
      <div className={styles.darkMode}>
        <DarkModeIcon sx={{padding: "5px", bgcolor: '#fff', borderRadius: '50%', color: 'black', fontSize: '40px'}} />
      </div>
    </header>
  );
};

export default Header;
