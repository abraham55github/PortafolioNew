import { Code } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import CardPr from "./CardPr";
import Grid from "@mui/material/Grid2";

const dataPr = [
    {
        id: 1,
        title: "Inventario STF",
        imageUrl: "/img/pr1stf.png",
        description: "Desarrollé una plataforma de inventario para cilindros, camiones de bulks y tanques estacionarios. Se encarga de registrar las cantidades de cilindros de 25, 60 y 100 lbs, registrar los niveles de gas propano o butano en %, litros y galones, así como automatizar el cálculo para gravedad específica y temperatura.",
        sliders: [
            {
                title: "FrontEnd del proyecto",
                content: "En la parte visual o frontend, utilicé la biblioteca JavaScript React para construir la aplicación de manera moderna, aprovechando sus herramientas como los componentes reutilizables. Estos componentes están conectados con la API y se muestran dinámicamente en función de las acciones del usuario en la pantalla. Además, implementé hooks como useState y useEffect para gestionar los distintos estados de la aplicación y controlar efectos secundarios. También utilicé React Router DOM para manejar las rutas de la aplicación y crear una estructura robusta de vistas, incluyendo layouts que permiten renderizar diferentes componentes según la ruta seleccionada. Para proteger las rutas y garantizar que solo los usuarios autenticados puedan acceder a ellas, integré autorización con Axios mediante tokens de usuario. Esto asegura que las solicitudes a las rutas protegidas incluyan el token de autenticación, manteniendo la seguridad de la aplicación. Para la gestión de estados globales y funciones compartidas entre diferentes partes de la aplicación, utilicé el Context API, facilitando una comunicación eficiente entre los componentes sin necesidad de pasar props manualmente en todos los niveles.",
                imageUrl: "/img/exp1.1.png",
            },
            {
                title: "Backend del proyecto",
                content: "En la parte de datos o backend, utilicé el framework Django de Python junto con una extensión llamada Django Rest Framework, que facilita la creación de una API REST. Desarrollé la aplicación bajo este marco, permitiendo la creación de diferentes modelos para las tablas de base de datos necesarias para almacenar los datos. Utilicé MySQL conectado con el framework de manera local para guardar los datos de desarrollo y prueba. Una vez creados los modelos, desarrollé las diferentes vistas para la API, incluyendo vistas para paginación, búsqueda y filtros. Luego, diseñé el archivo urls.py, donde se vinculan los modelos con las vistas para exponer los endpoints de la API final. También implementé un sistema de tokenización y autorización utilizando los modelos de usuario de Django, lo que automatiza la creación y el inicio de sesión de usuarios, además de mantener su sesión activa mediante un token. Se diseñaron roles específicos para gestionar los permisos de acceso y las funcionalidades disponibles para cada tipo de usuario en la aplicación. Cuando el token está inactivo, se redirige automáticamente al usuario en el frontend. Además, se crearon operaciones CRUD para gestionar los diferentes estados, lugares y formatos de los cilindros y tanques, permitiendo así un panel de administración eficaz para estos elementos.",
                imageUrl: "/img/pr1.2.png",
            },
            {
                title: "Despligue servidor",
                content: "Para desplegar la aplicación, utilicé un servidor remoto local con Debian. Realicé el despliegue en un servidor virtual con Apache2, donde subí los archivos a la carpeta www, que es la ubicación predeterminada para alojar archivos de páginas web en el servidor Debian. Posteriormente, implementé la configuración del host de Apache2 creando un archivo en el directorio sites-available, donde especifiqué la ruta que apuntaba al archivo index.html. Para acceder a la aplicación bajo el dominio del servidor remoto, seleccioné un puerto adecuado para el despliegue y aseguré que se otorgaran los permisos necesarios. Configuré también los archivos .htaccess para mantener un enrutamiento estable tanto para el frontend como para el backend. Además, utilicé un entorno virtual (venv) para desplegar la aplicación de Django. Este entorno virtual fue conectado a Apache para mostrar la aplicación correctamente, siguiendo un proceso similar al del despliegue del frontend. Para facilitar esta integración, configuré el archivo WSGI, que permite a Apache comunicarse con la aplicación Django. Este archivo es esencial para el funcionamiento de la aplicación en el entorno de producción, asegurando que las solicitudes se dirijan correctamente a la lógica de la aplicación.",
                imageUrl: "/img/pr1.3.jpeg",
            },
        ],
    },
    {
        id: 2,
        title: "DataCenter",
        imageUrl: "/img/pr2.png",
        description: "Colaboré en el desarrollo de una aplicación para almacenar datos y relacionarlos entre diversas bases de datos, incluyendo archivos Excel y SQL Server. Utilicé códigos comunes para comparar cantidades y asegurar su complementariedad. Diseñé la aplicación de manera independiente, permitiendo la carga de datos de múltiples fuentes y facilitando la comparación de información mediante elementos comunes.",
        sliders: [
            {
                title: "Datacenter construcción",
                content: "Para el desarrollo de esta aplicación, utilicé React en el frontend y Django en el backend, con el objetivo de conectar ambas tecnologías. El enfoque principal del proyecto es permitir la importación de un archivo Excel con cientos de miles de registros, optimizando su procesamiento. Dado el gran volumen de datos, implementé soluciones eficientes utilizando un servicio SQL para manejar las consultas y mostrar los datos en una tabla en el frontend. En el backend, trabajé en la optimización de funciones de paginación, búsqueda y filtrado para asegurar un rendimiento fluido en la presentación de los datos.",
                imageUrl: "/img/pr2.png",
            },
            {
                title: "Importar datos de excel",
                content: "Para cargar los datos del archivo Excel en la base de datos, utilicé la biblioteca Pandas de Python. Se crearon modelos para representar las diferentes tablas generadas a partir de los informes en Excel, y se diseñaron vistas específicas para gestionar estas tablas. Además, se desarrolló una vista especial que servía como endpoint para la subida de archivos Excel a la base de datos, permitiendo realizar comparaciones consistentes y precisas entre los datos. Durante el proceso, se leyó el archivo Excel y se implementó un método para limpiar y normalizar los nombres de las columnas, de modo que coincidieran con las columnas correspondientes en la base de datos. También se formatearon las fechas y se implementó un sistema de caché para agilizar la carga de los cientos de miles de registros. Los datos procesados por Pandas se guardaron en la base de datos en lotes, mejorando así la eficiencia en la manipulación de grandes volúmenes de información.",
                imageUrl: "/img/pr2.1.png",
            },
        ],
    },
    {
        id: 3,
        title: "Bienes Raices",
        imageUrl: "/img/pr3.png",
        description: "En un proyecto desarrollado desde cero con PHP, diseñé e implementé una estructura basada en el patrón Modelo Vista Controlador (MVC) para optimizar la comunicación entre las diferentes capas de la aplicación. Además, creé un esquema Active Record, que sirvió como controlador principal para gestionar de manera eficiente la interacción con la base de datos, el manejo de errores y otras operaciones críticas. Este enfoque permitió una arquitectura más modular, escalable y fácil de mantener, asegurando una mayor fluidez en el desarrollo y la gestión de los datos.",
        githubUrl: "https://github.com/abraham55github/bienesraicesMVC",
        sliders: [
            {
                title: "Login y autenticacion",
                content: "El LoginController gestiona el inicio y cierre de sesión en la aplicación. En el método login, al recibir los datos del formulario, se valida si el usuario existe y si la contraseña ingresada es correcta. Si hay errores, como un usuario inexistente o una contraseña incorrecta, estos se almacenan y se muestran en la vista. Si la autenticación es exitosa, se inicia la sesión del usuario. El método logout, por su parte, cierra la sesión destruyendo los datos de la misma y redirigiendo al usuario a la página principal. La vista presenta un formulario para ingresar el email y la contraseña, y muestra errores cuando sea necesario.",
                imageUrl: "/img/pr3.1.png",
            },
            {
                title: "CRUD para registrar propiedades y vendedores",
                content: "Los controladores proporcionan un CRUD básico para gestionar propiedades y vendedores en una base de datos. El PropiedadController permite listar, crear, actualizar y eliminar registros de propiedades, manejando la subida de imágenes con la librería Intervention Image, validaciones de datos, y sincronización de atributos. El VendedoresController ofrece funcionalidad similar para la tabla de vendedores, permitiendo crear, actualizar y eliminar vendedores, también con validación de datos. Ambos controladores aseguran que las operaciones se realicen de manera segura, validando los tipos de contenido y filtrando las entradas de los formularios.",
                imageUrl: "/img/pr3.2-3.png",
            },
            {
                title: "Vista de propiedades.",
                content: "La vista del controlador muestra los detalles de una propiedad específica, incluyendo su título, imagen, precio, y características como el número de baños, habitaciones y estacionamientos. Además, se despliega una descripción completa de la propiedad. Las características se representan mediante iconos, y la imagen de la propiedad se carga de forma optimizada para mejorar el rendimiento. La información está estructurada dentro de una sección centrada en la página, ofreciendo una presentación visual clara y atractiva para los usuarios.",
                imageUrl: "/img/pr3.4.png",
            },
        ],
    },
];

export default function Projects() {
    return (
        <Box paddingBottom={10}>
            <Typography
                textAlign={'center'}
                variant="h4"
                pt={5}
                component="div"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Code fontSize="inherit" sx={{ fontSize: 'inherit', marginRight: 1 }} />
                Proyectos
            </Typography>

            {/* Uso de spacing responsivo */}
            <Grid container spacing={{ xs: 2, md: 10 }} justifyContent={{ xs: "center", md: "space-evenly" }}>
                {dataPr.map((project) => (
                    <Grid item xs={12} md={6} key={project.id}>
                        <CardPr
                            title={project.title}
                            imageUrl={project.imageUrl}
                            description={project.description}
                            sliders={project.sliders}
                            githubUrl={project.githubUrl}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
