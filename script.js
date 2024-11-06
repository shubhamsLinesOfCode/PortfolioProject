// Check for the user's saved theme on page load
/* if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Function to toggle theme and save it in localStorage
function toggleTheme() {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
} */

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
// Attach toggleTheme to a button click event
//   document.getElementById("theme-toggle-button").addEventListener("click", toggleTheme);
const sideMenu = document.querySelector("#sideMenu");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}
function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}



