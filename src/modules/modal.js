import { animate } from "./helpers";
import sendForm from "./sendForm";

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
      if (width >= 768) {
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalForm.style.opacity = 1 - progress;
            modalForm.style.top = 10 - progress * 10 + "%";
            if (modalForm.style.opacity < 0.1) {
              modal.style.display = "none";
            }
          },
        });
      } else {
        modal.style.display = "none";
      }
    }
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (width >= 768) {
        modal.style.display = "block";

        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalForm.style.top = progress * 10 + "%";
            modalForm.style.opacity = progress;
          },
        });
      } else {
        modal.style.display = "block";
        modalForm.style.top = 10 + "%";
        modalForm.style.opacity = 1;
      }
    });
  });
};

export default modal;
