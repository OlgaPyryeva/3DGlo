const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", handleMenu)
  );

  //попытка выйти на блок сайта, по ссылке и сделать плавный скролл
  // menuItems.forEach((menuItem) => {
  //   let hrefElem = menuItem.getAttribute("href");
  //   let blockMenu = document.getElementById(`${hrefElem}`);
  //   blockMenu.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  //   console.log(blockMenu);
  // });
};

export default menu;
