import { useState } from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import ModalExp from './modal/ModalExp'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

export default function CardExp() {
  const [openModal, setOpenModal] = useState(false); // Estado para manejar el modal

  // Funciones para abrir y cerrar el modal
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Cambiar a columna en pantallas pequeñas
          alignItems: "flex-start",
          gap: 2,
          overflow: "hidden",
          padding: 2,
          margin: 2, // Añadir margen para separar las tarjetas
          borderRadius: 2, // Esquinas redondeadas
        }}
      >
        <Box
          sx={{
            padding: 2,
            flexBasis: { xs: "100%", sm: "30%" }, // Ocupa todo el ancho en móviles
          }}
        >
          <Typography color="primary" variant="h5" display="flex">
            Innovación y Desarrollo TI
          </Typography>
          <Typography variant="body1">Panagas</Typography>
          <Typography color="grey" variant="body2">
            Abril - Septiembre 2024
          </Typography>
        </Box>
        <Box
          sx={{
            padding: 2,
            flexBasis: { xs: "100%", sm: "70%" }, // Ocupa todo el ancho en móviles
          }}
        >
          <Typography pb={2}>
            Durante 6 meses, desarrollé una plataforma de inventario para cilindros y tanques.
            También proporcioné soporte técnico al equipo informático,
            desarrollé soluciones automatizadas con Power Automate y SharePoint,
            realicé el despliegue de aplicaciones en un servidor Linux con Apache2
            y participé en el desarrollo de una aplicación para consolidar datos.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Detalles
          </Button>
        </Box>
      </Paper>

      <ModalExp
        open={openModal}
        onClose={handleCloseModal}
      />
    </>
  );
}
