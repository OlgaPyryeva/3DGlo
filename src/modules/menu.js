const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);

  menu.addEventListener("click", (e) => {
    if (
      e.target.closest(".active-menu") ||
      e.target.classList.contains("close-btn")
    ) {
      handleMenu();
    }
  });

  //попытка выйти на блок сайта, по ссылке и сделать плавный скролл
  // menuItems.forEach((menuItem) => {
  //   let hrefElem = menuItem.getAttribute("href");
  //   let blockMenu = document.getElementById(`${hrefElem}`);
  //   blockMenu.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  //   console.log(blockMenu);
  // });
};

export default menu;
