function createPopup(){

    const popup = document.createElement("div");

    popup.classList.add("popup");

    popup.innerText =
        popupMessages[
            Math.floor(
                Math.random() * popupMessages.length
            )
        ];

    popup.style.left =
        Math.random() * 90 + "%";

    popup.style.top =
        Math.random() * 90 + "%";

    document
        .getElementById("popup-container")
        .appendChild(popup);

    setTimeout(()=>{

        popup.remove();

    },1000);

}
