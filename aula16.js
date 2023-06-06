function calcular(valor) {
  if (valor === 0) {
    throw new Error("Não pode ser zero!");
  }
  return valor / 2;
}

try {
  console.log(calcular(0));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("chegou no finally");
}
