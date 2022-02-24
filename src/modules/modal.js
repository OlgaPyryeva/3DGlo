const modal = () => {
  const modal = document.querySelector(".popup");
  const modalForm = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  let width = document.documentElement.clientWidth;

  window.addEventListener("resize", () => {
    width = document.documentElement.clientWidth;
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

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  let animationModal = () => {
    let start = Date.now(); // запомнить время начала
    let timer = setInterval(function () {
      let timePassed = Date.now() - start;

      if (timePassed >= 200) {
        clearInterval(timer);
        return;
      }
      showAnimation(timePassed);
    }, 20);

    function showAnimation(timePassed) {
      modalForm.style.top = timePassed / 20 + "%";
    }
  };
};

export default modal;
