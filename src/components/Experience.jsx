import {  WorkHistoryOutlined } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import CardExp from '../components/CardExp'

export default function Experience() {
    return (
        <>
            <Box sx={{ paddingBottom: 10}} >
                <Typography
                    textAlign={'center'}
                    variant="h4"
                    pt={5}
                    component="div"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    pb={2}
                >
                    <WorkHistoryOutlined fontSize="inherit" sx={{ fontSize: 'inherit', marginRight: 1}} />
                    Experiencia laboral
                </Typography>
                <CardExp />

            </Box>
        </>
    )
}
