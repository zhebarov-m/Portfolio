import { FC, useState } from "react";
import styles from "./Home.module.scss";
import ModalHint from "../components/Modal/ModalHint";

type tSkills = {
  icon: string;
  url: string;
  title: string;
};

const fSkills: tSkills[] = [
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    title: "HTML5",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    title: "CSS3",
  },
  {
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg",
    url: "https://sass-lang.com/",
    title: "SASS/SCSS",
  },
  {
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    title: "JavaScript",
  },
  {
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    url: "https://reactjs.org/",
    title: "ReactJS",
  },
  {
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg",
    url: "https://redux.js.org/",
    title: "Redux-Toolkit",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
    url: "https://material-ui.com/",
    title: "Material UI",
  },
  {
    icon: "https://vitejs.dev/logo.svg",
    url: "https://vitejs.dev",
    title: "Vite",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    url: "https://www.typescriptlang.org/",
    title: "TypeScript",
  },
  {
    icon: "https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-circle.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    title: "Yarn",
  },
];

const bSkills: tSkills[] = [
  {
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    url: "https://nodejs.org/en/",
    title: "NodeJS",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    title: "Sequalize",
  },
  {
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg",
    url: "https://expressjs.com/",
    title: "ExpressJS",
  },
  {
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    url: "https://www.mongodb.com/",
    title: "MongoDB",
  },
  {
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
    url: "https://www.postgresql.org/",
    title: "PostgreSQL",
  },
];

const Home: FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className={styles.homePage}>
        <section className={styles.aboutMe}>
          <div className={styles.title}>
          <h1>Обо мне</h1>
          <p onClick={handleOpenModal}> Почему именно <br />программирование?</p>
          </div>
          <div className={styles.discription}>
            <p>
              Я - Frontend-разработчик, который ищет развития и
              профессионального опыта. В IT, если отбросить некоторые моменты,
              относительно недавно - мой путь начался в конце ноября прошлого
              года.
            </p>
            <p>
              В настоящее время я работаю преподователем Веб-дисциплин в
              колледже Информационных технологий. <br />
              Планирую начать искать свою первую работу в качестве
              React-разработчика.
            </p>
          </div>
        </section>
        section.
        <section className={styles.stackTech}>
          <h2 className={styles.skillsTitle}>Мой стэк технологий</h2>

          <div className={styles.gridFrontend}>
            <div className={styles.skills}>
              {fSkills.map((skill, index) => (
                <div className="skill" key={index}>
                  <a href={skill.url}>
                    <img src={skill.icon} alt="Skill Icon" />
                    <p className={styles.skillName}>{skill.title}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <h3 className={styles.backSkilssTitle}>BACKEND И ПРОЧЕЕ</h3>
          <div className={styles.gridBackend}>
            <div className={styles.skills}>
              {bSkills.map((skill, index) => (
                <div className="skill" key={index}>
                  <a href={skill.url}>
                    <img src={skill.icon} alt="Skill Icon" />
                    <p className={styles.skillName}>{skill.title}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {modalOpen && <ModalHint onClose={handleCloseModal} />}
    </div>
  );
};

export default Home;
