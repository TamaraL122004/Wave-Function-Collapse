const celdas = [];
const RETÍCULA = 6;
let ancho; //anchura de la celda
let alto; //altura de la celda

const azulejos = [];
const NA = 18; //número de azulejos
const reglas = [
  // reglas de los bordes de cada azulejo
  {
    //tile 0
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },

  {
    //tile 1
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },

  {
    //tile 2
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },

  {
    //tile 3
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },

  {
    //tile 4
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },

  {
    //tile 5
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },

  {
    //tile 6
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },

  {
    //tile 7
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },

  {
    //tile 8
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },

  {
    //tile 9
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },

  {
    //tile 10
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },

  {
    //tile 11
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },

  {
    //tile 12
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },

  {
    //tile 13
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },

  {
    //tile 14
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },

  {
    //tile 15
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },

  {
    //tile 16
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },

  {
    //tile 17
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
];

function preload() {
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage(`src/Tile${i}.png`);
  }
}

function setup() {
  createCanvas(1080, 1080);

  ancho = width / RETÍCULA;
  alto = height / RETÍCULA;

  let opcionesI = [];
  for (let i = 0; i < azulejos.length; i++) {
    opcionesI.push(i);
  }

  for (let i = 0; i < RETÍCULA * RETÍCULA; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }
  // celdas[8].colapsada = true;
  // celdas[3].colapsada = true;

  // celdas[12].opciones = [5, 6, 8];
  // celdas[4].opciones = [4, 7, 10];
  // celdas[6].opciones = [6, 7, 5];
  // celdas[1].opciones = [6, 4, 9, 10];
  // celdas[5].opciones = [11, 6, 4, 8, 10];
}

function draw() {
  // background(200);

  const celdasDisponibles = celdas.filter((celda) => {
    return celda.colapsada == false;
  });

  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
    });

    const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return celda.opciones.length == celdasDisponibles[0].opciones.length;
    });

    const celdaSeleccionada = random(celdasPorColapsar);
    celdaSeleccionada.colapsada = true;

    const opciónSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opciónSeleccionada];

    print(celdaSeleccionada);

    for (let x = 0; x < RETÍCULA; x++) {
      for (let y = 0; y < RETÍCULA; y++) {
        const celdaIndex = x + y * RETÍCULA;
        const celdaActual = celdas[celdaIndex];
        if (celdaActual.colapsada) {
          image(
            azulejos[celdaActual.opciones[0]],
            x * ancho,
            y * alto,
            ancho,
            alto
          );
        }
      }
    }
  }

  // print(celdasDisponibles);
  // noLoop();
}
