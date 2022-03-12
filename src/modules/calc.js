import { animate } from "./helpers";

const calc = (price = 100) => {
  let calcInput = document.querySelectorAll("input.calc-item");
  const form1Start = document.querySelector("#form1");
  const form2End = document.querySelector("#form2");
  const formModal = document.querySelector(".popup-content");
  const userName = document.querySelectorAll("input[name='user_name']");
  const userMessage = document.querySelector("input[name='user_message']");
  const userEmail = document.querySelectorAll("input[name='user_email']");
  const userPhone = document.querySelectorAll("input[name='user_phone']");

  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");
  const forms = document.querySelectorAll("form");

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
    //total.textContent = totalValue;
    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        total.textContent = Math.floor(totalValue * progress);
      },
    });
    console.log(totalValue);
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
  calcInput.forEach((calcItem) => {
    calcItem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  });

  //В поля ввода type=text и placeholder="Ваше сообщение" позволить
  //ввод только кириллицы в любом регистре, дефиса и пробела.
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const userNameInput = form.querySelector("input[name='user_name']");

      if (/[^а-яА-Я\-\s]+/g.test(userNameInput.value)) {
        alert(
          "ошибка, разрешен ввод только кириллицы в любом регистре, дефиса и пробела."
        );
      }
    });
  });

  userName.forEach((name) => {
    name.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, "");
    });
  });

  userMessage.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, "");
  });

  //В поля ввода type=email позволить ввод только латиницы в любом регистре, цифры и
  //спецсимволы:  @  -  _  . ! ~ * '
  //(Собака , Дефис , Подчеркивание , Точка , Восклицательный знак , Тильда , Звездочка , Одинарная кавычка)
  userEmail.forEach((email) => {
    email.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\w\@\-\.\!\~\*\']+/, "");
    });
  });
  // В поля ввода type=tel позволить ввод только цифр, круглых скобок и дефис
  userPhone.forEach((phone) => {
    phone.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d\(\)\-]+/, "");
    });
  });
};

export default calc;
