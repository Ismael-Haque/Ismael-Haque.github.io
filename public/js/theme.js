
(() => {
    const toggle = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");
    const label = document.getElementById("theme-label");

    if (!toggle || !icon || !label) return;

    function updateButton(theme) {
        const isDark = theme === "dark";

        icon.textContent = isDark ? "☀" : "☾";
        label.textContent = isDark ? "Light mode" : "Dark mode";

        toggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light mode" : "Switch to dark mode"
        );
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        updateButton(theme);
    }

    toggle.addEventListener("click", () => {
        const currentTheme =
            document.documentElement.getAttribute("data-theme") || "light";

        const newTheme = currentTheme === "dark" ? "light" : "dark";

        applyTheme(newTheme);

        try {
            localStorage.setItem("site-theme", newTheme);
        } catch (error) {
            // Theme switching still works if storage is unavailable.
        }
    });

    const currentTheme =
        document.documentElement.getAttribute("data-theme") || "light";

    applyTheme(currentTheme);
})();
