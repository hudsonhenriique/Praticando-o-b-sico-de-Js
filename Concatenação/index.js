const name = "Hudson Henrique";

let age = 31;

let city = "Belo Horizonte";

const height = "1,83";

const dateOfBirth = "11/03/1992";

console.log(name, age, city, height, dateOfBirth);

const citys = [
  "Florianópolis",
  "São Paulo",
  "Rio de Janeiro",
  "Goiania",
  "Vitória",
  "Belo Horizonte",
];

console.log(citys[5]);

city = citys[5];

console.log(city);

let currentYear = 2023;

let birthYear = 1992;

age = currentYear - birthYear;

console.log(age);

const alunoHtml = "Marcos";

const alunoJs = "Flavia";

console.log("O aluno que estuda Javascript é " + alunoJs);

console.log(`O aluno que estuda HTML é ${alunoHtml}`);

const students = [
  "Bruno",
  ["Direito", "75%", false, ["Constituição", "Direito Penal"]],
  "Daniele",
  ["Psicologia", "100%", true, ["Sociologia", "Antropologia"]],
  "Douglas",
  ["Educação física", "60%", false, ["Nutrição", "Biologia"]],
  "Marilaine",
  [
    "Psicopedagogia",
    "100%",
    true,
    ["Neuropsicologia", "Metodologia de Pesquisa"],
  ],
  "Hudson",
  ["Programação", "48%", false, ["Variaveis", "Concatenação"]],
];
