const frutas = [
    "manzana", "banana", "naranja", "manzana", "pera", "banana", "naranja", "manzana",
    "cereza", "kiwi", "limón", "uva", "mango", "fresa", "sandía", "coco", "piña",
    "naranja", "limón", "manzana", "fresa", "kiwi", "cereza", "sandía", "pera",
    "plátano", "uva", "melón", "higo", "mandarina", "durazno", "coco", "piña",
    "fresa", "manzana", "banana", "naranja", "higo", "kiwi", "mango", "piña",
    "manzana", "pera", "banana", "sandía", "uva", "melón", "plátano", "coco", "mango"
  ];

let index = 0;
const contadorFrutasWhile = {};

while (index < frutas.length) {
  const fruta = frutas[index];
  if (contadorFrutasWhile[fruta]) {
    contadorFrutasWhile[fruta]++;
  } else {
    contadorFrutasWhile[fruta] = 1;
  }
  index++;
}

console.log("Conteo usando ciclo while:", contadorFrutasWhile);