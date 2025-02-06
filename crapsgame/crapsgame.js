
// HTML ELEMENT IDs    

const crapsUsernameInput = "craps-username-input"
const crapsRegistrationPane = "craps-registration-pane"
const crapsMainSection = "craps-main-section"


function registerCrapsplayer () {
	let crapsUsername = document.getElementById("craps-username-input").value

    alert("Got:" + crapsUsername)
    removeRegistrationPane()
    showMainGameSection()
}

function removeRegistrationPane () {
    document.getElementById("craps-registration-pane").style.display = "none"
}



function showMainGameSection () {
    document.getElementById("craps-main-section").style.display = "block"

}