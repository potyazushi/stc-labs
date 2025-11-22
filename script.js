// ===== Hamburger / Drawer =====
const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("drawer");
const backdrop = document.getElementById("drawerBackdrop");
const drawerLinks = document.querySelectorAll(".drawer-link");

function openDrawer() {
  drawer.classList.add("open");
  backdrop.classList.add("show");
  hamburger.classList.add("is-open");
  hamburger.setAttribute("aria-expanded", "true");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  drawer.classList.remove("open");
  backdrop.classList.remove("show");
  hamburger.classList.remove("is-open");
  hamburger.setAttribute("aria-expanded", "false");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", () => {
  const isOpen = drawer.classList.contains("open");
  isOpen ? closeDrawer() : openDrawer();
});

backdrop.addEventListener("click", closeDrawer);
drawerLinks.forEach(link => link.addEventListener("click", closeDrawer));

// ===== Optional: highlight active section in desktop nav =====
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) current = sec.getAttribute("id");
  });

  navAnchors.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) a.classList.add("active");
  });
});
