(() => {
  const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      openModalBtnStep: document.querySelector("[data-modal-step-open]"),
      openModalBtnStart: document.querySelector("[data-modal-start-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtnStart.addEventListener("click", toggleModal);
    refs.openModalBtnStep.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-feed-open]"),
    closeModalBtn: document.querySelector("[data-modal-feed-close]"),
    modalfeed: document.querySelector("[data-modal-feed]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modalfeed.classList.toggle("is-hidden-f");
  }
})();

$(".team__list").slick({
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2
});
