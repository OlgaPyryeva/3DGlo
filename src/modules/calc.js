const calc = () => {
  let calcInput = document.querySelectorAll("input.calc-item");
  const form1Begin = document.querySelector("#form1");
  const form2End = document.querySelector("#form2");
  const formModal = document.querySelector(".popup-content");

  //   валидация ввода в калькуляторе только цифровых значений в поля input
  calcInput.forEach((calcItem) => {
    calcItem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  });
};

export default calc;
