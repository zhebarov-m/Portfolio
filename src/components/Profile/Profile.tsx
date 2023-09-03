import { FC, useState } from "react";
import styles from "./Profile.module.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SocialLink from "./SocialLink";
import Contacts from "./Contacts/Contacts";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Divider } from "@mui/material";

const socials = [
  {
    icon: <YouTubeIcon />,
    url: "https://www.youtube.com/channel/UCxTe-frN6V-x9QEFUnLMerg",
  },
  {
    icon: <TelegramIcon />,
    url: "https://t.me/Je_M1",
  },
  {
    icon: <GitHubIcon />,
    url: "https://reactrouter.com/en/main/router-components/browser-router",
  },
  {
    icon: <WhatsAppIcon />,
    url: "https://vk.com/id434638625",
  },
];

const Profile: FC = () => {
  const [isActive, setActive] = useState<boolean>(false)

  const handleActiveOldPhoto = () => {
    setActive(!isActive)
  }

  return (
    <aside className={styles.profileSection}>
      <div className={styles.profileBlock}>
        <div
          style={{
            backgroundColor: "white",
            width: 240,
            height: 240,
            borderRadius: "20px",
          }}
          className={!isActive ? styles.profilePhoto : styles.profileOldPhoto}
        ></div>
        <h2 className={styles.myName}>Magomed Zhebarov</h2>
        <span className={styles.profession}>Frontend developer</span>
        <div className={styles.socials}>
          {socials.map((social, index) => (
            <SocialLink key={index} icon={social.icon} url={social.url} />
          ))}
        </div>
      </div>
      <div className={styles.profileContacts}>
        <Contacts>
          <div className={styles.phoneBlock}>
            <PhoneIphoneIcon
              sx={{
                backgroundColor: "#000",
                padding: "10px",
                fontSize: "40px",
                color: "pink",
                borderRadius: "10px",
              }}
            />
            <div className={styles.phoneNumb}>
              <h3 className={styles.title}>Phone</h3>
              <span className={styles.number}>+7 999 399-60-38</span>
            </div>
          </div>
        </Contacts>
        <Divider sx={{ bgcolor: "#444", margin: "8px 0px" }} />
        <Contacts>
          <div className={styles.phoneBlock}>
            <PlaceIcon
              sx={{
                backgroundColor: "#000",
                padding: "10px",
                fontSize: "40px",
                color: "#87CEEB",
                borderRadius: "10px",
              }}
            />
            <div className={styles.phoneNumb}>
              <h3 className={styles.title}>Location</h3>
              <span className={styles.number}>Russia, Grozny</span>
            </div>
          </div>
        </Contacts>
        <Divider sx={{ bgcolor: "#444", margin: "8px 0px" }} />
        <Contacts>
          <div className={styles.phoneBlock}>
            <EmailIcon
              sx={{
                backgroundColor: "#000",
                padding: "10px",
                fontSize: "40px",
                color: "#FF6B6B",
                borderRadius: "10px",
              }}
            />
            <div className={styles.phoneNumb}>
              <h3 className={styles.title}>E-mail</h3>
              <span className={styles.number}>xarcho.ev@gmail.com</span>
            </div>
          </div>
        </Contacts>
        <Divider sx={{ bgcolor: "#444", margin: "8px 0px" }} />
        <Contacts>
          <div className={styles.phoneBlock}>
            <CalendarMonthIcon
              sx={{
                backgroundColor: "#000",
                padding: "10px",
                fontSize: "40px",
                color: "#E0B0FF",
                borderRadius: "10px",
              }}
            />
            <div className={styles.phoneNumb}>
              <h3 className={styles.title}>Birthday</h3>
              <span className={styles.number}>October 27, 1999</span>
            </div>
          </div>
        </Contacts>
      </div>

      <div className={styles.oldPhoto}>
        <button onClick={handleActiveOldPhoto}>Фото со школы</button>
      </div>
    </aside>
  );
};

export default Profile;
