/* =====================================================
   WHERE YOUR EYES FIND ME
   MEMORY MATCHING GAME
===================================================== */


/* =====================================================
   PEOPLE
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
   GAME VARIABLES
===================================================== */

let firstCard = null;

let secondCard = null;

let locked = false;

let pairsFound = 0;

let moves = 0;


/* =====================================================
   ELEMENTS
===================================================== */

const intro =
    document.getElementById(
        "intro"
    );

const game =
    document.getElementById(
        "game"
    );

const startButton =
    document.getElementById(
        "startButton"
    );

const gameBoard =
    document.getElementById(
        "gameBoard"
    );

const pairCount =
    document.getElementById(
        "pairCount"
    );

const moveCount =
    document.getElementById(
        "moveCount"
    );

const matchPopup =
    document.getElementById(
        "matchPopup"
    );

const matchName =
    document.getElementById(
        "matchName"
    );

const matchMessage =
    document.getElementById(
        "matchMessage"
    );

const continueButton =
    document.getElementById(
        "continueButton"
    );

const completePopup =
    document.getElementById(
        "completePopup"
    );


/* =====================================================
   SHUFFLE
===================================================== */

function shuffle(array) {

    const result =
        [...array];


    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            result[i],
            result[j]
        ] =
        [
            result[j],
            result[i]
        ];

    }


    return result;

}


/* =====================================================
   CREATE CARDS
===================================================== */

function createCards() {

    const deck = [];


    people.forEach(
        function (person) {

            deck.push(person);

            deck.push(person);

        }
    );


    return shuffle(deck);

}


/* =====================================================
   START GAME
===================================================== */

startButton.addEventListener(
    "click",
    function () {

        intro.classList.add(
            "hidden"
        );

        game.classList.remove(
            "hidden"
        );

        createBoard();

    }
);


/* =====================================================
   CREATE BOARD
===================================================== */

function createBoard() {

    gameBoard.innerHTML = "";


    const deck =
        createCards();


    deck.forEach(
        function (person, index) {

            const card =
                document.createElement(
                    "button"
                );


            card.type =
                "button";


            card.classList.add(
                "memory-card"
            );


            card.dataset.id =
                person.id;


            /* -----------------------------------------
               INNER
            ----------------------------------------- */

            const inner =
                document.createElement(
                    "div"
                );


            inner.classList.add(
                "card-inner"
            );


            /* -----------------------------------------
               BACK
            ----------------------------------------- */

            const back =
                document.createElement(
                    "div"
                );


            back.classList.add(
                "card-back"
            );


            back.innerHTML =
                "<span>♡</span>";


            /* -----------------------------------------
               FRONT
            ----------------------------------------- */

            const front =
                document.createElement(
                    "div"
                );


            front.classList.add(
                "card-front"
            );


            const image =
                document.createElement(
                    "img"
                );


            image.src =
                person.image;


            image.alt =
                person.name;


            front.appendChild(
                image
            );


            inner.appendChild(
                back
            );

            inner.appendChild(
                front
            );


            card.appendChild(
                inner
            );


            /* -----------------------------------------
               CLICK
            ----------------------------------------- */

            card.addEventListener(
                "click",
                function () {

                    flipCard(
                        card
                    );

                }
            );


            gameBoard.appendChild(
                card
            );

        }
    );

}


/* =====================================================
   FLIP CARD
===================================================== */

function flipCard(card) {

    if (
        locked ||
        card.classList.contains(
            "flipped"
        ) ||
        card.classList.contains(
            "matched"
        )
    ) {

        return;

    }


    card.classList.add(
        "flipped"
    );


    if (!firstCard) {

        firstCard =
            card;

        return;

    }


    secondCard =
        card;


    moves++;

    moveCount.textContent =
        moves;


    checkCards();

}


/* =====================================================
   CHECK CARDS
===================================================== */

function checkCards() {

    locked = true;


    const firstId =
        firstCard.dataset.id;


    const secondId =
        secondCard.dataset.id;


    if (
        firstId === secondId
    ) {

        matchCards();

    } else {

        setTimeout(
            hideCards,
            900
        );

    }

}


/* =====================================================
   MATCH
===================================================== */

function matchCards() {

    firstCard.classList.add(
        "matched"
    );

    secondCard.classList.add(
        "matched"
    );


    pairsFound++;


    pairCount.textContent =
        pairsFound;


    const person =
        people.find(
            function (item) {

                return (
                    item.id ===
                    firstCard.dataset.id
                );

            }
        );


    matchName.textContent =
        person.name;


    matchMessage.textContent =
        person.message;


    matchPopup.classList.remove(
        "hidden"
    );

}


/* =====================================================
   CONTINUE
===================================================== */

continueButton.addEventListener(
    "click",
    function () {

        matchPopup.classList.add(
            "hidden"
        );


        resetTurn();


        if (
            pairsFound ===
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
);


/* =====================================================
   WRONG CARDS
===================================================== */

function hideCards() {

    firstCard.classList.remove(
        "flipped"
    );

    secondCard.classList.remove(
        "flipped"
    );


    resetTurn();

}


/* =====================================================
   RESET TURN
===================================================== */

function resetTurn() {

    firstCard = null;

    secondCard = null;

    locked = false;

}
