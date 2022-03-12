const scrollBtn = () => {
  const scrollBtn = document.querySelector('a[href="#service-block"]');
  const serviceBlock = document.getElementById("service-block");

  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    serviceBlock.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  });
};

export default scrollBtn;
