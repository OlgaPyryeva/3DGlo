const calc = (price = 100) => {
  let calcInput = document.querySelectorAll("input.calc-item");
  const form1Start = document.querySelector("#form1");
  const form2End = document.querySelector("#form2");
  const formModal = document.querySelector(".popup-content");
  const formInputType = document.querySelectorAll("input[type='text']");
  const formInput = document.querySelector(
    "input[placeholder = 'Ваше сообщение']"
  );
  const emailInput = document.querySelectorAll("input[type='email']");
  const telInput = document.querySelectorAll("input[type='tel']");

  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let countCalcValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      countCalcValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }
    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * countCalcValue * calcDayValue;
    } else {
      totalValue = 0;
    }
    total.textContent = totalValue;
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });

  //   валидация ввода в калькуляторе только цифровых значений в поля input
  // calcInput.forEach((calcItem) => {
  //   calcItem.addEventListener("input", (e) => {
  //     e.target.value = e.target.value.replace(/\D+/, "");
  //   });
  // });

  //В поля ввода type=text и placeholder="Ваше сообщение" позволить
  //ввод только кириллицы в любом регистре, дефиса и пробела.
  // formInputType.forEach((formItem) => {
  //   formItem.addEventListener("input", (e) => {
  //     e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, "");
  //   });
  // });
  // formInput.addEventListener("input", (e) => {
  //   e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, "");
  // });

  //В поля ввода type=email позволить ввод только латиницы в любом регистре, цифры и
  //спецсимволы:  @  -  _  . ! ~ * '
  //(Собака , Дефис , Подчеркивание , Точка , Восклицательный знак , Тильда , Звездочка , Одинарная кавычка)
  // emailInput.forEach((emailItem) => {
  //   emailItem.addEventListener("input", (e) => {
  //     e.target.value = e.target.value.replace(/[^\w\@\-\.\!\~\*\']+/, "");
  //   });
  // });
  //В поля ввода type=tel позволить ввод только цифр, круглых скобок и дефис
  // telInput.forEach((telItem) => {
  //   telItem.addEventListener("input", (e) => {
  //     e.target.value = e.target.value.replace(/[^\d\(\)\-]+/, "");
  //   });
  // });
};

export default calc;
