let pizzasUsuario = Number(prompt("Cuantas pizzas tienes?"));
let pizzaComidas = Number(prompt("Cuantas pizzas se han comido"));

function CalcularPizzas(pizzaUser, pizzaComidas) {
    let calculo = pizzaUser - pizzaComidas;
    alert(`Quedan ${calculo} pizzas`);
}

CalcularPizzas(pizzasUsuario, pizzaComidas);