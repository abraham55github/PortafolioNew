import {  WorkHistoryOutlined } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import CardExp from '../components/CardExp'

const experienceData = [
    {
        id: 1,
        jobTitle: "Desarrollador de Software",
        company: "Banco General",
        dates: "Feb 2025 - Actualidad",
        description: "Desarrollo e implementación de soluciones de software utilizando Java y Python. Diseño, configuración y gestión de infraestructura en la nube bajo AWS (EC2, RDS, Lambdas, VPC/VPS). Creación de automatizaciones de procesos internos para aumentar la eficiencia operativa del banco. Mantenimiento y optimización continua de aplicaciones y servicios bancarios.",
        slides: [
            {
                title: "Desarrollo Backend con Java y Python",
                content: "Durante mi experiencia en Banco General, me he especializado en el desarrollo e implementación de soluciones de software utilizando Java y Python. He trabajado en el mantenimiento y optimización continua de aplicaciones y servicios bancarios, asegurando su rendimiento, estabilidad y seguridad. Además, he colaborado en la creación de nuevas funcionalidades y la mejora de las existentes, siguiendo las mejores prácticas de desarrollo y los estándares de la industria bancaria.",
                imageUrl: "/img/sacofoto1r1.webp",
            },
            {
                title: "Infraestructura en la Nube AWS",
                content: "He participado activamente en el diseño, configuración y gestión de infraestructura en la nube bajo el entorno de AWS. Esto incluye la administración de instancias EC2 para el despliegue de aplicaciones, la configuración de bases de datos RDS, la implementación de funciones Lambda para automatización de tareas, y la gestión de redes VPC/VPS para garantizar la seguridad y conectividad de los servicios bancarios.",
                imageUrl: "/img/sacofoto1r1.webp",
            },
            {
                title: "Automatización de Procesos Internos",
                content: "He creado automatizaciones de procesos internos para aumentar la eficiencia operativa del banco. Estas automatizaciones han permitido reducir tiempos de procesamiento, minimizar errores manuales y optimizar flujos de trabajo críticos para la operación bancaria. El enfoque ha estado en identificar oportunidades de mejora e implementar soluciones tecnológicas que generen valor tangible.",
                imageUrl: "/img/sacofoto1r1.webp",
            },
        ],
    },
    {
        id: 2,
        jobTitle: "Desarrollador de Software",
        company: "UniBank",
        dates: "Nov 2024 - Feb 2025",
        description: "Especialización en la creación de aplicaciones en Power Apps dentro del ecosistema de Microsoft 365. Integración de sistemas con SharePoint y diseño y automatización de flujos de trabajo utilizando Power Automate, conectando aplicaciones personalizadas. Gestión y modelado de datos, así como manejo de bases de datos relacionales para la optimización de procesos.",
        slides: [
            {
                title: "Power Apps en Microsoft 365",
                content: "Me especialicé en la creación de aplicaciones corporativas utilizando Power Apps dentro del ecosistema de Microsoft 365. Desarrollé soluciones personalizadas que permitieron a los equipos internos optimizar sus procesos diarios, reduciendo la dependencia de hojas de cálculo manuales y mejorando la precisión en la captura y gestión de datos. Las aplicaciones fueron diseñadas con interfaces intuitivas y conectadas a fuentes de datos en tiempo real.",
                imageUrl: "/img/perfil1.webp",
            },
            {
                title: "Integración con SharePoint y Power Automate",
                content: "Integré sistemas con SharePoint para centralizar la información y diseñé flujos de automatización utilizando Power Automate. Estos flujos conectaban aplicaciones personalizadas con diferentes orígenes de datos, permitiendo la sincronización automática de información, el envío de notificaciones y la ejecución de procesos de aprobación sin intervención manual, mejorando significativamente la eficiencia operativa.",
                imageUrl: "/img/exp1.2.webp",
            },
            {
                title: "Gestión y Modelado de Datos",
                content: "Realicé gestión y modelado de datos, así como el manejo de bases de datos relacionales para la optimización de procesos. Diseñé esquemas de bases de datos eficientes que soportaban las aplicaciones desarrolladas, asegurando la integridad y consistencia de los datos. Implementé prácticas de optimización de consultas y estructuración de datos para garantizar un rendimiento óptimo.",
                imageUrl: "/img/perfil1.webp",
            },
        ],
    },
    {
        id: 3,
        jobTitle: "Desarrollo y Soporte TI",
        company: "Panagas",
        dates: "Mar 2024 - Sep 2024",
        description: "Desempeño en el área de innovación y desarrollo TI como práctica profesional. Desarrollo de interfaces de usuario utilizando React.js. Resolución de incidencias y soporte técnico general para asegurar la continuidad de las operaciones. Desarrollo e implementación del proyecto de graduación: 'Sistema de Inventario para Toma Física de Granel para Tanques Estacionarios, Bulks y Cilindros'.",
        slides: [
            {
                title: "Desarrollo del Sistema de Inventario",
                content: "Durante mi experiencia laboral, diseñé e implementé una plataforma integral para el registro del inventario físico de cilindros, camiones bulks y tanques estacionarios. El objetivo del proyecto fue crear un sistema eficiente y escalable que facilitara el monitoreo diario del inventario en múltiples plantas. La plataforma ha tenido un gran impacto, ya que facilita la recopilación de datos en tiempo real, mejorando la eficiencia operativa y reduciendo los errores manuales. Además, la aplicación realiza cálculos precisos para convertir volúmenes en galones y litros, teniendo en cuenta factores como la temperatura y la gravedad específica de los líquidos, lo que garantiza mediciones exactas y confiables.",
                imageUrl: "/img/exp1.1.webp",
            },
            {
                title: "Automatización con herramientas Microsoft",
                content: "Logré implementar con la ayuda de herramientas de Microsoft como Power Automate, SharePoint, Forms y Lists un formulario que automatizaba la petición de implementos de seguridad en las diferentes plantas. Consistía en realizar un flujo desde el formulario donde se llenaba y se hacía la petición de implementos de seguridad de personal para la planta. Esta petición llegaba como notificación a la persona encargada, quien aprobaba o rechazaba la solicitud, regresando un resumen del pedido a ambas partes.",
                imageUrl: "/img/exp1.2.webp",
            },
            {
                title: "Soporte TI",
                content: "Colaboré con los usuarios para resolver problemas técnicos, desde la instalación y configuración de hardware hasta la solución de problemas de software. Esto no solo mejoró la productividad de los empleados, sino que también fortaleció la comunicación entre los diferentes departamentos.",
                imageUrl: "/img/exp1.3.webp",
            },
        ],
    },
];

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
                {experienceData.map((job) => (
                    <CardExp
                        key={job.id}
                        jobTitle={job.jobTitle}
                        company={job.company}
                        dates={job.dates}
                        description={job.description}
                        slides={job.slides}
                    />
                ))}
            </Box>
        </>
    )
}
