const productos = [
    {
        id: 1,
        nombre: 'Glucómetro',
        descripcion: 'Dispositivo para medir el nivel de glucosa en sangre.',
        fotos: {
            principal: `./Imagenes/glucometro.jpg`,
            miniatura: `./Imagenes/glucometro.jpg`
        },
        precio: 200
    },
    {
        id: 2,
        nombre: 'Tiras Reactivas',
        descripcion: 'Tiras que se usan junto al glucometro para medir el nivel de glucosa',
        fotos: {
            principal: `./Imagenes/tiras reactivas.jpg`,
            miniatura: `./Imagenes/tiras reactivas.jpg`
        },
        precio: 20
    },
    {
        id: 3,
        nombre: 'Lanzador de Lancetas',
        descripcion: 'Dispositivo para puncionar el dedo y obtener una muestra de sangre.',
        fotos: {
            principal: `./Imagenes/lanzador-de-lancetas.jpg`,
            miniatura: `./Imagenes/lanzador-de-lancetas.jpg`
        },
        precio: 199
    },
    {
        id: 4,
        nombre: 'Lancetas',
        descripcion: 'Agujas para usar con el lanzador de lancetas.',
        fotos: {
            principal: `./Imagenes/lancetas.jpg`,
            miniatura: `./Imagenes/lancetas.jpg`
        },
        precio: 85
    },
    {
        id: 5,
        nombre: 'Suplementos de Omega-3',
        descripcion: 'Suplementos para la salud cardiovascular.',
        fotos: {
            principal: `./Imagenes/omega3.jpg`,
            miniatura: `./Imagenes/omega3.jpg`
        },
        precio: 300
    },
    {
        id: 6,
        nombre: 'Reservorios de Insulina',
        descripcion: 'Contenedores para almacenar la insulina en la bomba.',
        fotos: {
            principal: `./Imagenes/reservorios-insulina.jpg`,
            miniatura: `./Imagenes/reservorios-insulina.jpg`
        },
        precio: 25
    },
    {
        id: 7,
        nombre: 'Sensores Continuos de Glucosa',
        descripcion: 'Dispositivos que miden continuamente los niveles de glucosa.',
        fotos: {
            principal: `./Imagenes/sensores-glucosa.jpg`,
            miniatura: `./Imagenes/sensores-glucosa.jpg`
        },
        precio: 645
    },
    {
        id: 8,
        nombre: 'Tabletas de Glucosa',
        descripcion: 'Tabletas para elevar rápidamente el nivel de glucosa en sangre.',
        fotos: {
            principal: `./Imagenes/tabletas-glucosa.jpg`,
            miniatura: `./Imagenes/tabletas-glucosa.jpg`
        },
        precio: 350
    },
    {
        id: 9,
        nombre: 'Kit de Prueba de Cetona',
        descripcion: 'Kit para medir los niveles de cetona en sangre.',
        fotos: {
            principal: `./Imagenes/kit-cetona.jpg`,
            miniatura: `./Imagenes/kit-cetona.jpg`
        },
        precio: 273
    },
    {
        id: 10,
        nombre: 'Medidor de Hemoglobina A1c',
        descripcion: 'Dispositivo para medir los niveles de hemoglobina A1c.',
        fotos: {
            principal: `./Imagenes/medidor-a1c.jpg`,
            miniatura: `./Imagenes/medidor-a1c.jpg`
        },
        precio: 430
    },
    {
        id: 11,
        nombre: 'Insulina Rápida',
        descripcion: 'Insulina de acción rápida para control inmediato.',
        fotos: {
            principal: `./Imagenes/insulina-rapida.jpg`,
            miniatura: `./Imagenes/insulina-rapida.jpg`
        },
        precio: 30
    },
    {
        id: 12,
        nombre: 'Insulina Lenta',
        descripcion: 'Insulina de acción prolongada para control a largo plazo.',
        fotos: {
            principal: `./Imagenes/insulina-lenta.jpg`,
            miniatura: `./Imagenes/insulina-lenta.jpg`
        },
        precio: 220
    },
    {
        id: 13,
        nombre: 'Monitor de Presión Arterial',
        descripcion: 'Dispositivo para medir la presión arterial.',
        fotos: {
            principal: `./Imagenes/monitor-presion-arterial.jpg`,
            miniatura: `./Imagenes/monitor-presion-arterial.jpg`
        },
        precio: 190
    },
    {
        id: 14,
        nombre: 'Parches de Insulina',
        descripcion: 'Parches para la administración continua de insulina.',
        fotos: {
            principal: `./Imagenes/parches-insulina.jpg`,
            miniatura: `./Imagenes/parches-insulina.jpg`
        },
        precio: 100
    },
    {
        id: 15,
        nombre: 'Jeringas de Insulina',
        descripcion: 'Jeringas para la inyección de insulina.',
        fotos: {
            principal: `./Imagenes/jeringas-insulina.jpg`,
            miniatura: `./Imagenes/jeringas-insulina.jpg`
        },
        precio: 200
    },
    {
        id: 16,
        nombre: 'Pastillas de Metformina',
        descripcion: 'Medicamento oral para el control de la diabetes.',
        fotos: {
            principal: `./Imagenes/metformina.jpg`,
            miniatura: `./Imagenes/metformina.jpg`
        },
        precio: 109
    },
    {
        id: 20,
        nombre: 'Crema para Pie Diabético',
        descripcion: 'Crema especial para el cuidado de los pies.',
        fotos: {
            principal: `./Imagenes/crema-pie.jpg`,
            miniatura: `./Imagenes/crema-pie.jpg`
        },
        precio: 330
    },
    {
        id: 21,
        nombre: 'Bastones de Glucosa',
        descripcion: 'Bastones para monitorear la glucosa en saliva.',
        fotos: {
            principal: `./Imagenes/bastones-glucosa.jpg`,
            miniatura: `./Imagenes/bastones-glucosa.jpg`
        },
        precio: 270
    },
    // {
    //     id: 22,
    //     nombre: 'Diabetes Educ Kit',
    //     descripcion: 'Kit educativo sobre la diabetes para pacientes.',
    //     fotos: {
    //         principal: `./Imagenes/educ-kit.jpg`,
    //         miniatura: `./Imagenes/educ-kit.jpg`
    //     },
    //     precio: 25
    // },
    // {
    //     id: 23,
    //     nombre: 'Pluma de Insulina',
    //     descripcion: 'Pluma para la administración fácil de insulina.',
    //     fotos: {
    //         principal: `./Imagenes/pluma-insulina.jpg`,
    //         miniatura: `./Imagenes/pluma-insulina.jpg`
    //     },
    //     precio: 45
    // },
    // {
    //     id: 24,
    //     nombre: 'Monitor de Actividad Física',
    //     descripcion: 'Dispositivo para monitorear la actividad física y el ejercicio.',
    //     fotos: {
    //         principal: `./Imagenes/monitor-actividad.jpg`,
    //         miniatura: `./Imagenes/monitor-actividad.jpg`
    //     },
    //     precio: 75
    // },
    // {
    //     id: 25,
    //     nombre: 'Suplementos de Cromo',
    //     descripcion: 'Suplementos para ayudar a regular el azúcar en sangre.',
    //     fotos: {
    //         principal: `./Imagenes/suplemento-cromo.jpg`,
    //         miniatura: `./Imagenes/suplemento-cromo.jpg`
    //     },
    //     precio: 20
    // },
    // {
    //     id: 26,
    //     nombre: 'Jabón Antiséptico',
    //     descripcion: 'Jabón para la limpieza y desinfección de la piel.',
    //     fotos: {
    //         principal: `./Imagenes/jabon-antiseptico.jpg`,
    //         miniatura: `./Imagenes/jabon-antiseptico.jpg`
    //     },
    //     precio: 8
    // },
    // {
    //     id: 27,
    //     nombre: 'Gel de Aloe Vera',
    //     descripcion: 'Gel para calmar e hidratar la piel.',
    //     fotos: {
    //         principal: `./Imagenes/gel-aloe-vera.jpg`,
    //         miniatura: `./Imagenes/gel-aloe-vera.jpg`
    //     },
    //     precio: 12
    // },
    // {
    //     id: 28,
    //     nombre: 'Comida para Diabéticos',
    //     descripcion: 'Alimentos especialmente formulados para personas con diabetes.',
    //     fotos: {
    //         principal: `./Imagenes/comida-diabeticos.jpg`,
    //         miniatura: `./Imagenes/comida-diabeticos.jpg`
    //     },
    //     precio: 30
    // },
    // {
    //     id: 29,
    //     nombre: 'Bomba de Insulina',
    //     descripcion: 'Dispositivo para la administración continua de insulina.',
    //     fotos: {
    //         principal: `./Imagenes/bomba-insulina.jpg`,
    //         miniatura: `./Imagenes/bomba-insulina.jpg`
    //     },
    //     precio: 25
    // },
    // {
    //     id: 30,
    //     nombre: 'Vitamina D',
    //     descripcion: 'Suplemento de vitamina D para el soporte inmunológico.',
    //     fotos: {
    //         principal: `./Imagenes/vitamina-d.jpg`,
    //         miniatura: `./Imagenes/vitamina-d.jpg`
    //     },
    //     precio: 15
    // },
    // {
    //     id: 31,
    //     nombre: 'Gel Hidratante para Ojos',
    //     descripcion: 'Gel para aliviar la sequedad ocular.',
    //     fotos: {
    //         principal: `./Imagenes/gel-ojos.jpg`,
    //         miniatura: `./Imagenes/gel-ojos.jpg`
    //     },
    //     precio: 10
    // }
];
