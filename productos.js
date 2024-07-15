const productos = [
    {
        id: 1,
        nombre: 'Glucómetro',
        descripcion: 'Dispositivo para medir el nivel de glucosa en sangre.',
        fotos: {
            principal: `./imagenes/glucometro.jpg`,
            miniatura: `./imagenes/glucometro.jpg`
        },
        precio: 200
    },
    {
        id: 2,
        nombre: 'Tiras Reactivas',
        descripcion: 'Tiras que se usan junto al glucometro para medir el nivel de glucosa',
        fotos: {
            principal: `./imagenes/tiras reactivas.jpg`,
            miniatura: `./imagenes/tiras reactivas.jpg`
        },
        precio: 20
    },
    {
        id: 3,
        nombre: 'Lanzador de Lancetas',
        descripcion: 'Dispositivo para puncionar el dedo y obtener una muestra de sangre.',
        fotos: {
            principal: `./imagenes/lanzador-de-lancetas.jpg`,
            miniatura: `./imagenes/lanzador-de-lancetas.jpg`
        },
        precio: 199
    },
    {
        id: 4,
        nombre: 'Lancetas',
        descripcion: 'Agujas para usar con el lanzador de lancetas.',
        fotos: {
            principal: `./imagenes/lancetas.jpg`,
            miniatura: `./imagenes/lancetas.jpg`
        },
        precio: 85
    },
    {
        id: 5,
        nombre: 'Suplementos de Omega-3',
        descripcion: 'Suplementos para la salud cardiovascular.',
        fotos: {
            principal: `./imagenes/omega3.jpg`,
            miniatura: `./imagenes/omega3.jpg`
        },
        precio: 300
    },
    {
        id: 6,
        nombre: 'Reservorios de Insulina',
        descripcion: 'Contenedores para almacenar la insulina en la bomba.',
        fotos: {
            principal: `./imagenes/reservorios-insulina.jpg`,
            miniatura: `./imagenes/reservorios-insulina.jpg`
        },
        precio: 25
    },
    {
        id: 7,
        nombre: 'Sensores Continuos de Glucosa',
        descripcion: 'Dispositivos que miden continuamente los niveles de glucosa.',
        fotos: {
            principal: `./imagenes/sensores-glucosa.jpg`,
            miniatura: `./imagenes/sensores-glucosa.jpg`
        },
        precio: 645
    },
    {
        id: 8,
        nombre: 'Tabletas de Glucosa',
        descripcion: 'Tabletas para elevar rápidamente el nivel de glucosa en sangre.',
        fotos: {
            principal: `./imagenes/tabletas-glucosa.jpg`,
            miniatura: `./imagenes/tabletas-glucosa.jpg`
        },
        precio: 350
    },
    {
        id: 9,
        nombre: 'Kit de Prueba de Cetona',
        descripcion: 'Kit para medir los niveles de cetona en sangre.',
        fotos: {
            principal: `./imagenes/kit-cetona.jpg`,
            miniatura: `./imagenes/kit-cetona.jpg`
        },
        precio: 273
    },
    {
        id: 10,
        nombre: 'Medidor de Hemoglobina A1c',
        descripcion: 'Dispositivo para medir los niveles de hemoglobina A1c.',
        fotos: {
            principal: `./imagenes/medidor-a1c.jpg`,
            miniatura: `./imagenes/medidor-a1c.jpg`
        },
        precio: 430
    },
    {
        id: 11,
        nombre: 'Insulina Rápida',
        descripcion: 'Insulina de acción rápida para control inmediato.',
        fotos: {
            principal: `./imagenes/insulina-rapida.jpg`,
            miniatura: `./imagenes/insulina-rapida.jpg`
        },
        precio: 30
    },
    {
        id: 12,
        nombre: 'Insulina Lenta',
        descripcion: 'Insulina de acción prolongada para control a largo plazo.',
        fotos: {
            principal: `./imagenes/insulina-lenta.jpg`,
            miniatura: `./imagenes/insulina-lenta.jpg`
        },
        precio: 220
    },
    {
        id: 13,
        nombre: 'Monitor de Presión Arterial',
        descripcion: 'Dispositivo para medir la presión arterial.',
        fotos: {
            principal: `./imagenes/monitor-presion-arterial.jpg`,
            miniatura: `./imagenes/monitor-presion-arterial.jpg`
        },
        precio: 190
    },
    {
        id: 14,
        nombre: 'Parches de Insulina',
        descripcion: 'Parches para la administración continua de insulina.',
        fotos: {
            principal: `./imagenes/parches-insulina.jpg`,
            miniatura: `./imagenes/parches-insulina.jpg`
        },
        precio: 100
    },
    {
        id: 15,
        nombre: 'Jeringas de Insulina',
        descripcion: 'Jeringas para la inyección de insulina.',
        fotos: {
            principal: `./imagenes/jeringas-insulina.jpg`,
            miniatura: `./imagenes/jeringas-insulina.jpg`
        },
        precio: 200
    },
    {
        id: 16,
        nombre: 'Pastillas de Metformina',
        descripcion: 'Medicamento oral para el control de la diabetes.',
        fotos: {
            principal: `./imagenes/metformina.jpg`,
            miniatura: `./imagenes/metformina.jpg`
        },
        precio: 109
    },
    {
        id: 20,
        nombre: 'Crema para Pie Diabético',
        descripcion: 'Crema especial para el cuidado de los pies.',
        fotos: {
            principal: `./imagenes/crema-pie.jpg`,
            miniatura: `./imagenes/crema-pie.jpg`
        },
        precio: 330
    },
    {
        id: 21,
        nombre: 'Bastones de Glucosa',
        descripcion: 'Bastones para monitorear la glucosa en saliva.',
        fotos: {
            principal: `./imagenes/bastones-glucosa.jpg`,
            miniatura: `./imagenes/bastones-glucosa.jpg`
        },
        precio: 270
    },
    // {
    //     id: 22,
    //     nombre: 'Diabetes Educ Kit',
    //     descripcion: 'Kit educativo sobre la diabetes para pacientes.',
    //     fotos: {
    //         principal: `./imagenes/educ-kit.jpg`,
    //         miniatura: `./imagenes/educ-kit.jpg`
    //     },
    //     precio: 25
    // },
    // {
    //     id: 23,
    //     nombre: 'Pluma de Insulina',
    //     descripcion: 'Pluma para la administración fácil de insulina.',
    //     fotos: {
    //         principal: `./imagenes/pluma-insulina.jpg`,
    //         miniatura: `./imagenes/pluma-insulina.jpg`
    //     },
    //     precio: 45
    // },
    // {
    //     id: 24,
    //     nombre: 'Monitor de Actividad Física',
    //     descripcion: 'Dispositivo para monitorear la actividad física y el ejercicio.',
    //     fotos: {
    //         principal: `./imagenes/monitor-actividad.jpg`,
    //         miniatura: `./imagenes/monitor-actividad.jpg`
    //     },
    //     precio: 75
    // },
    // {
    //     id: 25,
    //     nombre: 'Suplementos de Cromo',
    //     descripcion: 'Suplementos para ayudar a regular el azúcar en sangre.',
    //     fotos: {
    //         principal: `./imagenes/suplemento-cromo.jpg`,
    //         miniatura: `./imagenes/suplemento-cromo.jpg`
    //     },
    //     precio: 20
    // },
    // {
    //     id: 26,
    //     nombre: 'Jabón Antiséptico',
    //     descripcion: 'Jabón para la limpieza y desinfección de la piel.',
    //     fotos: {
    //         principal: `./imagenes/jabon-antiseptico.jpg`,
    //         miniatura: `./imagenes/jabon-antiseptico.jpg`
    //     },
    //     precio: 8
    // },
    // {
    //     id: 27,
    //     nombre: 'Gel de Aloe Vera',
    //     descripcion: 'Gel para calmar e hidratar la piel.',
    //     fotos: {
    //         principal: `./imagenes/gel-aloe-vera.jpg`,
    //         miniatura: `./imagenes/gel-aloe-vera.jpg`
    //     },
    //     precio: 12
    // },
    // {
    //     id: 28,
    //     nombre: 'Comida para Diabéticos',
    //     descripcion: 'Alimentos especialmente formulados para personas con diabetes.',
    //     fotos: {
    //         principal: `./imagenes/comida-diabeticos.jpg`,
    //         miniatura: `./imagenes/comida-diabeticos.jpg`
    //     },
    //     precio: 30
    // },
    // {
    //     id: 29,
    //     nombre: 'Bomba de Insulina',
    //     descripcion: 'Dispositivo para la administración continua de insulina.',
    //     fotos: {
    //         principal: `./imagenes/bomba-insulina.jpg`,
    //         miniatura: `./imagenes/bomba-insulina.jpg`
    //     },
    //     precio: 25
    // },
    // {
    //     id: 30,
    //     nombre: 'Vitamina D',
    //     descripcion: 'Suplemento de vitamina D para el soporte inmunológico.',
    //     fotos: {
    //         principal: `./imagenes/vitamina-d.jpg`,
    //         miniatura: `./imagenes/vitamina-d.jpg`
    //     },
    //     precio: 15
    // },
    // {
    //     id: 31,
    //     nombre: 'Gel Hidratante para Ojos',
    //     descripcion: 'Gel para aliviar la sequedad ocular.',
    //     fotos: {
    //         principal: `./imagenes/gel-ojos.jpg`,
    //         miniatura: `./imagenes/gel-ojos.jpg`
    //     },
    //     precio: 10
    // }
];
