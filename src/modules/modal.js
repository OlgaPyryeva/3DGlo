const modal = () => {
  const modal = document.querySelector(".popup");
  const modalForm = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");

  console.log(modalForm);

  let width = document.documentElement.clientWidth;

  window.addEventListener("resize", () => {
    width = document.documentElement.clientWidth;
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      animationModal(false);
      // modal.style.display = "none";
    }
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (width >= 768) {
        modalForm.style.opacity = 0;
        modalForm.style.top = "";
        modal.style.display = "block";
        animationModal(true);
      } else {
        modal.style.display = "block";
      }
    });
  });

  let animationModal = (showType) => {
    let start = Date.now(); // запомнить время начала
    let timer = setInterval(function () {
      let timePassed = Date.now() - start;

      if (timePassed >= 500) {
        clearInterval(timer);
        return;
      }
      if (showType) {
        showAnimation(timePassed);
        showModal(timePassed);
      } else {
        hideModal(timePassed);
      }
    }, 20);

    function showAnimation(timePassed) {
      modalForm.style.top = timePassed / 50 + "%";
    }
    function showModal(timePassed) {
      modalForm.style.opacity = timePassed / 500;
    }
    function hideModal(timePassed) {
      modalForm.style.opacity = 1 - timePassed / 500;
      if (modalForm.style.opacity < 0.1) {
        modal.style.display = "none";
      }
    }
  };
};

export default modal;
