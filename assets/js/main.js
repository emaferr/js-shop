//Definisco il mio prodotto

/**
 * CBD WEED
 * @param {string} nome nome del prodotto
 * @param {string} descrizione descrizione del prodotto
 * @param {number} prezzo prezzo del prodotto
 * @param {string} immagine percoro immagine del prodotto
 * @param {string} categoria la categoria del prodotto
 */
class Prodotto {

    constructor(nome , descrizione, percentualeCbd, prezzo, immagine, categoria){
        this.nome = nome ;
        this.descrizione = descrizione ;
        this.percentualeCbd = percentualeCbd
        this.prezzo = prezzo ;
        this.immagine = immagine ;
        this.categoria = categoria ;
    }

}

// Tipologie di weed

const blueberry = new Prodotto('Blueberry', 'Weed sativa al gusto di cedro', 23.5, 8.99, './assets/img/Blueberry CBD.jpeg', 'Sativa') ;
const bubblegum = new Prodotto('Bubblegum', 'Weed sativa dal gusto intenso', 19, 5.99, './assets/img/Bubblegum CBD.jpeg', 'Sativa') ;
const somango = new Prodotto('Somango', 'Weed sativa dal gusto fruttato', 21.5, 6.99, './assets/img/Somango CBD.jpeg', 'Sativa') ;
const sour_widow = new Prodotto('Sour Widow', 'Weed indica al gusto di pino', 24, 7.99, './assets/img/Sour Widow CBD.jpeg', 'Indica') ;
const purple_haze = new Prodotto('Purple Haze', 'Weed indica al gusto di mirtilli', 20.5, 7.49, './assets/img/Purple Haze CBD.jpeg', 'Indica') ;
const strawberry = new Prodotto('Strawberry Kush', 'Weed indica al gusto di fragola', 22, 8.49, './assets/img/Strawberry Kush CBD.jpeg', 'Indica') ;

// Creo il mio array di prodotti

const weed = [
    blueberry,
    bubblegum,
    somango,
    sour_widow,
    purple_haze,
    strawberry,
]

console.log(weed);

// Creo una funzione per la stampa dei prodotti

/**
 * ### Stampa prodotto dinamica
 * @param {array} lista_prodotti - array contenente la lista prodotti
 * @param {variabile} elementoDOM - document.get(elemento html da richiamare)
 * @returns {array} - la funzione restituisce la stampa dei prodotti con il layout contenuto nel DOM
 */
function stampaProdotto (lista_prodotti, elementoDOM) {

    lista_prodotti.forEach( prodotto => {

        const {nome, descrizione, percentualeCbd, prezzo, immagine, categoria} = prodotto ;
       
        const markup =  `<div class="card mx-3 my-3 shadow" style="width: 22rem; border-radius: 1rem;">
                            <img src="${prodotto.immagine}" style="height: 286px; border-radius: 1rem;" class="card-img-top" alt="">
                            <div class="card-body">
                                <div class="text-center">
                                    <hr>
                                    <h5 class="card-title fw-bold">${prodotto.nome}</h5>
                                    <p class="card-text"><i style="color: #55ba02bb;"  class="fas fa-cannabis"></i> ${prodotto.descrizione}</p>
                                    <span>${prodotto.percentualeCbd}% CBD</span>
                                    <hr>
                                    <span id="prezzo" class="d-block mb-3 text-white">${prodotto.prezzo} €</span>
                                </div>
                                <button class="btn btn-success acquista" data-nome-prodotto="${prodotto.nome}" data-prezzo-prodotto="${prodotto.prezzo}">Acquista</button>
                            </div>
                        </div>
                        `
        elementoDOM.insertAdjacentHTML('beforeend', markup );

    })
}

const singoloProdotto = document.getElementById('prodotti'); 

stampaProdotto(weed, singoloProdotto);

// Implemento carrello

let carrello = [];
let totaleCarrello = 0;

document.querySelectorAll('.acquista').forEach(button => {
    button.addEventListener('click' , function () {

        const nome = this.getAttribute("data-nome-prodotto");
        let prezzo = this.getAttribute("data-prezzo-prodotto");
        const prodottoCarrello = {nome, prezzo};

        carrello.push(prodottoCarrello);

        totaleCarrello += Number(prezzo);

        const markupCarrello =  `<div class="my-1">${nome} ${prezzo} €</div>`

        document.getElementById("wrap_carrello").insertAdjacentHTML('afterbegin' , markupCarrello);
        document.querySelector(".totale").innerHTML = "Totale " + (new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR'}).format(totaleCarrello));

    } )
})



