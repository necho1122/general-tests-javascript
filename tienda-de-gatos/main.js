import './style.css';
import gatos from './gatos.json';

document.addEventListener('DOMContentLoaded', () => {
	getGatos();
});

const gatoIds = [];

function getGatos() {
	// Obtener todos los botones "Get Cat"
	const buttons = document.querySelectorAll('li[data-id]');

	// Agregar un controlador de eventos "click" a cada botón
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			// Obtener el ID del gato del atributo "data-id" del botón
			const gatoId = parseInt(button.getAttribute('data-id'));
			console.log(`ID del gato: ${gatoId}`);
			// Aquí puedes hacer lo que quieras con el ID del gato
			gatoIds.push(gatoId);

      let objetosEncontrados = gatos.gatos.filter(function(item) {
        return gatoIds.includes(item.id);
      });
      
      // Verifica si se encontraron objetos
      if (objetosEncontrados.length > 0) {
        // Itera sobre los objetos encontrados y accede a sus propiedades
        objetosEncontrados.forEach(function(objeto) {
          const cart = document.querySelector('#cart');
          cart.innerHTML +=
          `<h5>Articulo: ${objeto.titulo}</h5>`;
          /*console.log("ID:", objeto.id);
          console.log("Título:", objeto.titulo);
          console.log("Descripción:", objeto.descripcion);
          console.log("Imagen:", objeto.imagen);
          console.log("---------------------");*/
        });
      } else {
        console.log("Ningún objeto encontrado con los IDs:", gatoIds);
      }

      return objetosEncontrados;

		});
	});
}

document.querySelector('#app').innerHTML = `
<h1>Tienda de gatos</h1>
  <div id="cart"></div>
  <div id="my-test"></div>
`;

const element = document.querySelector('#my-test');

element.innerHTML = `
    <div>
        <h2>Gatos</h2>
        <ul>
            ${gatos.gatos
							.map(
								(gato) =>
									`<li data-id="${gato.id}">
                  <h3>${gato.titulo}:</h3>
                  <p>${gato.descripcion}</p>
                  <img src='${gato.imagen}'>
                  <button onclick="${
										getGatos()
									}" type="button">Get Cat</button>
                  </li>`
							)
							.join('')}
        </ul>
    </div>
`;