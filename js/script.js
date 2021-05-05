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

var n = 0;
var x = 0;

// ------------------------ FUNZIONI ---------------------------

//funzione randomNumber che genera un numero casuale 
function randomNumber(max){
    var numero = Math.floor(Math.random() * max)+1;
    return numero;
}

//funzione isInArray che controlla se l'elemente è nell'array
function isNumberInArray(number, array){
    var found = false
    for(var i=0; i<=array.length; i++){
        if (array[i] == number){
            return found = true
        }
    }
    return found;
}

// ------------------------ /FUNZIONI ---------------------------

x=16; // numero di volte che l'utente deve inserire
n= 100; // numero massimo dei singoli numeri generati

// ciclo for che genera x numeri casuali (x = 16) 
for (var i=0; i<x; i++){
    var newNumberComputer = randomNumber(n)
    if(!isNumberInArray(newNumberComputer,numeriComputer)){
        numeriComputer.push(newNumberComputer);
    }
}


//chiedo all'utente n - x volte di inserire un numero da 1 a n 
var z = n-x; 
var a = 0;
while(a<z && gameOver==false){
    var newNumberUser = parseInt(prompt("Inserisci un nuovo numero"));
    if(!isNumberInArray(newNumberUser, numeriUtente)){
        numeriUtente.push(newNumberUser); 
        if(isNumberInArray(newNumberUser, numeriComputer) || a==z){
            alert("Hai perso");
            gameOver == true;
        }else{
            a++; 
        }
    }    
}

console.log(a);

