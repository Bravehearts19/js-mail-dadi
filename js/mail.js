const mailList = ["myaccount*1@gmail.com", "myaccount*2@gmail.com", "myaccount*3@gmail.com"];
const mailInput = prompt("Inserisci qui la mail con cui vuoi accedere");
let mailMatched = false;
let matchedMail = false;

for (let i=0; i<=2; i++) {
    let currentMail = mailList[i];
    let mailCurrent = mailList[i];
    
    if (mailInput === currentMail) {
        mailMatched = true;
    }

    if (mailInput === mailCurrent) {
        matchedMail = true;
    }
}

if (mailMatched === true) {
    alert("Hai eseguito l'accesso con il seguente account: \n" + mailInput)
} else {
    alert("La mail che hai inserito non è corretta. \nRiprova...")
}

if (matchedMail === true) {
    alert("Hai eseguito l'accesso con il seguente account: \n" + mailInput)
} else {
    alert("La mail che hai inserito non è corretta. \nRiprova...")
}