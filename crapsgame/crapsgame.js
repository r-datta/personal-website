// Craps main data 
let crapsUsername = ""

// craps game setting
const startingMoney = 1000
const startingRounds = 0

// HTML ELEMENT IDs    

const crapsUsernameInput = "craps-username-input"
const crapsRegistrationPane = "craps-registration-pane"
const crapsMainSection = "craps-main-section"
const crapsStatsUsername = "craps-stats-username"
const crapsStatsMoney = "craps-stats-money"
const crapsStatsRounds = "craps-stats-rounds"


function registerCrapsplayer () {
	crapsUsername = document.getElementById("craps-username-input").value

    let firstCharisDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
    


    // Username validation check
    if (crapsUsername.length < 5 || firstCharisDigitRegex.test(crapsUsername)) {
        alert("Username must be at least 5 characters long, alphanumeric and underscore only, no spaces and cannot start with a number")

    } else {

    removeRegistrationPane()
    showMainGameSection()
    setupFirstRound ()
    } 
}

function removeRegistrationPane () {
    document.getElementById("craps-registration-pane").style.display = "none"
}



function showMainGameSection () {
    document.getElementById("craps-main-section").style.display = "block"

}

function setupFirstRound () {
    document.getElementById(crapsStatsUsername).innerHTML = crapsUsername
    setMoney(startingMoney)
    setRounds (startingRounds)
}

function setMoney (money) {
    document.getElementById(crapsStatsMoney).innerHTML = money
}

function setRounds (rounds) {
    document.getElementById(crapsStatsRounds).innerHTML = rounds
}