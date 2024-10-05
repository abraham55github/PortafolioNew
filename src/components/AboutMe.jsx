import { PersonSearchOutlined } from "@mui/icons-material"
import { Box, Typography, styled } from "@mui/material"
import Grid from '@mui/material/Grid2';

export default function Projects() {

    const Img = styled("img")(
        {
            width: 200,
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",

        }
    )


    return (
        <>
            <Box paddingBottom={10}>
                <Typography
                    textAlign={'center'}
                    variant="h4"
                    pt={5}
                    component="div"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    paddingBottom={3}
                >
                    <PersonSearchOutlined fontSize="inherit" sx={{ fontSize: 'inherit', marginRight: 1 }} />
                    Sobre Mi
                </Typography>

                <Box>
                    <Grid container spacing={2}>
                        {/* Texto */}
                        <Grid display="flex" justifyContent="center" alignItems="center" size={{
                            xs: 12,
                            md: 6.5
                        }}
                        >
                            <Typography pl={5} variant="body1">
                                ¡Hola! Soy Abraham Julio Otero González,{' '}
                                <span style={{ color: '#69932e', fontWeight: 'bold' }}>
                                    Ingeniero en Sistemas y Computación por la Universidad Tecnológica de Panamá.
                                </span>{' '}
                                Apasionado por la tecnología, me enfoco en desarrollar software eficiente aplicando{' '}
                                <span style={{ color: '#69932e', fontWeight: 'bold' }}>
                                    patrones de diseño y arquitecturas
                                </span>{' '}
                                que ofrezcan soluciones óptimas.{' '}
                                Actualmente trabajo principalmente con{' '}
                                <span style={{ color: '#0b3c49', fontWeight: 'bold' }}>
                                    React en JavaScript y Django en Python,
                                </span>{' '}
                                creando aplicaciones web completas y escalables, optimizando el rendimiento y la experiencia del usuario.
                            </Typography>


                        </Grid>

                        {/* Imagen */}
                        <Grid display="flex" justifyContent="center" alignItems="center" size={{

                            xs: 12,
                            md: 5.5

                        }}
                        >
                            <Img src="../public/img/perfil4.png" alt="imagen" />
                        </Grid>
                    </Grid>

                </Box>

            </Box>
        </>
    )
}
