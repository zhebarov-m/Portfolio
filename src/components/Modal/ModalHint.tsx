import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#111",
  border: "2px solid #f5f5f5",
  color: "#f5f5f5",
  borderRadius: "20px",
  fontFamily: "Museo",
  boxShadow: 24,
  p: 4,
};

interface ModalHintProps {
  onClose: () => void;
}

const ModalHint: React.FC<ModalHintProps> = ({ onClose }) => {
  const [spoilerOpen, setSpoilerOpen] = React.useState(false);

  const handleSpoiler = () => {
    setSpoilerOpen(!spoilerOpen);
  };
  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{
            fontFamily: "Museo",
            fontSize: "30px",
            fontWeight: 700,
            color: "#fa2a55",
          }}
          id="modal-modal-title"
          variant="h6"
          component="h1"
        >
          Почему я выбрал программирование?
          <Divider sx={{ bgcolor: "#777", mt: 1 }} />
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: 18 }}>
          Помню с детства меня привлекало то, что детям моего возраста не было
          интересно. С нетерпением ждал выпуск "Галилео" на СТС и всегда
          задавался вопросами по типу: "А как работает телефон?", "А почему сняв
          себя на камеру, мы можем увидеть прошлое?", "Почему при помощи лупы и
          солнца можно поджечь что-то?" и т.д.
        </Typography>
        <Typography sx={{ mt: 2, fontSize: 18 }}>
          Одна из причин, почему я пошел именно по пути Frontend*-разработчика,
          заключается в возможности самому создавать что-либо по своему
          усмотрению и, самое главное, лицезреть это своими глазами. Ещё в
          детстве, играя в Контру**, мне всегда хотелось 2 вещей: <br />
          <span style={{ marginLeft: "20px" }}>
            1) Возможность создавать свою карту или скин для игры;
          </span>
          <br />
          <span style={{ marginLeft: "20px" }}>
            2) В принципе понять как всё это создается. И хоть, со временем, и
            забросил идею стать разработчиком игр
            <span
              onClick={handleSpoiler}
              style={{
                backgroundColor: "#333",
                padding: "3px",
                borderRadius: "7px",
                cursor: "pointer",
                margin: "0px 3px",
              }}
            >
              {spoilerOpen
                ? "(это оказалось сложнее, чем я думал)"
                : "СПОЙЛЕР!"}
            </span>
            , я всё равно смог пойти по пути созидательного характера :)
          </span>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalHint;
