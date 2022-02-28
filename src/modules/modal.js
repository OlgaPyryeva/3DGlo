const modal = () => {
  const modal = document.querySelector(".popup");
  const modalForm = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");

  let width = document.documentElement.clientWidth;

  window.addEventListener("resize", () => {
    width = document.documentElement.clientWidth;
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (width >= 768) {
        animationModal();
        modalForm.style.top = "";
      }
    });
  });

  let animationModal = () => {
    let start = Date.now(); // запомнить время начала
    let timer = setInterval(function () {
      let timePassed = Date.now() - start;

      if (timePassed >= 500) {
        clearInterval(timer);
        return;
      }
      showAnimation(timePassed);
      showModal(timePassed);
    }, 20);

    // уменьшение опасити от 1 до 0
    // let animationModalReturn = () => {
    //   let start = Date.now(); // запомнить время начала
    //   let timer = setInterval(function () {
    //     let timePassed = Date.now() - start;

    //     if (timePassed >= 500) {
    //       clearInterval(timer);
    //       return;
    //     }
    //     showAnimation(timePassed);
    //     showModal(timePassed);
    //   }, -20);

    function showAnimation(timePassed) {
      modalForm.style.top = timePassed / 50 + "%";
    }
    function showModal(timePassed) {
      modalForm.style.opacity = timePassed / 500;
    }
  };
};

export default modal;
