import { type Service } from "../types/services"

export const services: Service[] = [
    {
        id: 1,
        name: "Branding",
        description: "Creamos identidades visuales únicas que reflejan la esencia de tu negocio.",
        image_svg: "/idea_icon.svg",
        works: [
            {
                description: "Logo y manual de marca."
            },
            {
                description: "Paleta de colores y tipografía."
            },
            {
                description: "Elementos gráficos."
            },
            {
                description: "Aplicaciones de marca."
            }
        ]
    },
    {
        id: 2,
        name: "Diseño Web",
        description: "Sitios web modernos, responsivos y optimizados para convertir visitantes.",
        image_svg: "/code_icon.svg",
        works: [
            {
                description: "Diseño UX/UI profesional."
            },
            {
                description: "Desarrollo responsive."
            },
            {
                description: "Optimización SEO."
            },
            {
                description: "Integración con Herramientas."
            }
        ]
    },
    {
        id: 3,
        name: "Redes sociales",
        description: "Diseñamos piezas gráficas de alta calidad para tus redes sociales..",
        image_svg: "/social_icon.svg",
        works: [
            {
                description: "Avatar de redes sociales."
            },
            {
                description: "Banners de impacto."
            },
            {
                description: "Piezas para publicaciones."
            }, 
            {
                description: "Iconos para redes sociales."}           
        ]
    }
]