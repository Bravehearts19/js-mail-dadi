const playerDie = Math.ceil(Math.random() * 6);
const computerDie = Math.ceil(Math.random() * 6);

console.log(playerDie);
console.log(computerDie);

if (playerDie > computerDie) {
    alert("Il giocatore ha vinto facendo " + playerDie + " contro " + computerDie + " del computer")
} else if (playerDie < computerDie) {
    alert("Il giocatore ha perso facendo " + playerDie + " contro " + computerDie + " del computer")
} else {
    alert("Il giocatore ed il computer hanno pareggiato, facendo entrambi " + playerDie)
}