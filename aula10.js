const CONSUMO_LITRO = 12;

function gastoCombustivel(tempo, velocidade) {
  let distancia = tempo * velocidade;

  let consumoFinal = distancia / CONSUMO_LITRO;
  return consumoFinal.toFixed(3);
}

console.log(gastoCombustivel(10, 85));
console.log(gastoCombustivel(2, 92));
console.log(gastoCombustivel(22, 67));
