import Swiper, { Autoplay } from "swiper";

const swiper = () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    modules: [Autoplay],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });
};

export default swiper;
