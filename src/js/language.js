const translations = {
    zh: {
        // General
        logo_main: "ChangGeReal",
        logo_secondary: "",
        nav_home: "首页",
        nav_portfolio: "作品集",
        nav_artists: "艺术家",
        nav_about: "关于",
        nav_contact: "联系我们",

        // Home Page
        info_author_prefix: "@",
        info_author_name: "艺术作者",
        info_tag_masterpiece: "杰作",
        info_tag_scenery: "风景",
        info_title: "宁静的黎明",
        btn_watch: "观看",
        btn_preview: "预览",

        // Login Page
        login_title: "欢迎回来",
        login_username_label: "用户名",
        login_password_label: "密码",
        login_button: "登录",
        login_tip: "还没有账户？",
        login_tip_link: "立即注册",
        // Portfolio Page
        portfolio_title: "作品集",
        portfolio_desc: "这里将展示精选艺术作品。敬请期待！",
        // Artists Page
        artists_title: "艺术家",
        artists_desc: "这里将介绍艺术家及其简介。敬请期待！",
        // About Page
        about_title: "关于我们",
        about_desc: "这里将介绍我们的网站愿景和团队故事。敬请期待！",
        // Contact Page
        contact_title: "联系我们",
        contact_desc: "您可以通过以下方式与我们取得联系。敬请期待！"
    },
    en: {
        // General
        logo_main: "ChangGeReal",
        logo_secondary: "",
        nav_home: "Home",
        nav_portfolio: "Portfolio",
        nav_artists: "Artists",
        nav_about: "About",
        nav_contact: "Contact",

        // Home Page
        info_author_prefix: "By ",
        info_author_name: "Artist Name",
        info_tag_masterpiece: "Masterpiece",
        info_tag_scenery: "Scenery",
        info_title: "A Quiet Dawn",
        btn_watch: "Watch",
        btn_preview: "Preview",

        // Login Page
        login_title: "Welcome Back",
        login_username_label: "Username",
        login_password_label: "Password",
        login_button: "Login",
        login_tip: "Don't have an account?",
        login_tip_link: "Sign Up",
        // Portfolio Page
        portfolio_title: "Portfolio",
        portfolio_desc: "Selected artworks will be showcased here. Stay tuned!",
        // Artists Page
        artists_title: "Artists",
        artists_desc: "Here we'll introduce our artists and their bios. Stay tuned!",
        // About Page
        about_title: "About Us",
        about_desc: "Learn about our vision and team story here. Stay tuned!",
        // Contact Page
        contact_title: "Contact",
        contact_desc: "Reach out to us through the following channels. Stay tuned!"
    }
};

function setLanguage(lang) {
    // Update all elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Save language preference
    localStorage.setItem('language', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle-btn');

    const updateButtonState = (lang) => {
        if (langToggleBtn) {
            langToggleBtn.setAttribute('data-lang', lang);
            langToggleBtn.textContent = lang === 'zh' ? '中' : 'EN';
        }
    };

    // Set initial language
    const savedLang = localStorage.getItem('language') || 'zh';
    setLanguage(savedLang);
    updateButtonState(savedLang);

    // Add click listener to the new toggle button
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const currentLang = langToggleBtn.getAttribute('data-lang');
            const newLang = currentLang === 'zh' ? 'en' : 'zh';
            
            setLanguage(newLang);
            updateButtonState(newLang);
        });
    }
});
