const vehicle = {
  type: "car",
  style: "sedan",
  color: "preto",
  brand: "Toyota",
  model: "Corolla",
};

switch (vehicle.type) {
  case "car":
    console.log(
      `O ${vehicle.model} é um veículo da marca ${vehicle.brand} de cor ${vehicle.color}`
    );
    break;
  case "moto":
    console.log(
      `O ${vehicle.model} é um veículo da marca ${vehicle.brand} de cor ${vehicle.color}`
    );
    break;
  case "caminhão":
    console.log(
      `O ${vehicle.model} é um veículo da marca ${vehicle.brand} de cor ${vehicle.color}`
    );
    break;
  default:
    console.log("Seu veiculo não faz parte da lista");
}
