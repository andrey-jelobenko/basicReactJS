import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style: any = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export function BasicModal({ modal, setModal, messageAlert }: any) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setModal(false);
    setOpen(false);
  };

  useEffect(() => {
    if (modal) setOpen(true);
  }, [modal]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Внимание !!!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {messageAlert}
        </Typography>
      </Box>
    </Modal>
  );
}
