
// HTML ELEMENT IDs    

const crapsUsernameInput = "craps-username-input"
const crapsRegistrationPane = "craps-registration-pane"
const crapsMainSection = "craps-main-section"


function registerCrapsplayer () {
	let crapsUsername = document.getElementById("craps-username-input").value

    let firstCharisDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
    


    // Username validation check
    if (crapsUsername.length < 5 || firstCharisDigitRegex.test(crapsUsername)) {
        alert("Username must be at least 5 characters long, alphanumeric and underscore only, no spaces and cannot start with a number")

    } else {

    removeRegistrationPane()
    showMainGameSection()
    } 
}

function removeRegistrationPane () {
    document.getElementById("craps-registration-pane").style.display = "none"
}



function showMainGameSection () {
    document.getElementById("craps-main-section").style.display = "block"

}