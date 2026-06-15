const bootTrigger =
document.getElementById("boot-trigger");

bootTrigger.addEventListener(
    "click",
    startSequence
);

function startSequence(){

    document
    .getElementById("boot-screen")
    .classList.add("hidden");

    showPresence();

}
