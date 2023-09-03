import { FC, useState } from "react";
// import styles from "./Home.module.scss";
import YouTube from "react-youtube";
import styles1 from "./index.module.scss";
import ModalHint from "../../components/Modal/ModalHint";
import mixBlendModeImg from '..//../assets/images/mix-blend-mode__Images.jpeg'

const CssPage: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  type tBlendModes = {
    name: string;
    value: string;
  };

  const blendModes: tBlendModes[] = [
    { name: "mix-blend-mode:", value: "normal" },
    { name: "mix-blend-mode:", value: "multiply" },
    { name: "mix-blend-mode:", value: "screen" },
    { name: "mix-blend-mode:", value: "overlay" },
    { name: "mix-blend-mode:", value: "darken" },
    { name: "mix-blend-mode:", value: "lighten" },
    { name: "mix-blend-mode:", value: "color-dodge" },
    { name: "mix-blend-mode:", value: "color-burn" },
    { name: "mix-blend-mode:", value: "hard-light" },
    { name: "mix-blend-mode:", value: "soft-light" },
    { name: "mix-blend-mode:", value: "difference" },
    { name: "mix-blend-mode:", value: "exclusion" },
    { name: "mix-blend-mode:", value: "hue" },
    { name: "mix-blend-mode:", value: "saturation" },
    { name: "mix-blend-mode:", value: "color" },
    { name: "mix-blend-mode:", value: "luminosity" },
    { name: "mix-blend-mode:", value: "initial" },
    { name: "mix-blend-mode:", value: "inherit" },
  ];

  return (
    <div>
      <div className={styles1.CssPage}>
        <section className={styles1.aboutMe}>
          <div className={styles1.title}>
            <h1>Css-фишка</h1>
            <p onClick={handleOpenModal}>
              Почему именно <br />
              программирование?
            </p>
          </div>
          <div className={styles1.discription}>
            <p>
              Свойство
              <span
                style={{
                  backgroundColor: "#fa2a5520",
                  padding: "2px",
                  borderRadius: "3px",
                }}
              >
                mix-blend-mode
              </span>
              определяет формулу смешивания цветов исходного элемента с фоновым
              слоем. Принимает значения, описанные в разделе 
              <a
                style={{ color: "#fa2a55", marginLeft: '5px'}}
                href="https://html5book.ru/obedinenie-i-smeshivanije-sloev/#blending"
                target="_blank"
              >
                Режимы смешивания
              </a>
              .
            </p>
            <p>
              Свойство применяется ко всем элементам, в SVG — к
              элементам-контейнерам, графическим элементам и графическим
              ссылочным элементам. <br />
              Свойство не наследуется.
            </p>
          </div>
          <div className={styles1.videoContainer}>
            <YouTube videoId="2GSU5c4yKoc" />
          </div>
        </section>
        <section className={styles1.mixBlendMode}>
          <h2>Свойства mix-blend-mode</h2>
          <ul
            style={{
              backgroundColor: "#222",
              margin: "0px 280px 20px",
              padding: "20px",
              borderRadius: "10px",
              display: "flex",
              flexWrap: "wrap",
            }}
            className="property__list"
          >
            {blendModes.map((item) => (
              <li style={{ marginBottom: "5px" }} className="list__item">
                <span
                  style={{
                    color: "#fa2a55",
                    marginRight: "6px",
                    fontFamily: "Poppins",
                  }}
                >
                  {item.name}
                </span>
                {item.value}
              </li>
            ))}
          </ul>
          <div className={styles1.examples}>
            <h2>Примеры mix-blend-mode</h2>
            <div className={styles1.mixWrapper}>
              <div className={`${styles1.mixItem} ${styles1.normal}`}>
                <h3>normal</h3>
                <img src={mixBlendModeImg}/>
                <div className={styles1.mixColor}></div>
              </div>
              <div className={`${styles1.mixItem} ${styles1.multiply}`}>
                <h3>multiply</h3>
                <img src={mixBlendModeImg} />
                <div className={styles1.mixColor}></div>
              </div>
              <div className={`${styles1.mixItem} ${styles1.screen}`}>
                <h3>screen</h3>
                <img src={mixBlendModeImg} />
                <div className={styles1.mixColor}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {modalOpen && <ModalHint onClose={handleCloseModal} />}
    </div>
  );
};

export default CssPage;
