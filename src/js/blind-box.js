document.addEventListener('DOMContentLoaded', () => {
    // --- 方案A: 极简霓虹胶囊 ---
    const capsuleBtn = document.getElementById('theme-btn-capsule');
    const capsulePopup = document.getElementById('capsule-info-popup');
    if (capsuleBtn) {
        capsuleBtn.addEventListener('click', () => {
            const newTheme = getRandomTheme();
            applyTheme(newTheme);

            capsuleBtn.classList.add('active');
            setTimeout(() => capsuleBtn.classList.remove('active'), 500);

            updateThemeInfo(newTheme, capsulePopup);
            capsulePopup.classList.add('show');
            setTimeout(() => capsulePopup.classList.remove('show'), 3000);
        });
    }

    // --- 方案B: 转盘盲盒 ---
    const spinnerBtn = document.getElementById('theme-btn-spinner');
    if (spinnerBtn) {
        spinnerBtn.addEventListener('click', () => {
            if (spinnerBtn.classList.contains('spinning')) return;

            spinnerBtn.classList.add('spinning');
            setTimeout(() => {
                const newTheme = getRandomTheme();
                applyTheme(newTheme);
                spinnerBtn.classList.remove('spinning');
                showToast(newTheme); 
            }, 1500);
        });
    }

    // --- 方案C: 卡片翻转 ---
    const cardBtn = document.getElementById('theme-btn-card');
    if (cardBtn) {
        cardBtn.addEventListener('click', () => {
            if (cardBtn.classList.contains('flipped')) {
                cardBtn.classList.remove('flipped');
            } else {
                const newTheme = getRandomTheme();
                applyTheme(newTheme);
                updateCardBack(newTheme);
                cardBtn.classList.add('flipped');
            }
        });
    }

    function updateCardBack(theme) {
        const themeData = themes[theme];
        const cardBack = cardBtn.querySelector('.card-back');
        cardBack.querySelector('.info-title').textContent = themeData.name;
        const paletteContainer = cardBack.querySelector('.info-palette-mini');
        paletteContainer.innerHTML = '';
        themeData.palette.forEach(color => {
            const swatch = document.createElement('div');
            swatch.className = 'color-chip';
            swatch.style.backgroundColor = color.hex;
            paletteContainer.appendChild(swatch);
        });
    }

    // --- 方案D: 悬浮漂浮球 ---
    const floaterBtn = document.getElementById('theme-btn-floater');
    if (floaterBtn) {
        floaterBtn.addEventListener('click', () => {
            const newTheme = getRandomTheme();
            applyTheme(newTheme);
            
            // Check if confetti function exists
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }

            showToast(newTheme, true);
        });
    }

    // --- Toast通知功能 ---
    const toastContainer = document.getElementById('toast-container');
    function showToast(theme, showDesc = false) {
        const themeData = themes[theme];
        const toast = document.createElement('div');
        toast.className = 'toast';
        
        let content = `<h4 class="info-title">${themeData.name}</h4>`;
        if(showDesc) {
            content += `<p class="info-desc">${themeData.description}</p>`;
        }
        content += `<div class="info-palette">`;
        themeData.palette.forEach(color => {
            content += `<div class="color-chip" style="background-color: ${color.hex};"></div>`;
        });
        content += `</div>`;
        toast.innerHTML = content;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 100); 

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 4000);
    }

    // Helper to update popups
    function updateThemeInfo(theme, popupElement) {
        const themeData = themes[theme];
        popupElement.querySelector('.info-title').textContent = themeData.name;
        popupElement.querySelector('.info-desc').textContent = themeData.description;
        const paletteContainer = popupElement.querySelector('.info-palette');
        paletteContainer.innerHTML = '';
        themeData.palette.forEach(color => {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            swatch.innerHTML = `
                <div class="color-chip" style="background-color: ${color.hex};"></div>
                <div class="color-info">${color.hex}</div>
            `;
            paletteContainer.appendChild(swatch);
        });
    }
});
