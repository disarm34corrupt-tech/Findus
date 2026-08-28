function enterRoom() {
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".room").style.display = "block";
}


function wrongPerson() {

    document.getElementById("wrongPopup").style.display = "flex";

}


function closeWrong() {

    document.getElementById("wrongPopup").style.display = "none";

}


function foundArum() {

    document.getElementById("foundPopup").style.display = "flex";

}
