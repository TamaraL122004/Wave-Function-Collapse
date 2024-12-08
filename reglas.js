const azulejos = [];
const reglas = [
  { UP: 0, RIGHT: 0, DOWN: 1, LEFT: 0 }, //0
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, //1
  { UP: 0, RIGHT: 1, DOWN: 1, LEFT: 1 }, //2
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, //3
  { UP: 1, RIGHT: 1, DOWN: 1, LEFT: 0 }, //4
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 1 }, //5
  { UP: 1, RIGHT: 0, DOWN: 0, LEFT: 1 }, //6
  { UP: 1, RIGHT: 0, DOWN: 0, LEFT: 0 }, //7
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, //8
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, //9
  { UP: 0, RIGHT: 1, DOWN: 0, LEFT: 1 }, //10
  { UP: 0, RIGHT: 1, DOWN: 0, LEFT: 1 }, //11
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 1 }, //12
  { UP: 1, RIGHT: 1, DOWN: 0, LEFT: 0 }, //13
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, //14
  { UP: 0, RIGHT: 0, DOWN: 1, LEFT: 0 }, //15
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, //16
  { UP: 0, RIGHT: 1, DOWN: 0, LEFT: 0 }, //17
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 1 }, //18
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, //19
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, //20
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, //21
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, //22
  { UP: 1, RIGHT: 1, DOWN: 1, LEFT: 1 }, //23
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, //24
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, //25
];

const NA = reglas.length; //número de azulejos
