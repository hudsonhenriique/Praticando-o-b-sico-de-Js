const numeros = [1, 2, 3, 4, 5, 6, 7];

const total = numeros.reduce((acc, item) => {
  if (item % 2 === 0) {
    return item + acc;
  } else {
    return item * acc;
  }
}, 0);

console.log(total);

// function forEach(lista, callback) {
//   for (let i = 0; i < lista.length; i++) {
//     callback(lista[i]);
//   }
// }

// function callback(item) {
//   if (item % 2 === 0) {
//     return console.log(`O número ${item} é par`);
//   } else if (item % 2 !== 0) {
//     return console.log(`O número ${item} é ímpar`);
//   }
// }

// forEach(lista, callback);

// const pares = numeros.filter((item) => {
//   if (item % 2 === 0) {
//     return true;
//   }
// });

// console.log(`A quantidade de números pares é `, pares.length);

// const paresDobrados = pares.map((item) => {
//   return item * 2;
// });

// console.log(paresDobrados);

// const impares = numeros.filter((item) => {
//   if (item % 2 !== 0) {
//     return true;
//   }
// });

// console.log(`A quantidade de números impares é `, impares.length);

// const imparesTriplicados = impares.map((item) => {
//   return item * 3;
// });

// console.log(imparesTriplicados);

// Reduce

// function somaIdade(acc, item) {
//   const resultado = {
//     idadeTotal: item.age + acc.idadeTotal,
//     maiorIdade: acc.maiorIdade,
//   };

//   console.log("--------------");
//   console.log("Maior idade", acc.maiorIdade);
//   console.log("Item idade", item.age);

//   if (item.age > acc.maiorIdade) {
//     resultado.maiorIdade = item.age;
//   }
//   return resultado;
// }

// const idades = guests.reduce(somaIdade, {
//   idadeTotal: 0,
//   maiorIdade: 0,
// });

// console.log(idades);

//Filter

// const confirmedGuests = guests.filter((item) => item.confirmed);

//Map

// const presentGuests = confirmedGuests.map((item) => {
//   const novo = {
//     name: item.name,
//     isPresent: true,
//   };
//   return novo;
// });

// console.log(presentGuests);

// For

// for (let i = 0; i < guests.length; i++) {
//   console.log(guests[i]);
// }

// ForEach

// guests.forEach((guest) => {
//   if (guest.confirmed) {
//     console.log(`${guest.name} confirmou presença!`);
//   } else {
//     console.log(`${guest.name} não poderá comparecer`);
//   }
// });
