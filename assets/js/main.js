function showPresence(){

    const presence =
    document.getElementById(
        "presence-screen"
    );

    presence.classList.remove(
        "hidden"
    );

    setTimeout(()=>{

        presence.classList.add(
            "hidden"
        );

        showLoading();

    },900);

}

function showLoading(){

    const loading =
    document.getElementById(
        "loading-screen"
    );

    loading.classList.remove(
        "hidden"
    );

    const progress =
    document.getElementById(
        "loading-progress"
    );

    let value = 0;

    const timer = setInterval(()=>{

        value++;

        progress.style.width =
        value + "%";

        if(value > 40){

            createPopup();
        }

        if(value >= 100){

            clearInterval(timer);

            loading.classList.add(
                "hidden"
            );

            blackout();

        }

    },60);

}

function blackout(){

    document
    .getElementById(
        "popup-container"
    ).innerHTML = "";

    setTimeout(()=>{

        document
        .getElementById(
            "city-screen"
        )
        .classList.remove(
            "hidden"
        );

    },3000);

}
document.getElementById("city-title")
.querySelector("a")
.addEventListener("click", function(e){

    e.preventDefault();

    const link = this;
    const href = link.href;
    const overlay = document.getElementById("transition-overlay");

    link.classList.add("connecting");
    overlay.classList.add("active");

    setTimeout(()=>{
        window.location.href = href;
    }, 600);

});
