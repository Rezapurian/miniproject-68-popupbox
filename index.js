let popupBtn = document.querySelector(".btn");
let popup = document.querySelector(".popup");


if (popupBtn) {
    var popupWrapper = document.createElement("div");
    popupWrapper.className = "popup-wrapper";
    document.body.prepend(popupWrapper);
}

popupBtn.addEventListener("click", e => {
    popup.classList.add("show");
    popupWrapper.classList.add("show");

    let popupCloseFunc = e => {
        popup.classList.remove("show");
        popupWrapper.classList.remove("show");
}

    let buttonOk = document.querySelector(".popup button");
    buttonOk.addEventListener("click", popupCloseFunc);
    popupWrapper.addEventListener("click", popupCloseFunc);
});