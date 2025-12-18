const mongo = require("mongodb");

function render() {
    const header = document.getElementById("content");

    const p = document.createElement("p");
    p.textContent = "Hola";

    header.appendChild(p);


    const buttonContiner = document.getElementById("btn-container");
    const panelTextPane = document.getElementById("text-container");
    panelTextPane.classList.add("text-panel");

    renderJSTextPane(panelTextPane);
    renderButtons(buttonContiner);


}


function renderJSTextPane(father) {
    const p = document.createElement("p");
    p.textContent = "Welcome to Freedy's Machine";
    father.appendChild(p);
}

/**
 * @param {*} father 
 * Esta funcion renderiza botones en el elemento padre
 */
function renderButtons(father) {
    let contador = 0;
    while (contador < 10) {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-light", "buttons");
        button.textContent = contador;
        father.appendChild(button);
        contador++;
    }

    const cero = document.createElement("button");
    cero.classList.add("btn", "btn-light", "buttons");
    cero.textContent = "0";
    father.appendChild(cero);
}




function connectDB() {
    const uri = "mongodb://atlas-sql-68f79ae67843783f865451f9-tj30ny.g.query.mongodb.net/VendingMachine?ssl=true&authSource=admin";
    const client = new mongo.MongoClient(uri);
    client.connect();
}







render();
