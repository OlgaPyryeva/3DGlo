const calc = () => {
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

  //   валидация ввода в калькуляторе только цифровых значений в поля input
  calcInput.forEach((calcItem) => {
    calcItem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  });

  //В поля ввода type=text и placeholder="Ваше сообщение" позволить
  //ввод только кириллицы в любом регистре, дефиса и пробела.
  formInputType.forEach((formItem) => {
    formItem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, "");
    });
  });
  formInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, "");
  });

  //В поля ввода type=email позволить ввод только латиницы в любом регистре, цифры и
  //спецсимволы:  @  -  _  . ! ~ * '
  //(Собака , Дефис , Подчеркивание , Точка , Восклицательный знак , Тильда , Звездочка , Одинарная кавычка)
  emailInput.forEach((emailItem) => {
    emailItem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\w\@\-\.\!\~\*\']+/, "");
    });
  });
  //В поля ввода type=tel позволить ввод только цифр, круглых скобок и дефис
  telInput.forEach((telItem) => {
    telItem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d\(\)\-]+/, "");
    });
  });
};

export default calc;
