/* =========================================
   FINDUS
   18 SPECIAL PEOPLE + 11 DECOYS
========================================= */

let foundCount = 0;

const totalSpecial = 18;

let currentSpecial = null;


/* =========================================
   ENTER THE ROOM
========================================= */

function enterRoom() {

    const intro = document.getElementById("intro");
    const room = document.getElementById("room");

    intro.classList.add("hide");

    setTimeout(() => {
        room.classList.add("show");
    }, 500);
}


/* =========================================
   DECOY / PENGECEOH
========================================= */

function clickDecoy() {

    const popup = document.getElementById("decoyPopup");

    popup.classList.add("show");
}


function closeDecoy() {

    const popup = document.getElementById("decoyPopup");

    popup.classList.remove("show");
}


/* =========================================
   SPECIAL PERSON
========================================= */

function findSpecial(person) {

    // Jangan bisa diklik lagi kalau sudah ditemukan
    if (person.classList.contains("found")) {
        return;
    }

    // Simpan Special Person yang sedang ditemukan
    currentSpecial = person;

    // Tambahkan counter
    foundCount++;

    document.getElementById("foundCount").textContent = foundCount;

    // Tampilkan popup
    const popup = document.getElementById("specialPopup");

    popup.classList.add("show");
}


/* =========================================
   CLOSE SPECIAL POPUP
========================================= */

function closeSpecial() {

    const popup = document.getElementById("specialPopup");

    popup.classList.remove("show");


    // Ubah Special Person menjadi B&W
    if (currentSpecial) {

        currentSpecial.classList.add("found");

        currentSpecial = null;
    }


    // Kalau semua 18 sudah ditemukan
    if (foundCount === totalSpecial) {

        setTimeout(() => {

            document
                .getElementById("completePopup")
                .classList.add("show");

        }, 500);
    }
}


/* =========================================
   CLOSE POPUP DENGAN KLIK DI LUAR
========================================= */

function closeOutside(event) {

    if (event.target === event.currentTarget) {

        event.currentTarget.classList.remove("show");

    }
}
