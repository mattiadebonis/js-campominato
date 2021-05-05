// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

//VARIABILI
var numeriComputer = [];
var numeriUtente = [];
var gameOver = false;

var n = 100;
var x = 16;

//  FUNZIONI 
//genera un numero casuale 
function randomNumber(max){
    var numero = Math.floor(Math.random() * max)+1;
    return numero;
}

//controlla se un elemento è nell'array
function isNumberInArray(number, array){
    var found = false
    for(var i=0; i<=array.length; i++){
        if (array[i] == number){
            return found = true
        }
    }
    return found;
}
//  /FUNZIONI 

//seleziona la difficoltà
var difficulty =parseInt(prompt("Inserisci la difficoltà. [0: facile - 1:media - 2: difficile"))

switch (difficulty) {
    case '0':
        n = 100;
    case '1':
        n = 80;
    case '2':
        n = 50;
}

// genera x numeri casuali unici e inseriscili in un array
for (var i=0; i<x; i++){
    var newNumberComputer = randomNumber(n)
    if(!isNumberInArray(newNumberComputer,numeriComputer)){
        numeriComputer.push(newNumberComputer);
    }
}

//chiedi n - x volte di inserire un numero da 1 a n diverso dai precedenti
var z = n-x; 
var a = 0;
while(a<z){
    var newNumberUser = parseInt(prompt("Inserisci un nuovo numero da 1 a 100"));

    if(!isNumberInArray(newNumberUser, numeriUtente) && newNumberUser <=100 && newNumberUser >=1 ){
        numeriUtente.push(newNumberUser); 
        // Se il numero è presente nella lista dei numeri generati, la partita termina
        if(isNumberInArray(newNumberUser, numeriComputer) || a==z){
            alert("Hai perso");
            break;
        }else{
            a++; 
        }
    }    
}

alert("Il tuo punteggio è " + a);
