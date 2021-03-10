let contestants = ["sean" , "carol", "rick" , "carl" , "neagan"]
let winners = []
while(winners.length < 3){
    let randomNumber = Math.floor(Math.random() * (contestants.length - 0) + 0)
    console.log(randomNumber)
    winner = contestants[randomNumber]
    winners.push(winner)
    contestants.splice(randomNumber, 1)
}

console.log(winners)

