/* ==============================================
   GCSS DAYNIGHT TOGGLE
============================================== */

const html = document.documentElement;
const button = document.getElementById("dn-toggle");
const icon = document.getElementById("dn-icon");

const ICON_SIZE = 30;
const ICON_CENTER_X = 20;
const ICON_CENTER_Y = 20;
const ICON_BASE_RADIUS = 19.5;
const ICON_OUTER_RING_RADIUS = 18.75;
const ICON_OUTER_RING_STROKE = 2.5;
const ICON_HALF_ARC_RADIUS = 20;

const iconHalfPath = `M${ICON_CENTER_X},${ICON_CENTER_Y} L${ICON_CENTER_X},0 A${ICON_HALF_ARC_RADIUS},${ICON_HALF_ARC_RADIUS} 0 0,1 ${ICON_CENTER_X},40 Z`;

function getIconColors() {
  const styles = getComputedStyle(html);

  return {
    light: styles.getPropertyValue("--dn-icon-light").trim() || "#ffffff",
    dark: styles.getPropertyValue("--dn-icon-dark").trim() || "#000000",
    sun: styles.getPropertyValue("--dn-icon-sun").trim() || "#ffd400",
  };
}

function moonSVG(colors) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${ICON_SIZE}px"
            height="${ICON_SIZE}px" viewBox="0 0 64 64">
 <circle
              cx="${ICON_CENTER_X}"
              cy="${ICON_CENTER_Y}"
              r="${ICON_BASE_RADIUS}"
              fill="${colors.light}"
            />
            <path d="${iconHalfPath}" fill="${colors.dark}" />
            <circle cx="31" cy="${ICON_CENTER_Y}" r="6" fill="${colors.sun}" />
            <circle cx="34" cy="${ICON_CENTER_Y}" r="5" fill="${colors.dark}" />

            <!-- Outer black ring drawn last to match sun icon border thickness -->
            <circle
              cx="${ICON_CENTER_X}"
              cy="${ICON_CENTER_Y}"
              r="${ICON_OUTER_RING_RADIUS}"
              fill="none"
              stroke="${colors.dark}"
              stroke-width="${ICON_OUTER_RING_STROKE}"
            />
</svg>
`;
}

function sunSVG(colors) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${ICON_SIZE}px"
            height="${ICON_SIZE}px" viewBox="0 0 64 64">
   <circle
              cx="${ICON_CENTER_X}"
              cy="${ICON_CENTER_Y}"
              r="${ICON_BASE_RADIUS}"
              fill="${colors.light}"
            />

            <!-- Black semicircle -->
            <path d="${iconHalfPath}" fill="${colors.dark}" />

            <!-- Yellow sun -->
            <circle cx="11" cy="${ICON_CENTER_Y}" r="6" fill="${colors.sun}" />

            <!-- Outer white ring drawn last so it is not hidden by the black half -->
            <circle
              cx="${ICON_CENTER_X}"
              cy="${ICON_CENTER_Y}"
              r="${ICON_OUTER_RING_RADIUS}"
              fill="none"
              stroke="${colors.light}"
              stroke-width="${ICON_OUTER_RING_STROKE}"
            />
</svg>
`;
}

function setTheme(theme) {
  if (!button || !icon) {
    return;
  }

  html.dataset.theme = theme;
  if (document.body) {
    document.body.dataset.theme = theme;
  }
  localStorage.setItem("gcss-theme", theme);

  const colors = getIconColors();

  if (theme === "dark") {
    icon.innerHTML = sunSVG(colors);
    button.setAttribute("aria-label", "Switch to light mode");
    button.setAttribute("title", "Switch to light mode");
  } else {
    icon.innerHTML = moonSVG(colors);
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
