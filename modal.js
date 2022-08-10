
'use strict';

let modalButton = document.querySelector(".modal__button");
let modal = document.querySelector(".modal");

modalButton.onclick = () => modal.style.display = "block";

let okButton = document.querySelector(".okay__btn");
okButton.onclick = () => modal.style.display = "none";

let cancelButton = document.querySelector(".cancel__btn");
cancelButton.onclick = () => modal.style.display = "none";

let xButton = document.querySelector(".close__btn");
xButton.onclick = () =>  modal.style.display = "none";









