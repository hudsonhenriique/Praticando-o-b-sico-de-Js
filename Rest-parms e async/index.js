// REST PARMS

// function sum(...nums) {
//   return nums.reduce((acc, num) => acc + num);
// }

// console.log(sum(5, 10, 20, 15, 7));

// DESTRUCTURING ASSIGNMENT

// const [item1, ...nums] = [10, 11, 15, 20, 30];
// console.log(nums, item1);

// const { name, ...person } = {
//   name: "Hudson",
//   age: 31,
//   company: "Deus",
// };

// const person = {
//   name: "Mari",
//   age: 31,
// };

// const { name, ...company } = {
//   name: "Hudson",
//   company: "Itatiaia",
// };

// function showGuest({ name, ...person }) {
//   console.log(name, person);
// }

// showGuest({
//   ...person,
//   ...company,
// });

// DEFAULT PARAMS

// function guest({ name = "Vazio", age } = {}) {
//   console.log(name);
// }

// guest();

// FUNÇÃO COMO PROPRIEDADE DE OBJETOS

// const person = {
//   getAge: () => {
//     console.log(33);
//   },
// };

// person.getAge();

// PROMISSE

const Minhapromise = () => {
  const promise = new Promise((resolve, reject) => {
    const sucesso = false;

    setTimeout(() => {
      if (sucesso) {
        resolve("Sucesso!");
      } else {
        reject("Opa, algo deu errado");
      }
    }, 3000);
  });

  return promise;
};

async function main() {
  console.log("Antes");

  try {
    const result = await Minhapromise();
    console.log("SUCESSO", result);
  } catch (result) {
    console.log("ERRO", result);
  }
  console.log("Depois");
}
main();

// Minhapromise()
//   .then((result) => {
//     console.log("SUCESSO", result);
//   })
//   .catch((result) => {
//     console.log("ERRO", result);
//   });
