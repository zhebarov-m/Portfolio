import { FC, useState } from "react";

import styles1 from "./index.module.scss";
import ModalHint from "../../components/Modal/ModalHint";
import CalculatorPng from '../../assets/images/calculator.png'

const JavaScriptActivity: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className={styles1.CssPage}>
        <section className={styles1.aboutMe}>
          <div className={styles1.title}>
            <h1>
              JS-задание со <span style={{ color: "#ffbf00" }}>☆</span>
            </h1>
            <p onClick={handleOpenModal}>
              Почему именно <br />
              программирование?
            </p>
          </div>
          <div className={styles1.discription}>
            <p>
              Для этой активности мы будем создавать простое интерактивное
              приложение с использованием JavaScript.
            </p>
            <p>
              <span style={{ color: "#fa2a55" }}>Задача:</span> Создайте
              интерфейс калькулятора для вычисления простых математических
              операций.
            </p>
            <div
              style={{
                backgroundColor: "#fa2a5530",
                borderRadius: "5px",
                padding: "5px",
                marginLeft: "15px",
              }}
              className="taskConditions"
            >
              <h4 style={{ fontSize: "17px" }}>
                Условия, которых надо будет придерживаться:
              </h4>
              <div style={{ marginLeft: "10px" }}>
                <p>
                  1) Калькулятор должен иметь поля для ввода чисел и кнопки для
                  операций сложения, вычитания, умножения и деления.
                </p>
                <p>
                  2) При вводе чисел и выборе операции, результат должен
                  отображаться на экране.
                </p>
              </div>
            </div>
            <div className="optionally">
              <h5 style={{ color: "#fa2a55" }}>
                Дополнительное задание (необязательно):
              </h5>
              <p>
                <p>
                  Попробуйте добавить дополнительные функции, такие как очистка
                  экрана и обработка ошибок.
                </p>
              </p>
              <div className={styles1.calculatorImage}>
                <h5>Пример калькулятора (UI):</h5>
                <img src={CalculatorPng} alt="calculator" />
              </div>
            </div>
          </div>
        </section>
      </div>
      {modalOpen && <ModalHint onClose={handleCloseModal} />}
    </div>
  );
};

export default JavaScriptActivity;
