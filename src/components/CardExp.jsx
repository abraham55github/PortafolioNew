import { useState } from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import ModalExp from './modal/ModalExp';

export default function CardExp({ jobTitle, company, dates, description, slides }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "flex-start",
          gap: 2,
          overflow: "hidden",
          padding: 2,
          margin: 2,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            padding: 2,
            flexBasis: { xs: "100%", sm: "30%" },
          }}
        >
          <Typography color="primary" variant="h5" display="flex">
            {jobTitle}
          </Typography>
          <Typography variant="body1">{company}</Typography>
          <Typography color="grey" variant="body2">
            {dates}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: 2,
            flexBasis: { xs: "100%", sm: "70%" },
          }}
        >
          <Typography pb={2}>
            {description}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Detalles
          </Button>
        </Box>
      </Paper>

      <ModalExp
        open={openModal}
        onClose={handleCloseModal}
        slides={slides}
      />
    </>
  );
}
