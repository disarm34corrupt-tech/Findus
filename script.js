/* =========================================
   FINDUS
   18 SPECIAL PEOPLE + 11 DECOYS
========================================= */

let foundCount = 0;

const totalSpecial = 18;


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

    // Kalau sudah ditemukan, jangan dihitung lagi
    if (person.classList.contains("found")) {
        return;
    }


    // Simpan orang yang baru ditemukan
    person.dataset.pendingFound = "true";


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


    // Cari Special Person yang baru ditemukan
    const pendingPerson =
        document.querySelector(
            '.special[data-pending-found="true"]'
        );


    // Ubah menjadi B&W
    if (pendingPerson) {

        pendingPerson.classList.remove("pending-found");

        pendingPerson.classList.add("found");

        pendingPerson.removeAttribute(
            "data-pending-found"
        );
    }


    // Kalau sudah menemukan 18 orang
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
