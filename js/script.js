let risposta = prompt('Per favore inserisci un numero piu di 10 e pari' );
console.log('Prima risposta:',risposta)

if (risposta > 9 && risposta % 10 == 0 ) {

    document.getElementById('risposta').innerHTML = 'Grazie. Questo numero  è un numero pari.';
} else {
    
    risposta = prompt('Scusa. Questo numero è un numero dispari o e meno di 10. Inserisci un altro' );
    console.log('Seconda risposta:',risposta)
    if (risposta < 10 || risposta % 10 != 0) {

        document.getElementById('risposta').innerHTML = 'Mi spiace. Tentativi scaduti';
    } else {
        document.getElementById('risposta').innerHTML = 'Grazie. Questo nummero  è un numero pari.';
    }
}
document.getElementById('risposta modificata').innerHTML = risposta;

var risposta_originale = risposta;
document.getElementById('risposta originale').innerHTML = risposta_originale;




