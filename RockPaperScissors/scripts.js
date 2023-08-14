let Score1 = 0
let Score2 = 0
function guy(User) {
    let Number = Math.floor(Math.random() * 3) + 1;
    let other = Number
    if (other == "1") {other = "Rock"}
    if (other == "2") {other = "Paper"}
    if (other == "3") {other = "Scissors"}
    document.getElementById("Bot").innerHTML = "Bot Chose: " + other
    let thing = User
    if (thing == "1") {thing = "Rock"}
    if (thing == "2") {thing = "Paper"}
    if (thing == "3") {thing = "Scissors"}
    if (User == "1" || User == "2" || User == "3"){
        document.getElementById("User").innerText = "You Chose: " + thing
        document.getElementById("Input").value = ""
        if (User == Number) {
        document.getElementById("Outcome").innerHTML = "You Tied"
        }
        else if (User >= Number) {
        if (User == "3" && Number == "1"){
            document.getElementById("Outcome").innerHTML = "You Lost"
        }
        else {
            document.getElementById("Outcome").innerHTML = "You Won"
        }
        }
        else if (User <= Number) {
        if (User == "1" && Number == "3") {
            document.getElementById("Outcome").innerHTML = "You Won"
        }
        else {
            document.getElementById("Outcome").innerHTML = "You Lost"
        }
        }
    }
    let O = document.getElementById("Outcome").innerHTML
    if (O == "You Won") {
        Score1++
        document.getElementById("Score1").innerHTML = "Your Score: " + Score1
    }
    else if (O == "You Lost") {
        Score2++
        document.getElementById("Score2").innerHTML = "Bot Score: " + Score2
    }
}
