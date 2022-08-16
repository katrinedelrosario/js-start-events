// input fields from form
const cowInput = document.getElementById ('cow');
const pigInput = document.getElementById ('pig');
const mooseInput = document.getElementById ('moose');

// validate buttons
const validatePig = document.getElementById ('evaluatePig');
const validateAll = document.getElementById ('evaluateForm');

// eventListeners
cowInput.addEventListener("keyup", evaluateCow);
validatePig.addEventListener("click", evaluatePig);
validateAll.addEventListener("click", evaluateAll);

// functions --------------------------------------------------
function evaluateCow () {
    if (cowInput.value == "ko") {
        // user feedback
        cowInput.style.backgroundColor = "green";
    } else {
        cowInput.style.backgroundColor = "red"
    }
}

function evaluatePig () {
    if (pigInput.value == "gris") {
        pigInput.style.backgroundColor = "green"
    } else {
        pigInput.style.backgroundColor = "red"
    }
}

function evaluateAll () {
    if (cowInput.value == "ko") {
        cowInput.style.backgroundColor = "green"
    } else {
        cowInput.style.backgroundColor = "red"
    }
    if (pigInput.value == "gris") {
        pigInput.style.backgroundColor = "green"
    } else {
        pigInput.style.backgroundColor = "red"
    }
    if (mooseInput.value == "elg") {
        mooseInput.style.backgroundColor = "green"
    } else {
        mooseInput.style.backgroundColor = "red"
    }
}

// functions --------------------------------------------------
