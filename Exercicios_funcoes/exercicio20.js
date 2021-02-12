function gerarNumAleatorio(num) {
  return Math.floor(Math.random() * num) + 1;
}
console.log(gerarNumAleatorio(20));
console.log(gerarNumAleatorio(10));
console.log(gerarNumAleatorio(30));
console.log(gerarNumAleatorio(50));
