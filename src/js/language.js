const translations = {
    zh: {
        // General
        logo_main: "长歌",
        logo_secondary: "小世界",
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
        login_tip_link: "立即注册"
    },
    en: {
        // General
        logo_main: "CG",
        logo_secondary: "Gallery",
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
        login_tip_link: "Sign Up"
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
    
    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update switcher indicator
    const switcher = document.querySelector('.lang-switcher');
    if (switcher) {
        switcher.setAttribute('data-active', lang);
    }
    
    // Save language preference
    localStorage.setItem('language', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Set initial language based on storage or default to 'zh'
    const savedLang = localStorage.getItem('language') || 'zh';
    setLanguage(savedLang);

    // Add click listeners to language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
});
