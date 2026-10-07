const spaceship =
    document.getElementById("spaceship");

const launchButton =
    document.getElementById("launchButton");

const setupScreen =
    document.getElementById("setupScreen");

const bottomMessage =
    document.getElementById("bottomMessage");

const flightMessage =
    document.getElementById("flightMessage");

const birthdaySurprise =
    document.getElementById("birthdaySurprise");


const crew = [

    {
        input: "ryanPhoto",
        image: "ryanImage",
        name: "Little Bigger Ryan"
    },

    {
        input: "myPhoto",
        image: "myImage",
        name: "Little Annie"
    },

    {
        input: "dinoPhoto",
        image: "dinoImage",
        name: "Baby Dino"
    }

];


const photoURLs = {};


/* ============================== */
/* PHOTO UPLOAD */
/* ============================== */

crew.forEach(member => {

    const input =
        document.getElementById(
            member.input
        );

    const image =
        document.getElementById(
            member.image
        );


    input.addEventListener(
        "change",
        function () {

            const file =
                input.files[0];


            if (!file) {
                return;
            }


            if (
                !file.type.startsWith("image/")
            ) {

                alert(
                    "Please choose an image file."
                );

                input.value = "";

                return;
            }


            if (
                photoURLs[
                    member.input
                ]
            ) {

                URL.revokeObjectURL(
                    photoURLs[
                        member.input
                    ]
                );

            }


            photoURLs[
                member.input
            ] =
                URL.createObjectURL(
                    file
                );


            image.src =
                photoURLs[
                    member.input
                ];

        }
    );

});


/* ============================== */
/* LAUNCH */
/* ============================== */

launchButton.addEventListener(
    "click",
    function () {


        for (
            const member
            of crew
        ) {

            const input =
                document.getElementById(
                    member.input
                );


            if (
                !input.files.length
            ) {

                alert(
                    "Please upload Little Bigger Ryan, Little Annie, and Baby Dino's photos first!"
                );

                return;

            }

        }


        spaceship.classList.remove(
            "fly"
        );

        birthdaySurprise.classList.remove(
            "show-surprise"
        );

        flightMessage.classList.remove(
            "show-flight-message"
        );


        void spaceship.offsetWidth;


        setupScreen.style.display =
            "none";


        launchButton.disabled =
            true;


        bottomMessage.textContent =
            "Little Bigger Ryan, Little Annie, and Baby Dino are flying to the Moon! 🚀";


        flightMessage.classList.add(
            "show-flight-message"
        );


        spaceship.classList.add(
            "fly"
        );

    }
);


/* ============================== */
/* ARRIVAL */
/* ============================== */

spaceship.addEventListener(
    "animationend",
    function (event) {


        if (
            event.animationName
            !==
            "flyToMoon"
        ) {

            return;

        }


        flightMessage.classList.remove(
            "show-flight-message"
        );


        bottomMessage.textContent =
            "Little Bigger Ryan, Little Annie, and Baby Dino made it to the Moon! 🌙❤️";


        setTimeout(
            function () {

                birthdaySurprise.classList.add(
                    "show-surprise"
                );

            },
            700
        );

    }
);