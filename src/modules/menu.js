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

  menuItems.forEach((menuItem) => {
    const hrefElem = menuItem.getAttribute("href");
    const blockMenu = document.querySelector(`${hrefElem}`);

    menuItem.addEventListener("click", (e) => {
      e.preventDefault();
      blockMenu.scrollIntoView({ alignToTop: true, behavior: "smooth" });
    });
  });
};

export default menu;
