import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Box } from '@mui/material';
import { Code, Drafts, PersonSearch, WorkHistory } from '@mui/icons-material';
import { Link } from 'react-scroll'; // Importar el Link de react-scroll

export default function NavBar() {
    const [value, setValue] = React.useState('');
    const [opacity, setOpacity] = React.useState(1);
    const [backgroundOpacity, setBackgroundOpacity] = React.useState(1);
    const [observerThreshold, setObserverThreshold] = React.useState(1);

    const handleScroll = () => {
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
        setOpacity(isAtBottom ? 0.1 : 1);
        const isAtTop = window.scrollY === 0;
        setBackgroundOpacity(isAtTop ? 0 : 1); // Si está en la parte superior, hacer el fondo invisible
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Ajustar el umbral (threshold) según el tamaño de la pantalla
    React.useEffect(() => {
        const updateThreshold = () => {
            if (window.innerWidth <= 600) {
                setObserverThreshold(0.1); // Umbral para pantallas pequeñas
            } else {
                setObserverThreshold(1); // Umbral para pantallas grandes
            }
        };

        // Actualizar el umbral al cargar la página y al cambiar el tamaño de la ventana
        updateThreshold();
        window.addEventListener('resize', updateThreshold);

        return () => {
            window.removeEventListener('resize', updateThreshold);
        };
    }, []);

    // Configurar el IntersectionObserver con el umbral dinámico
    React.useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setValue(entry.target.id);
                    }
                });
            },
            {
                root: null, // La raíz es la ventana visible
                threshold: observerThreshold, // Usar el umbral dinámico
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, [observerThreshold]); // Volver a ejecutar si el umbral cambia

    // Definir el offset de desplazamiento según el tamaño de la pantalla
    const calculateOffset = () => {
        return window.innerWidth <= 600 ? -50 : -100; // Ajustar según sea necesario
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ position: 'fixed', left: 0, right: 0, zIndex: 1000 }}
        >
            <BottomNavigation
                sx={{
                    width: {
                        xs: 300,
                        sm: 400,
                        md: 500,
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: backgroundOpacity ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                    border: backgroundOpacity ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
                    borderRadius: '10px',
                    backdropFilter: backgroundOpacity ? 'blur(10px)' : 'none',
                    WebkitBackdropFilter: backgroundOpacity ? 'blur(10px)' : 'none',
                    position: 'fixed',
                    bottom: {
                        xs: 20, // Estará en la parte inferior para pantallas pequeñas
                        md: 'unset', // No aplica `bottom` en pantallas medianas y grandes
                    },
                    top: {
                        xs: 'unset', // No aplica `top` en pantallas pequeñas
                        md: 10, // Estará en la parte superior para pantallas medianas y grandes
                    },
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1000,
                    padding: {
                        xs: '4px 8px',
                        sm: '8px 16px',
                        md: '16px 24px',
                    },
                    opacity: opacity,
                    transition: 'opacity 0.3s ease-in-out',
                }}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
            >
                <BottomNavigationAction
                    label="Experiencia"
                    value="experience"
                    icon={<WorkHistory />}
                    component={Link}
                    to="experience"
                    smooth={true}
                    duration={500}
                    offset={calculateOffset()} // Ajuste de desplazamiento
                />
                <BottomNavigationAction
                    label="Proyectos"
                    value="projects"
                    icon={<Code />}
                    component={Link}
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={calculateOffset()} // Ajuste de desplazamiento
                />
                <BottomNavigationAction
                    label="Sobre mí"
                    value="aboutMe"
                    icon={<PersonSearch />}
                    component={Link}
                    to="aboutMe"
                    smooth={true}
                    duration={500}
                    offset={calculateOffset()} // Ajuste de desplazamiento
                />
                <BottomNavigationAction
                    label="Contacto"
                    value="contact"
                    icon={<Drafts />}
                    component={Link}
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={calculateOffset()} // Ajuste de desplazamiento
                />
            </BottomNavigation>
        </Box>
    );
}
