const scrollBtn = () => {
  const scrollBtn = document.querySelector('a[href="#service-block"]');

  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollBtn.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  });
};

export default scrollBtn;
