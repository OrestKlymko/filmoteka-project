!function(){var e={openModalBtn:document.querySelector(".team__modal"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector(".backdrop")};function d(){window.removeEventListener("keydown",o),e.modal.classList.add("is-hidden")}function o(e){"Escape"===e.code&&d()}e.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",o),e.modal.classList.remove("is-hidden")})),e.closeModalBtn.addEventListener("click",d),e.backdrop.addEventListener("click",(function(e){e.target===e.currentTarget&&d()}))}();
//# sourceMappingURL=library.5b6ca648.js.map