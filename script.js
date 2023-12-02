document.addEventListener("DOMContentLoaded", function () {
  const close = document.getElementById("exit1");
  const close2 = document.getElementById("exit2");
  const modal = document.getElementById("modal");
  const modal2 = document.getElementById("modal2");
  const coupon = document.getElementById("showCoupon");
  const hijab = document.getElementById("hijab");
  const newsletter = document.getElementById("openModal");
  const formNewsletter = document.getElementById("formNewsletter");

  const textToCopy = document.getElementById("textCopy");

  const copyButton = document.getElementById("copy");

  copyButton.addEventListener("click", function () {
    const range = document.createRange();
    range.selectNode(textToCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Clear the selection
    window.getSelection().removeAllRanges();

    // Optionally, provide some feedback to the user
    alert("Text copied to clipboard!");
  });

  //MODAL1 JAVASCRIPT
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

  //MODAL 2

  function openModal2() {
    modal2.classList.add("flex");
    modal2.classList.remove("hidden");
    hijab.classList.add("absolute");
    hijab.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  function closeModal2() {
    modal2.classList.remove("flex");
    modal2.classList.add("hidden");
    hijab.classList.remove("absolute");
    hijab.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  close2.addEventListener("click", closeModal2);

  coupon.addEventListener("click", openModal2);
  hijab.addEventListener("click", closeModal2);

  //MODAL PROMO CODE
});
