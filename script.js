/* =====================================================
   WHERE YOUR EYES FIND ME
   MEMORY MATCHING GAME
===================================================== */


/* =====================================================
   CHARACTERS
===================================================== */

const people = [

    {
        id: "arum",
        name: "Arum",
        image: "Arum.png",
        message:
            "TERIMAKASIHHH SUDAH MENEMUKANKU 💛 SEHAT-SEHAT YAAA NAEL, VAL SAMA KAK TAKA!!!"
    },

    {
        id: "amora",
        name: "Amora",
        image: "amora.png",
        message:
            "EH KETEMU AKU?! 😭 Makasih udah nyariin aku. Ayo cari yang lain, jangan berhenti di aku ajaa~"
    },

    {
        id: "arga",
        name: "Arga",
        image: "arga.png",
        message:
            "WOI KOK BISA NEMUIN GUE?! 😭 Yaudah, satu ketemu. Sekarang lanjut cari yang lainnya!"
    },

    {
        id: "atlas",
        name: "Atlas",
        image: "atlas.png",
        message:
            "Udah belanja di palamart belum? 😭 Oh iya, makasih udah nemuin gue!"
    },

    {
        id: "ayes",
        name: "Ayes",
        image: "ayes.png",
        message:
            "Huft. Memang hidup kadang kidding. 😔 Tapi setidaknya kamu berhasil nemuin aku."
    },

    {
        id: "hana",
        name: "Hana",
        image: "hana.png",
        message:
            "Hiiii! ♡ Akhirnya ketemu juga aku. Sekarang lanjut cari yang lain yaa!"
    },

    {
        id: "jemi",
        name: "Jemi",
        image: "jemi.png",
        message:
            "Anjay kok bisa temuin gue? Gas cari yang lain, see you Taka, Nael, Val!"
    },

    {
        id: "jevan",
        name: "Jevan",
        image: "jevan.png",
        message:
            "Lah ketemu juga gue 😭 Kirain masih aman. Yaudah, lanjut cari yang lainnya!"
    },

    {
        id: "jivan",
        name: "Jivan",
        image: "jivan.png",
        message:
            "Lahhh ketemu juga akhirnya 😭 Gue kira bakal lolos dari pencarian. Gas cari yang lain!"
    },

    {
        id: "josh",
        name: "Josh",
        image: "josh.png",
        message:
            "YAHHH ketahuan 😭 Padahal gue udah diem banget. Oke deh, lanjut cari yang lain sana!"
    },

    {
        id: "juan",
        name: "Juan",
        image: "juan.png",
        message:
            "HAHAHA ketemu juga gue! 😭 Mantap. Tapi jangan seneng dulu, masih banyak yang belum ketemu!"
    },

    {
        id: "kartein",
        name: "Kartein",
        image: "kartein.png",
        message:
            "Oalah, ternyata mata kamu masih jeli juga 😌 Sekarang coba cari siapa lagi yang bersembunyi."
    },

    {
        id: "kyungie",
        name: "Kyungie",
        image: "kyungie.png",
        message:
            "EHHH?! Kok bisa nemuin aku?! 😭 Oke oke, aku kalah. Good luck cari yang lainnya! ♡"
    },

    {
        id: "leon",
        name: "Leon",
        image: "leon.png",
        message:
            "Oh, you found me. Not bad. 😏 Sekarang lanjut, gue penasaran siapa yang bakal kamu temuin berikutnya."
    },

    {
        id: "rendy",
        name: "Rendy",
        image: "rendy.png",
        message:
            "Yah ketemu gue 😭 Kirain masih aman. Yaudah, lanjutkan misi kamu!"
    },

    {
        id: "sana",
        name: "Sana",
        image: "sana.png",
        message:
            "Hehehe akhirnya ketemu juga! ♡ Jangan berhenti di sini yaa, masih banyak yang ngumpet."
    },

    {
        id: "sanly",
        name: "Sanly",
        image: "sanly.png",
        message:
            "Cieee nemu aku~ 👀 Sekarang lanjut ya, jangan sampai ada yang masih sembunyi!"
    },

    {
        id: "vel",
        name: "Vel",
        image: "vel.png",
        message:
            "Dor! Cieeee ketemu aku~ tebak siapa?? Vel di sini—! Ayo cari member yang lain ♡"
    }

];


/* =====================================================
   GAME STATE
===================================================== */

let cards = [];

let firstCard = null;

let secondCard = null;

let lockBoard = false;

let matchedPairs = 0;

let moves = 0;


/* =====================================================
   ELEMENTS
===================================================== */

const gameBoard =
    document.getElementById("gameBoard");

const pairCount =
    document.getElementById("pairCount");

const moveCount =
    document.getElementById("moveCount");

const matchPopup =
    document.getElementById("matchPopup");

const matchName =
    document.getElementById("matchName");

const matchMessage =
    document.getElementById("matchMessage");

const continueButton =
    document.getElementById("continueButton");

const completePopup =
    document.getElementById("completePopup");


/* =====================================================
   CREATE DECK
===================================================== */

function createDeck() {

    const deck = [];

    people.forEach(function (person) {

        deck.push({
            ...person,
            cardId: person.id + "-1"
        });

        deck.push({
            ...person,
            cardId: person.id + "-2"
        });

    });

    return shuffle(deck);
}


/* =====================================================
   SHUFFLE
===================================================== */

function shuffle(array) {

    const shuffled = [...array];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            shuffled[i],
            shuffled[j]
        ] =
        [
            shuffled[j],
            shuffled[i]
        ];

    }

    return shuffled;
}


/* =====================================================
   BUILD BOARD
===================================================== */

function buildBoard() {

    gameBoard.innerHTML = "";

    cards = createDeck();

    cards.forEach(function (person) {

        const card =
            document.createElement("button");

        card.type = "button";

        card.classList.add("memory-card");

        card.dataset.id =
            person.id;

        card.dataset.cardId =
            person.cardId;


        /* CARD BACK */

        const back =
            document.createElement("div");

        back.classList.add("card-back");

        back.innerHTML =
            "<span>♡</span>";


        /* CARD FRONT */

        const front =
            document.createElement("div");

        front.classList.add("card-front");


        const image =
            document.createElement("img");

        image.src =
            person.image;

        image.alt =
            person.name;


        front.appendChild(image);

        card.appendChild(back);

        card.appendChild(front);


        /* CLICK */

        card.addEventListener(
            "click",
            function () {

                flipCard(
                    card,
                    person
                );

            }
        );


        gameBoard.appendChild(card);

    });

}


/* =====================================================
   FLIP CARD
===================================================== */

function flipCard(
    card,
    person
) {

    if (
        lockBoard ||
        card.classList.contains("flipped") ||
        card.classList.contains("matched")
    ) {

        return;

    }


    card.classList.add("flipped");


    if (!firstCard) {

        firstCard = {
            card: card,
            person: person
        };

        return;

    }


    secondCard = {
        card: card,
        person: person
    };


    moves++;

    moveCount.textContent =
        moves;


    checkMatch();

}


/* =====================================================
   CHECK MATCH
===================================================== */

function checkMatch() {

    lockBoard = true;


    const isMatch =
        firstCard.person.id ===
        secondCard.person.id;


    if (isMatch) {

        handleMatch();

    } else {

        setTimeout(
            function () {

                unflipCards();

            },
            900
        );

    }

}


/* =====================================================
   MATCH
===================================================== */

function handleMatch() {

    firstCard.card.classList.add(
        "matched"
    );

    secondCard.card.classList.add(
        "matched"
    );


    matchedPairs++;


    pairCount.textContent =
        matchedPairs;


    const person =
        firstCard.person;


    matchName.textContent =
        person.name;

    matchMessage.textContent =
        person.message;


    matchPopup.classList.remove(
        "hidden"
    );

}


/* =====================================================
   CONTINUE AFTER MATCH
===================================================== */

function continueAfterMatch() {

    matchPopup.classList.add(
        "hidden"
    );


    resetTurn();


    lockBoard = false;


    if (
        matchedPairs ===
        people.length
    ) {

        setTimeout(
            function () {

                completePopup.classList.remove(
                    "hidden"
                );

            },
            400
        );

    }

}


/* =====================================================
   WRONG MATCH
===================================================== */

function unflipCards() {

    firstCard.card.classList.remove(
        "flipped"
    );

    secondCard.card.classList.remove(
        "flipped"
    );


    resetTurn();

    lockBoard = false;

}


/* =====================================================
   RESET TURN
===================================================== */

function resetTurn() {

    firstCard = null;

    secondCard = null;

}


/* =====================================================
   CONTINUE BUTTON
===================================================== */

continueButton.addEventListener(
    "click",
    continueAfterMatch
);


/* =====================================================
   START
===================================================== */

buildBoard();
