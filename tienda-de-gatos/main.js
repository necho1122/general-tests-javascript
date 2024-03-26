import "./style.css";
import gatos from "./gatos.json";

document.addEventListener("DOMContentLoaded", () => {
	renderGatos();
});

function renderGatos() {
	const app = document.querySelector("#app");
	app.innerHTML = `
    <button id="toggleCartButton"><img src="./public/cart-adopt.svg" alt="cart"/></button>
    <h1>Tienda de gatos en adopción</h1>
    <div id="cart" style="display: none;"><button id="closeCart">X</button></div>
    <div id="my-test">
      <div class="cats-container">
        <ul id="gatos-list">
          ${gatos.gatos.map(renderGato).join("")}
        </ul>
      </div>
    </div>
  `;

	const gatosList = document.querySelector("#gatos-list");
	gatosList.addEventListener("click", handleGatoClick);
}

function renderGato(gato) {
	return `
    <li data-id="${gato.id}">
      <img src='${gato.imagen}'>
      <h3>${gato.titulo}:</h3>
      <p>${gato.descripcion}</p>
      <button type="button">Adoptar</button>
    </li>
  `;
}

function handleGatoClick(event) {
	const target = event.target;
	if (target.tagName === "BUTTON") {
		const listItem = target.closest("li");
		const gatoId = Number.parseInt(listItem.getAttribute("data-id"));
		const cart = document.querySelector("#cart");
		addToCart(cart, gatoId);
	}
}

function addToCart(cart, gatoId) {
	const gato = gatos.gatos.find((gato) => gato.id === gatoId);
	if (gato) {
		const cartItem = document.createElement("div");
		cartItem.innerHTML = `
      <div class="gato-in-cart">
        <h5>Gato:</h5>
        <p>${gato.titulo}</p>
        <p>Serial: ${(Math.random() * 100000000).toFixed(0)}</p>
        <img src="${gato.imagen}">
      </div>
    `;
		cart.appendChild(cartItem);
	}
}

document.addEventListener("DOMContentLoaded", (event) => {
	document.getElementById("toggleCartButton").addEventListener("click", () => {
		const cart = document.getElementById("cart");
		if (cart.style.display === "none") {
			cart.style.display = "block";
		} else {
			cart.style.display = "none";
		}
	});
});

document.addEventListener("DOMContentLoaded", (event) => {
	document.getElementById("closeCart").addEventListener("click", () => {
		const cart = document.getElementById("cart");
		cart.style.display = "none";
	});
});
