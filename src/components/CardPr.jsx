import { GitHub, Link } from "@mui/icons-material";
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useState } from "react";
import CustomModal from './modal/CustomModal'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

export default function CardPr({ title, imageUrl, sliders,  description, githubUrl = false, linkUrl = false }) {
    // Estado para manejar el botón 'Ver más'
    const [showMore, setShowMore] = useState(false);
    const [openModal, setOpenModal] = useState(false); // Estado para manejar el modal

    // Limitar el número de caracteres visibles si no se ha expandido
    const textToShow = showMore ? description : description.slice(0, 150) + (description.length > 150 ? '...' : '');

    // Funciones para abrir y cerrar el modal
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);



    return (
        <Box paddingTop={5}>
            <Card
                sx={{
                    maxWidth: 345,
                    height: '100%', // Se adapta al contenedor
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between", // Para que el botón "Ver más" quede al final
                    transition: "0.25s",
                    "&:hover": {
                        transform: "scale(1.05)",
                    },
                }}
            >
                <CardActionArea onClick={handleOpenModal}>
                    <CardMedia
                        component="img"
                        image={imageUrl || "https://via.placeholder.com/345x200"} // Proporciona una imagen de fallback
                        sx={{
                            height: 200, // Controla la altura de la imagen
                            objectFit: 'cover', // Asegura que la imagen se recorte correctamente sin distorsión
                            width: '100%', // Asegura que la imagen ocupe todo el ancho del card
                        }}
                        alt="Descripción de la imagen"
                    />
                    <CardContent>
                        <Typography variant="h5">{title}</Typography>
                        <Typography component="p" variant="body2">
                            {textToShow}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid container justifyContent="center">
                        {/* Mostrar botones de GitHub y Link si las URLs están presentes */}
                        {githubUrl && (
                            <IconButton
                                color="secondary"
                                aria-label="github"
                                size="large"
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHub fontSize="inherit" />
                            </IconButton>
                        )}
                        {linkUrl && (
                            <IconButton
                                color="secondary"
                                aria-label="link"
                                size="large"
                                href={linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Link fontSize="inherit" />
                            </IconButton>
                        )}
                    </Grid>
                    {/* Botón para mostrar más/menos */}
                    {description.length > 150 && (
                        <Button size="small" onClick={() => setShowMore(!showMore)}>
                            {showMore ? "Ver menos" : "Ver más"}
                        </Button>
                    )}
                </CardActions>
            </Card>

            {/* Usar el componente CustomModal */}
            <CustomModal
                open={openModal}
                onClose={handleCloseModal}
                sliders={sliders}
            />
        </Box>
    );
}
