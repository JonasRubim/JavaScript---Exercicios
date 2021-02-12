let usuario = {
  nome: "Jose",
  idade: 18,
  cnh: true,
};

if (usuario.idade >= 18 && usuario.cnh) {
  console.log("Perfeito! você pode dirigir " + usuario.nome);
} else if (usuario.idade >= 18 && !usuario.cnh) {
  console.log("Poxa! a idade esta otimo, só falta a CNH.");
} else {
  console.log("Ainda não pode dirigir " + usuario.nome);
}
