import { gatos } from './gatos.js';

export function gatos () {

    const element = document.querySelector('#my-test');
    const setGatos = (gatos) => {
        element.innerHTML = `
            <div>
                <h1>Gatos</h1>
                <ul>
                    ${gatos.map(gato => `<li>${gato.gatos.titulo}</li>`).join('')}
                </ul>
            </div>
        `
    }
    setGatos(gatos);

}