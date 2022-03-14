import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calc from "./modules/calc";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import scrollBtn from "./modules/scroll";
import sendForm from "./modules/sendForm";
import swiper from "./modules/swiper";

timer("1 april 2022");
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
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formID: "form3",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
swiper();
