const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const toast = document.getElementById("toast");

menuBtn.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuBtn.classList.toggle("active", open);
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuBtn.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".link-card").forEach(link => {
  link.addEventListener("click", () => {
    toast.textContent = `Opening ${link.querySelector("strong")?.textContent || "link"}...`;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1200);
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.remove("open");
    menuBtn.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});
