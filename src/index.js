import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calc from "./modules/calc";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import scrollBtn from "./modules/scroll";
import sendForm from "./modules/sendForm";

timer("28 february 2022");
menu();
modal();
calc(100);
tabs();
slider();
scrollBtn();
sendForm({
  formID: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formID: "form2",
});
sendForm({
  formID: "form3",
});
