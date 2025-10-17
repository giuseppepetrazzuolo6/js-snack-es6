/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

//creo l'array di oggetti
//all'interno delgi oggetti inserisco:
//nome e peso della bicicletta (proprietà)
const biciclette = [
    {
        nome: 'Canyon Ultimate CF 7',
        peso: 8.7
    },
    {
        nome: 'Specialized S Works Tarmac SL8',
        peso: 6.6
    },
    {
        nome: 'Cube Litening AIR C:68X Pro',
        peso: 7.1
    },
    {
        nome: 'Trek Émonda SLR 9 Disc',
        peso: 6.1
    },
    {
        nome: 'De Rosa King',
        peso: 6.5
    }
];
console.log(biciclette);

//dichiaro una variabile let a cui assegno il primo indice dell'array di bici
//la variabile mi occorre per poter fare la comparazione nel ciclo for
let biciLeggera = biciclette[0]
console.log(biciLeggera);

//creo un ciclo for che scorre l'arrray di oggetti:
for (let i = 1; i < biciclette.length; i++) {
    //se il peso della bici in posizione [i] è minore della bici leggera
    if (biciclette[i].peso < biciLeggera.peso) {
        //allora aggiorno la bici leggera
        biciLeggera = biciclette[i]
        console.log(biciLeggera);
    }
}
//imposto delle consizioni per selezionare solo la bici con il peso minore