const addDots = () => {
  const sliderBlock = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");
  const dotsBlock = document.querySelector(".portfolio-dots");

  slides.forEach((slide, index) => {
    if (index <= slides.length - 1) {
      let dot = document.createElement("li");
      dot.className = "dot";
      dotsBlock.append(dot);
    } else {
      return;
    }
  });
};

export default addDots;
