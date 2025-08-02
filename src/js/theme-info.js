const themeDetails = {
    default: {
        name: '默认主题',
        description: '平衡、优雅的默认主题，提供舒适的阅读体验。',
        colors: [
            { name: '背景', hex: '#ffffff', rgb: 'rgb(255, 255, 255)' },
            { name: '文本', hex: '#333333', rgb: 'rgb(51, 51, 51)' },
            { name: '点缀', hex: '#007bff', rgb: 'rgb(0, 123, 255)' }
        ]
    },
    morandi: {
        name: '莫兰迪',
        description: '以画家乔治·莫兰迪命名，色调柔和、饱和度低，营造出宁静、高级的氛围。',
        colors: [
            { name: '背景', hex: '#f4f4f4', rgb: 'rgb(244, 244, 244)' },
            { name: '文本', hex: '#6f6f6f', rgb: 'rgb(111, 111, 111)' },
            { name: '点缀', hex: '#a5a5a5', rgb: 'rgb(165, 165, 165)' }
        ]
    },
    mucha: {
        name: '穆夏',
        description: '灵感源于新艺术运动大师阿尔丰斯·穆夏，色彩华丽、典雅，富有浪漫主义气息。',
        colors: [
            { name: '背景', hex: '#fdf6e4', rgb: 'rgb(253, 246, 228)' },
            { name: '文本', hex: '#585043', rgb: 'rgb(88, 80, 67)' },
            { name: '点缀', hex: '#b58863', rgb: 'rgb(181, 136, 99)' }
        ]
    },
    bauhaus: {
        name: '包豪斯',
        description: '致敬包豪斯设计学院，采用红、黄、蓝三原色，强调功能性与几何美学。',
        colors: [
            { name: '背景', hex: '#f0f0f0', rgb: 'rgb(240, 240, 240)' },
            { name: '文本', hex: '#000000', rgb: 'rgb(0, 0, 0)' },
            { name: '点缀', hex: '#dd0000', rgb: 'rgb(221, 0, 0)' }
        ]
    },
    cyberpunk: {
        name: '赛博朋克',
        description: '高科技、低生活的未来主义风格，以霓虹灯般的色彩营造强烈的视觉冲击。',
        colors: [
            { name: '背景', hex: '#0d0221', rgb: 'rgb(13, 2, 33)' },
            { name: '文本', hex: '#00f0ff', rgb: 'rgb(0, 240, 255)' },
            { name: '点缀', hex: '#39ff14', rgb: 'rgb(57, 255, 20)' }
        ]
    },
    destijl: {
        name: '风格派',
        description: '荷兰风格派运动的抽象美学，使用红、黄、蓝三原色和黑白灰，追求纯粹的几何形式。',
        colors: [
            { name: '背景', hex: '#f0f0f0', rgb: 'rgb(240, 240, 240)' },
            { name: '点缀1', hex: '#dd0000', rgb: 'rgb(221, 0, 0)' },
            { name: '点缀2', hex: '#ffde00', rgb: 'rgb(255, 222, 0)' },
            { name: '点缀3', hex: '#005bff', rgb: 'rgb(0, 91, 255)' }
        ]
    },
    ukiyoe: {
        name: '浮世绘',
        description: '源于日本江户时代的木版画，色彩典雅、沉静，富有东方故事性。',
        colors: [
            { name: '背景', hex: '#f3eada', rgb: 'rgb(243, 234, 218)' },
            { name: '文本', hex: '#4f4233', rgb: 'rgb(79, 66, 51)' },
            { name: '点缀', hex: '#005f73', rgb: 'rgb(0, 95, 115)' }
        ]
    },
    wesanderson: {
        name: '韦斯·安德森',
        description: '致敬导演韦斯·安德森的电影美学，色彩复古、温暖，充满叙事感和对称美。',
        colors: [
            { name: '背景', hex: '#fdf6e4', rgb: 'rgb(253, 246, 228)' },
            { name: '点缀1', hex: '#e76f51', rgb: 'rgb(231, 111, 81)' },
            { name: '点缀2', hex: '#2a9d8f', rgb: 'rgb(42, 157, 143)' }
        ]
    },
    monet: {
        name: '莫奈',
        description: '灵感源于印象派大师莫奈，色彩柔和、朦胧，致力于捕捉光影的瞬间变幻。',
        colors: [
            { name: '背景', hex: '#e6e8fa', rgb: 'rgb(230, 232, 250)' },
            { name: '文本', hex: '#495a78', rgb: 'rgb(73, 90, 120)' },
            { name: '点缀', hex: '#7aa2e5', rgb: 'rgb(122, 162, 229)' }
        ]
    },
    artdeco: {
        name: '装饰艺术',
        description: '1920年代的奢华与几何美学，以金色和黑色为基调，展现爵士时代的优雅与魅力。',
        colors: [
            { name: '背景', hex: '#1a1a1a', rgb: 'rgb(26, 26, 26)' },
            { name: '文本', hex: '#f5f5dc', rgb: 'rgb(245, 245, 220)' },
            { name: '点缀', hex: '#ffd700', rgb: 'rgb(255, 215, 0)' }
        ]
    },
    nordic: {
        name: '北欧风',
        description: '简约、自然、温暖的斯堪的纳维亚美学，注重功能性与舒适感。',
        colors: [
            { name: '背景', hex: '#fafafa', rgb: 'rgb(250, 250, 250)' },
            { name: '文本', hex: '#2e3440', rgb: 'rgb(46, 52, 64)' },
            { name: '点缀', hex: '#88c0d0', rgb: 'rgb(136, 192, 208)' }
        ]
    },
    vaporwave: {
        name: '蒸汽波',
        description: '80年代复古未来主义，以粉紫渐变和赛博元素营造出梦幻般的怀旧感。',
        colors: [
            { name: '背景', hex: '#1a0d26', rgb: 'rgb(26, 13, 38)' },
            { name: '文本', hex: '#ff71ce', rgb: 'rgb(255, 113, 206)' },
            { name: '点缀', hex: '#01cdfe', rgb: 'rgb(1, 205, 254)' }
        ]
    },
    matisse: {
        name: '马蒂斯',
        description: '致敬野兽派创始人亨利·马蒂斯，色彩大胆、纯粹，充满原始的生命力。',
        colors: [
            { name: '背景', hex: '#fff8e7', rgb: 'rgb(255, 248, 231)' },
            { name: '点缀1', hex: '#4169e1', rgb: 'rgb(65, 105, 225)' },
            { name: '点缀2', hex: '#ff6347', rgb: 'rgb(255, 99, 71)' }
        ]
    },
    filmnoir: {
        name: '黑色电影',
        description: '经典好莱坞的黑白灰调，通过强烈的明暗对比营造出神秘、悬疑的氛围。',
        colors: [
            { name: '背景', hex: '#1c1c1c', rgb: 'rgb(28, 28, 28)' },
            { name: '文本', hex: '#e5e5e5', rgb: 'rgb(229, 229, 229)' },
            { name: '点缀', hex: '#696969', rgb: 'rgb(105, 105, 105)' }
        ]
    },
    synthwave: {
        name: '合成波',
        description: '80年代霓虹未来主义，紫粉渐变配以电光蓝，营造出复古的科幻感。',
        colors: [
            { name: '背景', hex: '#0f0f23', rgb: 'rgb(15, 15, 35)' },
            { name: '文本', hex: '#ff006e', rgb: 'rgb(255, 0, 110)' },
            { name: '点缀', hex: '#3a86ff', rgb: 'rgb(58, 134, 255)' }
        ]
    },
    brutalism: {
        name: '野兽派建筑',
        description: '粗犷的混凝土美学，强调原始材料和结构，风格冷峻而有力。',
        colors: [
            { name: '背景', hex: '#2c2c2c', rgb: 'rgb(44, 44, 44)' },
            { name: '文本', hex: '#f5f5f5', rgb: 'rgb(245, 245, 245)' },
            { name: '点缀', hex: '#ff4444', rgb: 'rgb(255, 68, 68)' }
        ]
    },
    kawaii: {
        name: '可爱风',
        description: '日式甜美粉嫩风格，色彩柔和、饱和度高，营造出温柔治愈的氛围。',
        colors: [
            { name: '背景', hex: '#fff0f5', rgb: 'rgb(255, 240, 245)' },
            { name: '文本', hex: '#8b5a83', rgb: 'rgb(139, 90, 131)' },
            { name: '点缀', hex: '#ff69b4', rgb: 'rgb(255, 105, 180)' }
        ]
    },
    steampunk: {
        name: '蒸汽朋克',
        description: '维多利亚时代的机械美学，以铜色、棕色和齿轮元素构建出复古的工业浪漫。',
        colors: [
            { name: '背景', hex: '#2f1b14', rgb: 'rgb(47, 27, 20)' },
            { name: '文本', hex: '#d4af37', rgb: 'rgb(212, 175, 55)' },
            { name: '点缀', hex: '#8b4513', rgb: 'rgb(139, 69, 19)' }
        ]
    },
    neontokyo: {
        name: '霓虹东京',
        description: '灵感源于现代东京的都市夜景，以璀璨的霓虹灯色彩营造出繁华、迷幻的氛围。',
        colors: [
            { name: '背景', hex: '#0a0a0a', rgb: 'rgb(10, 10, 10)' },
            { name: '文本', hex: '#00ffff', rgb: 'rgb(0, 255, 255)' },
            { name: '点缀', hex: '#ff1493', rgb: 'rgb(255, 20, 147)' }
        ]
    },
    vintageposter: {
        name: '复古海报',
        description: '50年代美式复古海报风格，色彩温暖、怀旧，具有强烈的时代感。',
        colors: [
            { name: '背景', hex: '#f5e6d3', rgb: 'rgb(245, 230, 211)' },
            { name: '文本', hex: '#8b4513', rgb: 'rgb(139, 69, 19)' },
            { name: '点缀', hex: '#dc143c', rgb: 'rgb(220, 20, 60)' }
        ]
    }
};

function updateThemeInfo(theme) {
    const details = themeDetails[theme];
    if (!details) return;

    document.getElementById('theme-info-title').textContent = details.name;
    document.getElementById('theme-info-desc').textContent = details.description;

    const paletteContainer = document.getElementById('theme-info-palette');
    paletteContainer.innerHTML = '';

    details.colors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.classList.add('color-swatch');

        const chip = document.createElement('div');
        chip.classList.add('color-chip');
        chip.style.backgroundColor = color.hex;

        const info = document.createElement('div');
        info.classList.add('color-info');
        info.innerHTML = `${color.hex}<br>${color.rgb}`;

        swatch.appendChild(chip);
        swatch.appendChild(info);
        paletteContainer.appendChild(swatch);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    
    // Initial load
    const initialTheme = localStorage.getItem('theme') || 'default';
    updateThemeInfo(initialTheme);

    // Update on change
    themeSelect.addEventListener('change', (event) => {
        updateThemeInfo(event.target.value);
    });
});
