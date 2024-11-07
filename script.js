function setThemeFromPreference() {
  const isDarkMode =
    localStorage.theme === "dark" ||
    (!localStorage.theme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.classList.toggle("dark", isDarkMode);
}

// Function to toggle theme manually
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
}

// Listen for changes in OS-level theme preference
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    localStorage.removeItem("theme"); // Reset to use OS preference
    setThemeFromPreference(); // Apply the new preference
  });

// Apply the initial theme on page load
setThemeFromPreference();
/*  Attach toggleTheme to a button click event
  document.getElementById("theme-toggle-button").addEventListener("click", toggleTheme); */
const sideMenu = document.querySelector("#sideMenu");
function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";

  gsap.set("#sideMenu li a", { opacity: 0 });
  gsap.to("#sideMenu li a", {
    display: "block",
    x: 48,
    opacity: 1,
    duration: 1.05,
    delay: 0.75,
    stagger: 0.3,
  });
}
function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
  gsap.set("#sideMenu li a", { display: "inline", x: 0 });
}

// Show button after scrolling down a bit
window.addEventListener("scroll", () => {
  const backToTopButton = document.getElementById("backToTop");
  if (window.scrollY > 600) {
    // Show when scrolled 600px
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll to top smoothly on button click
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
