const modal = () => {
  const modal = document.querySelector(".popup");
  const modalForm = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      modalForm.style.top = 0 + "%";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  //   console.log(modalForm);
};

export default modal;
