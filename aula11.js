function imparesSeguintes(num) {
  const verificacao = num % 2;

  if (verificacao === 0) {
    console.log("Numero PAR");
    for (let i = 0; i < 6; i++) {
      console.log(num + 1);
      num += 2;
    }
  } else {
    console.log("Numero IMPAR");
    for (let i = 0; i < 6; i++) {
      console.log(num + 2);
      num += 2;
    }
  }
}

imparesSeguintes(8);
