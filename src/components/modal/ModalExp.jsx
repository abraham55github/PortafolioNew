// CustomModal.js
import { Box, Modal, Typography, Button, IconButton } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const ModalExp = ({ open, onClose, slides: initialSlides }) => {
    const slides = initialSlides || [];
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
