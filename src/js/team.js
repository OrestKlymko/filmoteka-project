(() => {
    const refs = {
      openModalBtn: document.querySelector(".team__modal"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      backdrop: document.querySelector(".backdrop")
    };
  
    refs.openModalBtn.addEventListener("click", onOpenModal);
    refs.closeModalBtn.addEventListener("click", onCloseModal);
    refs.backdrop.addEventListener("click", onBackdropClick);
  
    function onOpenModal() {
        window.addEventListener("keydown", onEsc)
      refs.modal.classList.remove("is-hidden");
    }

    function onCloseModal() {
        window.removeEventListener("keydown", onEsc)
        refs.modal.classList.add("is-hidden");
    }
function onEsc(e){
    if(e.code === "Escape"){onCloseModal()}
}

    function onBackdropClick(e) {
        if(e.target === e.currentTarget){
           onCloseModal()
        // refs.modal.classList.add("is-hidden");
    }
    }
  })();