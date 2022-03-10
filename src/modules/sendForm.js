const sendForm = ({ formID, someElem = [] }) => {
  const form = document.getElementById(formID);
  const statusBlock = document.createElement("div");
  const loadText = "Зарузка...";
  const errorText = "Ошибка ...";
  const successText = "Спасибо! Наш менеджер с вами свяжется.";

  const validate = (list) => {
    let success = true;

    // list.forEach((input) => {
    //   if (!input.classList.contains("success")) {
    //     success = false;
    //   }
    // });
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  const submitForm = () => {
    const formElements = document.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    console.log();
    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("не правильно заполнены данные");
    }
  };

  try {
    if (!form) {
      throw new Error("верните форму на место");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
