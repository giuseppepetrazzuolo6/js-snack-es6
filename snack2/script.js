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
//for per assegnare numeri randomici alle proprietà degli oggetti
for (let i = 0; i < team.length; i++) {
    team[i].falliSubiti = randomNumber(5, 30)
    team[i].puntiFatti = randomNumber(1, 80)
}
//console.log('team', team)
//array vuoto
const workedArray = []
//ciclo for per scorrere gli elementi di team da inserire dentro l'array vuoto
for (let i = 0; i < team.length; i++) {
    //array con elementi
    workedArray.push(`${team[i].nome} - falli subiti: ${team[i].falliSubiti}`)
    //array di oggetti di cui proprietà sono 'nome' e 'falli subiti'
    //workedArray.push({ nome: team[i].nome, falliSubiti: team[i].falliSubiti })
}
console.log(workedArray);

