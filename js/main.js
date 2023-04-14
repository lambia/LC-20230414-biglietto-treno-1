//Differenza tra Number e parseInt
//parseInt scarta eventuali caratteri non numerici DOPO il numero (ma si spaccherebbe con x123)
//Number si spacca se ci sono caratteri non numeri PRIMA O DOPO (si spacca con x123 e con 123x) + accetta valori decimali

let etaUtente = Number( prompt("Inserisci la tua età") );
let distance = parseInt( prompt("Inserisci la distanza chilometrica") );

if( isNaN(distance) ) {
    alert("La distanza non è un numero. Impossibile procedere.");
} else {

    let prezzo = distance * 0.21;
    let messaggio = "";
    
    console.log("Prezzo di base", prezzo);
    
    if( isNaN(etaUtente) ) {
        alert("L'età è errata. Non verranno applicate scontistiche");
    } else {

        if(etaUtente < 18) {
            // console.log("L'utente è under 18");
            // prezzo = prezzo - (prezzo / 100) * 20 ;
            // prezzo -= (prezzo / 100) * 20 ;
            // prezzo -= (prezzo * 0.2);
            // prezzo = prezzo * 0.8;
            prezzo *= 0.8;
        
            messaggio = `Hai diritto allo sconto 'under 18'.`;
        
        } else if (etaUtente > 65) {
            // console.log("L'utente è over 65");
            prezzo *= 0.55;
        
            messaggio = `Hai diritto allo sconto 'senior'.`;
        
        } 
        /*
        else {
            messaggio = ``;
        }
        */
    }

    
    // messaggio = messaggio + ` Il prezzo del biglietto è: ${prezzo} €`;
    messaggio += ` Il prezzo del biglietto è: ${ prezzo.toFixed(2) } €`;
    
    document.getElementById("risultato").innerText = messaggio;
    
    console.log("Prezzo finale", prezzo);

}
