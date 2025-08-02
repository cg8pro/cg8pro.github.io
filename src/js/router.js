// Hash-based client-side router for local file usage

// Map hash paths to HTML fragment files (relative to project root)
const routes = {
    "": "pages/home.html",          // default (home) – optional
    "portfolio": "pages/portfolio.html",
    "artists": "pages/artists.html",
    "about": "pages/about.html",
    "contact": "pages/contact.html"
};

/**
 * Load the HTML fragment for a given path (hash sans '#') into #router-view.
 * If the file cannot be fetched (e.g. running from local file protocol), an error is shown.
 */
async function loadPage(path) {
    const cleanPath = path.replace(/#$/, "");
    const route = routes.hasOwnProperty(cleanPath) ? routes[cleanPath] : routes[""];
    // If we're on the home path (empty hash),保留首页原有内容，无需 fetch 片段
    if (cleanPath === "") {
        // restore cached home HTML
        const view = document.getElementById("router-view");
        if (view && HOME_HTML) {
            view.innerHTML = HOME_HTML;
            if (typeof setLanguage === "function") {
                const lang = localStorage.getItem("language") || "zh";
                setLanguage(lang);
            }
            if (typeof initSlider === "function") {
                initSlider();
            }
        }
        return;
    }
    try {
        const response = await fetch(route);
        if (!response.ok) throw new Error("Page not found");
        const html = await response.text();
        const view = document.getElementById("router-view");
        if (view) {
            view.innerHTML = html;
        }
        // After injecting, re-initialise language & other modules
        if (typeof setLanguage === "function") {
            const lang = localStorage.getItem("language") || "zh";
            setLanguage(lang);
        }
        if (typeof initSlider === "function") {
            initSlider();
        }
    } catch (err) {
        console.error("Failed to load page:", err);
        const view = document.getElementById("router-view");
        if (view) {
            view.innerHTML = "<p style='color:red;text-align:center'>Error loading page.</p>";
        }
    }
}

function updateActiveNav(path) {
    document.querySelectorAll(".navbar a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("data-path") === path);
    });
}

let HOME_HTML = "";

// Handle initial load
window.addEventListener("DOMContentLoaded", () => {
    const view = document.getElementById("router-view");
    if (view) {
        HOME_HTML = view.innerHTML; // cache original home markup
    }
    const initialPath = window.location.hash.replace(/^#|#$/g, "");
    loadPage(initialPath);
    updateActiveNav(initialPath);
});

// Handle hash changes (including clicks & back/forward)
window.addEventListener("hashchange", () => {
    const path = window.location.hash.replace(/^#|#$/g, "");
    loadPage(path);
    updateActiveNav(path.replace(/#$/, ""));
});
