/* =========================================
   FINDUS
========================================= */


let foundCount = 0;

const totalSpecial = 18;

let currentSpecial = null;


/* =========================================
   ENTER ROOM
========================================= */

function enterRoom() {

    const intro =
        document.getElementById("intro");

    const room =
        document.getElementById("room");


    intro.classList.add("hide");


    setTimeout(() => {

        room.classList.add("show");

    }, 500);

}


/* =========================================
   DECOY
========================================= */

function clickDecoy() {

    const popup =
        document.getElementById("decoyPopup");

    popup.classList.add("show");

}


function closeDecoy() {

    const popup =
        document.getElementById("decoyPopup");

    popup.classList.remove("show");

}


/* =========================================
   SPECIAL PERSON
========================================= */

function findSpecial(person) {

    // Jangan hitung dua kali

    if (
        person.classList.contains("found")
    ) {
        return;
    }


    // Simpan orang yang sedang ditemukan

    currentSpecial = person;


    // Tambah counter

    foundCount++;


    document.getElementById(
        "foundCount"
    ).textContent = foundCount;


    // Tampilkan popup

    document
        .getElementById("specialPopup")
        .classList
        .add("show");

}


/* =========================================
   CLOSE SPECIAL POPUP
========================================= */

function closeSpecial() {

    document
        .getElementById("specialPopup")
        .classList
        .remove("show");


    // Ubah orang yang baru ditemukan
    // menjadi black & white

    if (currentSpecial) {

        currentSpecial.classList.add("found");

        currentSpecial = null;

    }


    // Kalau semua 18 sudah ditemukan

    if (foundCount === totalSpecial) {

        setTimeout(() => {

            document
                .getElementById("completePopup")
                .classList
                .add("show");

        }, 500);

    }

}


/* =========================================
   CLOSE POPUP DENGAN KLIK DI LUAR
========================================= */

function closeOutside(event) {

    if (
        event.target === event.currentTarget
    ) {

        event.currentTarget
            .classList
            .remove("show");

    }

}
