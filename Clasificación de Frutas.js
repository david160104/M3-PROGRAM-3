const frutas = [
    "manzana", "banana", "naranja", "manzana", "pera", "banana", "naranja", "manzana",
    "cereza", "kiwi", "limón", "uva", "mango", "fresa", "sandía", "coco", "piña",
    "naranja", "limón", "manzana", "fresa", "kiwi", "cereza", "sandía", "pera",
    "plátano", "uva", "melón", "higo", "mandarina", "durazno", "coco", "piña",
    "fresa", "manzana", "banana", "naranja", "higo", "kiwi", "mango", "piña",
    "manzana", "pera", "banana", "sandía", "uva", "melón", "plátano", "coco", "mango"
  ];

  const contadorFrutas = {};

for (let i = 0; i < frutas.length; i++) {
  const fruta = frutas[i];
  if (contadorFrutas[fruta]) {
    contadorFrutas[fruta]++;
  } else {
    contadorFrutas[fruta] = 1;
  }
}

console.log("Conteo usando ciclo for", contadorFrutas);

let index = 0;
const contadorFrutasWhile = {};