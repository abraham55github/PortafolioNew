import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Box, Typography, Button, Avatar } from "@mui/material";
import Grid from '@mui/material/Grid2';

export default function Content() {
    return (
        <>
            <Box sx={{ paddingTop: { xs: 5, md: 12 }, paddingBottom: 10 }}>
                <Box display="flex" alignItems="center" sx={{
                    paddingLeft: { xs: 2, sm: 4, md: 6, lg: 10 },  // Cambia el padding según el tamaño de la pantalla     // En pantallas pequeñas, el layout será vertical
                }}>
                    <Avatar alt="Abraham Otero" src="../public/img/perfil1.png" sx={{ width: 64, height: 64 }} />
                    <Box paddingLeft={2}>
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{
                                borderRadius: '30px',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.04)',
                                },
                            }}
                            component="a"
                            href="https://www.linkedin.com/in/abraham-otero"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Disponible para trabajar
                        </Button>
                    </Box>
                </Box>

                <Box sx={{ paddingX: { sm: 5, xs: 2, lg: 5 }, paddingY: 2, paddingTop: 5 }}>
                    <Typography variant="h3" color="initial" fontWeight="bold" textAlign={'center'} sx={{ color: "secondary.main" }}>
                        Abraham Otero
                    </Typography>

                    <Typography
                        textAlign="center"
                        variant="body1"
                        color="initial"
                        sx={{ fontSize: '1.1rem' }}
                    >
                        1 año de experiencia, {' '}
                        <span style={{ color: '#69932e', fontWeight: 'bold' }}>
                            Ingeniero en Sistemas y Desarrollador web, 
                        </span>{' '}
                        de Panamá{' '}
                        <span style={{ color: '#69932e', fontWeight: 'semibold', fontSize: 15}}>
                            PA 
                        </span>{' '}
                        Me apasiona crear aplicaciones web eficientes, escalables y
                        orientadas al usuario, con especial interés en mejorar continuamente mis habilidades.
                    </Typography>


                    <Grid container spacing={2} justifyContent="center" mt={2}>
                        <Grid >
                            <Button
                                color="secondary"
                                variant="outlined"
                                startIcon={<GitHub />}
                                component="a"
                                href="https://github.com/abraham55github"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </Button>
                        </Grid>
                        <Grid >
                            <Button
                                color="secondary"
                                variant="outlined"
                                startIcon={<LinkedIn />}
                                component="a"
                                href="https://www.linkedin.com/in/abraham-otero"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </Button>
                        </Grid>
                        <Grid >
                            <Button
                                color="secondary"
                                variant="outlined"
                                startIcon={<Mail />}
                                component="a"
                                href="mailto:abraham.otero555@gmail.com"
                            >
                                Mail
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
