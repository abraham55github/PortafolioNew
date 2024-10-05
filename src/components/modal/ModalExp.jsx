// CustomModal.js
import { Box, Modal, Typography, Button, IconButton } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ModalExp = ({ open, onClose }) => {
    const slides = [
        {
            title: "Desarrollo del Sistema de Inventario",
            content: "Durante mi experiencia laboral, diseñé e implementé una plataforma integral para el registro del inventario físico de cilindros, camiones bulks y tanques estacionarios. El objetivo del proyecto fue crear un sistema eficiente y escalable que facilitara el monitoreo diario del inventario en múltiples plantas. La plataforma ha tenido un gran impacto, ya que facilita la recopilación de datos en tiempo real, mejorando la eficiencia operativa y reduciendo los errores manuales. Además, la aplicación realiza cálculos precisos para convertir volúmenes en galones y litros, teniendo en cuenta factores como la temperatura y la gravedad específica de los líquidos, lo que garantiza mediciones exactas y confiables.",
            imageUrl: "../public/img/exp1.1.png", // Imagen de ejemplo
        },
        {
            title: "Automatización con herramientas Microsoft",
            content: "Logré implementar con la ayuda de herramientas de Microsoft como Power Automate, SharePoint, Forms y Lists un formulario que automatizaba la petición de implementos de seguridad en las diferentes plantas. Consistía en realizar un flujo desde el formulario donde se llenaba y se hacía la petición de implementos de seguridad de personal para la planta. Esta petición llegaba como notificación a la persona encargada, quien aprobaba o rechazaba la solicitud, regresando un resumen del pedido a ambas partes.",
            imageUrl: "../public/img/exp1.2.jpeg", // Imagen de ejemplo
        },
        {
            title: "Soporte TI",
            content: "Colaboré con los usuarios para resolver problemas técnicos, desde la instalación y configuración de hardware hasta la solución de problemas de software. Esto no solo mejoró la productividad de los empleados, sino que también fortaleció la comunicación entre los diferentes departamentos.",
            imageUrl: "../public/img/exp1.3.webp", // Imagen de ejemplo
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '90%', sm: '600px' }, // Hacemos el modal responsivo
                    maxWidth: '90vw', // Max width en viewport
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    textAlign: 'center',

                }}
            >
                <Typography id="modal-title" variant="h5" component="h2" sx={{ mb: 2 }}>
                    {slides[currentSlide].title}
                </Typography>

                {slides[currentSlide].imageUrl && (
                    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={slides[currentSlide].imageUrl}
                            alt={slides[currentSlide].title}
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Box>
                )}
                <Box sx={{
                    maxHeight: '25vh', // Limita la altura máxima del contenedor
                    overflowY: 'auto', // Habilita el scroll si es necesario
                }}>

                    <Typography id="modal-description" sx={{ mb: 2, textAlign: 'justify' }}>
                        {slides[currentSlide].content}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <IconButton onClick={handlePrevSlide} disabled={currentSlide === 0}>
                        <ArrowBackIosIcon />
                    </IconButton>

                    <IconButton onClick={handleNextSlide} disabled={currentSlide === slides.length - 1}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>

                <Button onClick={onClose} sx={{ mt: 2 }}>
                    Cerrar
                </Button>
            </Box>
        </Modal>
    );
};

export default ModalExp;
