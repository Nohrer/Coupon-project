document.addEventListener("DOMContentLoaded", function () {
  const close = document.getElementById("exit1");
  const modal = document.getElementById("modal");
  const hijab = document.getElementById("hijab");
  const newsletter = document.getElementById("openModal");
  const formNewsletter = document.getElementById("formNewsletter");

  //MODAL JAVASCRIPT
  function openModal() {
    modal.classList.add("flex");
    modal.classList.remove("hidden");
    hijab.classList.add("absolute");
    hijab.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }
  function closeModal() {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
    hijab.classList.remove("absolute");
    hijab.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  close.addEventListener("click", closeModal);
  hijab.addEventListener("click", closeModal);
  formNewsletter.addEventListener("submit", closeModal);
  newsletter.addEventListener("click", openModal);

  //MODAL PROMO CODE
});
