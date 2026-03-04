let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let tamanho = matriz.length;
let diagPrincipal = [];
let diagSecundaria = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < tamanho; i++) {
  let elementoPrincipal = matriz[i][i];
  let elementoSecundario = matriz[i][tamanho - 1 - i];
  diagPrincipal.push(matriz[i][i]);
  diagSecundaria.push(matriz[i][tamanho - 1 - i]);

  somaPrincipal += elementoPrincipal;
  somaSecundaria += elementoSecundario;
}

console.log("Diagonal Principal:", diagPrincipal);
console.log("Diagonal Secundária:", diagSecundaria);
console.log("Soma da Diagonal Principal:", somaPrincipal);
console.log("Soma da Diagonal Secundária:", somaSecundaria);
