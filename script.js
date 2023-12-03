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
    modal.classList.remove("opacity-0", "pointer-events-none");
    hijab.classList.remove("opacity-0", "pointer-events-none");
    document.body.classList.add("overflow-hidden");
  }
  function closeModal() {
    modal.classList.add("opacity-0", "pointer-events-none");
    hijab.classList.add("opacity-0", "pointer-events-none");
    document.body.classList.remove("overflow-hidden");
  }

  close.addEventListener("click", closeModal);
  hijab.addEventListener("click", closeModal);
  formNewsletter.addEventListener("submit", closeModal);
  newsletter.addEventListener("click", openModal);

  //MODAL 2

  function openModal2() {
    modal2.classList.remove("pointer-events-none", "opacity-0");
    hijab.classList.remove("opacity-0", "pointer-events-none");
    document.body.classList.add("overflow-hidden");
  }

  function closeModal2() {
    modal2.classList.add("pointer-events-none", "opacity-0");
    hijab.classList.add("opacity-0", "pointer-events-none");

    document.body.classList.remove("overflow-hidden");
  }

  close2.addEventListener("click", closeModal2);

  coupon.addEventListener("click", openModal2);
  hijab.addEventListener("click", closeModal2);

  //CARASOUL
  const imageList = document.getElementById("imageList");
  const leftButton = document.getElementById("leftButton");
  const rightButton = document.getElementById("rightButton");

  const itemsPerPage = 6;

  let currentIndex = 0;

  function updateCarousel() {
    const start = currentIndex * (100 / itemsPerPage);
    const end = start + 100;
    const visibleItems = Array.from(imageList.children).slice(
      currentIndex,
      currentIndex + itemsPerPage
    );

    // Hide all items
    Array.from(imageList.children).forEach((item) =>
      item.classList.add("hidden")
    );

    // Show only visible items
    visibleItems.forEach((item) => item.classList.remove("hidden"));
  }

  function showNext() {
    currentIndex += 1;
    if (currentIndex > imageList.children.length - itemsPerPage) {
      currentIndex = 0;
    }
    updateCarousel();
  }

  function showPrevious() {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = imageList.children.length - itemsPerPage;
    }
    updateCarousel();
  }

  // Initial setup
  updateCarousel();

  // Event listeners for navigation buttons
  leftButton.addEventListener("click", showPrevious);
  rightButton.addEventListener("click", showNext);
});
