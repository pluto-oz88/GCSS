/* ==============================================
   GCSS THEME TOGGLE
============================================== */

const html = document.documentElement;
const button = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

const moonSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="24" fill="#000000"/>
    <circle cx="32" cy="32" r="16" fill="#ffd54d"/>
    <circle cx="42" cy="32" r="14" fill="#000000"/>
</svg>
`;

const sunSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="24" fill="#87CEFA"/>
    <circle cx="32" cy="32" r="10" fill="#FFD54D"/>
    <g stroke="#FFD54D" stroke-width="3" stroke-linecap="round">
        <line x1="32" y1="11" x2="32" y2="20"/>
        <line x1="32" y1="44" x2="32" y2="53"/>
        <line x1="11" y1="32" x2="20" y2="32"/>
        <line x1="44" y1="32" x2="53" y2="32"/>
        <line x1="17" y1="17" x2="23" y2="23"/>
        <line x1="41" y1="23" x2="47" y2="17"/>
        <line x1="17" y1="47" x2="23" y2="41"/>
        <line x1="41" y1="41" x2="47" y2="47"/>
    </g>
</svg>
`;

function setTheme(theme) {
  html.dataset.theme = theme;
  if (document.body) {
    document.body.dataset.theme = theme;
  }
  localStorage.setItem("gcss-theme", theme);

  if (theme === "dark") {
    icon.innerHTML = sunSVG;
    button.setAttribute("aria-label", "Switch to light mode");
    button.setAttribute("title", "Switch to light mode");
  } else {
    icon.innerHTML = moonSVG;
    button.setAttribute("aria-label", "Switch to dark mode");
    button.setAttribute("title", "Switch to dark mode");
  }
}

if (button && icon) {
  const savedTheme = localStorage.getItem("gcss-theme") || "light";

  setTheme(savedTheme);

  button.addEventListener("click", () => {
    const currentTheme = html.dataset.theme || "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    setTheme(nextTheme);
  });
}
