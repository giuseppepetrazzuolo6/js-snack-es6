/*
Snack 2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/
//array di oggetti di squadre da calcio
const team = [
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0

    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0

    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0

    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0

    },
    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0

    },
]
//funzione che genera numeri randomici
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


