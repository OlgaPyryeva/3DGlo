const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const menuItems = document.querySelectorAll("menu>ul>li>a");

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

  menuItems.forEach((menuItem) => {
    const hrefElem = menuItem.getAttribute("href");
    const blockMenu = document.querySelector(`${hrefElem}`);

    menuItem.addEventListener("click", (e) => {
      blockMenu.scrollIntoView({ alignToTop: true, behavior: "smooth" });
    });
  });
};

export default menu;
