var risposta = prompt('Per favore inserisci un numero piu di 10 e pari' );
console.log('Prima risposta:',risposta)

if (risposta > 10 && risposta % 10 == 0 ) {

    document.getElementById('risposta').innerHTML = 'Grazie. Questa è un numero pari.';
} else {
    
    let risposta = prompt('Scusa. Questa è un numero dispari.' );
    console.log('Seconda risposta:',risposta)
    if (risposta != 4) {

        document.getElementById('risposta').innerHTML = 'Mi spiace. Tentativi scaduti';
    } else {
        document.getElementById('risposta').innerHTML = 'Grazie. Questa è un numero pari.';
    }
}

var risposta_originale = risposta;
document.getElementById('risposta originale').innerHTML = risposta_originale;



