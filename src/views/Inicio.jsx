import { Box, Container } from "@mui/material"
import Content from "../components/Content"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import AboutMe from "../components/AboutMe"

export default function Inicio() {
    return (
        <div>
            <Container maxWidth="md">
                <Content />
            </Container>

            {/* Box with full width and background */}
            <Box sx={{ background: '#f3f4f6', width: '100%' }}>
                <section id="experience"> {/* ID para el enlace */}
                    <Container maxWidth="md">
                        <Experience />
                    </Container>
                </section>
            </Box>

            <Container maxWidth="md">
                <section id="projects"> {/* ID para el enlace */}
                    <Projects />
                </section>
            </Container>

            <Box sx={{ background: '#f3f4f6', width: '100%' }}>
                <section id="aboutMe"> {/* ID para el enlace */}
                    <Container maxWidth="md">
                        <AboutMe />
                    </Container>
                </section>
            </Box>
        </div>
    )
}
