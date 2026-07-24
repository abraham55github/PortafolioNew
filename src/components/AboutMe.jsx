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
                                    Ingeniero en Sistemas y Computación por la Universidad Tecnológica de Panamá (Graduado Noviembre 2025).
                                </span>{' '}
                                Apasionado por la tecnología, me enfoco en desarrollar software eficiente aplicando{' '}
                                <span style={{ color: '#69932e', fontWeight: 'bold' }}>
                                    buenas prácticas y arquitecturas modernas
                                </span>{' '}
                                que ofrezcan soluciones óptimas.{' '}
                                Tengo experiencia en{' '}
                                <span style={{ color: '#0b3c49', fontWeight: 'bold' }}>
                                    Java, Python, JavaScript,
                                </span>{' '}
                                y en el ecosistema de{' '}
                                <span style={{ color: '#0b3c49', fontWeight: 'bold' }}>
                                    AWS (EC2, RDS, Lambdas, VPC/VPS).
                                </span>{' '}
                                También desarrollo aplicaciones con{' '}
                                <span style={{ color: '#0b3c49', fontWeight: 'bold' }}>
                                    React, Django, Power Apps y Power Automate,
                                </span>{' '}
                                creando soluciones completas y escalables que optimizan procesos y mejoran la experiencia del usuario.
                            </Typography>


                        </Grid>

                        {/* Imagen */}
                        <Grid display="flex" justifyContent="center" alignItems="center" size={{

                            xs: 12,
                            md: 5.5

                        }}
                        >
                            <Img src="/img/sacofoto1r1.webp" alt="imagen" />
                        </Grid>
                    </Grid>

                </Box>

            </Box>
        </>
    )
}
