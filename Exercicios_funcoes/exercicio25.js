console.log("=========== Função decrementar ===========");

function decrementeNumPar(num) {
  for (let i = num; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
decrementeNumPar(40);
