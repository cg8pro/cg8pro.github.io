const themes = {
    default: { name: '默认主题', description: '默认的深色主题，现代而优雅。', palette: [{ hex: '#1a1a1a' }, { hex: '#f0f0f0' }, { hex: '#00aaff' }, { hex: '#e06cff' }] },
    morandi: { name: '莫兰迪', description: '低饱和度的灰色调，宁静、柔和。', palette: [{ hex: '#e0e0e0' }, { hex: '#5a5a5a' }, { hex: '#a3bfb8' }, { hex: '#b8a3a3' }] },
    mucha: { name: '穆夏', description: '新艺术运动风格，充满华丽的装饰线条和柔美的色彩。', palette: [{ hex: '#f4f0e6' }, { hex: '#4b3f32' }, { hex: '#8a795d' }, { hex: '#c06c84' }] },
    bauhaus: { name: '包豪斯', description: '简洁的几何形态与红黄蓝三原色，现代主义的经典。', palette: [{ hex: '#f0f0f0' }, { hex: '#000000' }, { hex: '#dd0000' }, { hex: '#005bff' }] },
    cyberpunk: { name: '赛博朋克', description: '高对比度的霓虹灯光，充满未来科技感。', palette: [{ hex: '#0d0221' }, { hex: '#00f0ff' }, { hex: '#39ff14' }, { hex: '#ff3131' }] },
    destijl: { name: '风格派', description: '纯粹的抽象主义，以红、黄、蓝三原色和黑白灰为基础。', palette: [{ hex: '#f0f0f0' }, { hex: '#000000' }, { hex: '#ffde00' }, { hex: '#dd0000' }] },
    ukiyoe: { name: '浮世绘', description: '日本江户时代的木版画，色彩鲜明，线条流畅。', palette: [{ hex: '#f3eada' }, { hex: '#4f4233' }, { hex: '#005f73' }, { hex: '#ae2012' }] },
    wesanderson: { name: '韦斯·安德森', description: '对称美学与复古色调，充满童话般的电影感。', palette: [{ hex: '#fdf6e4' }, { hex: '#585043' }, { hex: '#e76f51' }, { hex: '#2a9d8f' }] },
    monet: { name: '莫奈', description: '印象派的光影与色彩，捕捉瞬间的美。', palette: [{ hex: '#e6e8fa' }, { hex: '#495a78' }, { hex: '#7aa2e5' }, { hex: '#d8a7d8' }] },
    artdeco: { name: '装饰艺术', description: '奢华的金属质感与几何线条，盖茨比时代的辉煌。', palette: [{ hex: '#1a1a1a' }, { hex: '#f5f5dc' }, { hex: '#ffd700' }, { hex: '#ff6b35' }] },
    nordic: { name: '北欧风', description: '简洁、自然、人性化，追求极致的舒适与宁静。', palette: [{ hex: '#fafafa' }, { hex: '#2e3440' }, { hex: '#88c0d0' }, { hex: '#d08770' }] },
    vaporwave: { name: '蒸汽波', description: '复古的未来主义，融合了80年代的流行文化与超现实感。', palette: [{ hex: '#1a0d26' }, { hex: '#ff71ce' }, { hex: '#01cdfe' }, { hex: '#05ffa1' }] },
    matisse: { name: '马蒂斯', description: '野兽派的鲜艳色彩与大胆笔触，充满生命的活力。', palette: [{ hex: '#fff8e7' }, { hex: '#2f4f4f' }, { hex: '#4169e1' }, { hex: '#ffd700' }] },
    filmnoir: { name: '黑色电影', description: '高对比度的黑白光影，悬疑、神秘、宿命。', palette: [{ hex: '#1c1c1c' }, { hex: '#e5e5e5' }, { hex: '#ffffff' }, { hex: '#696969' }] },
    synthwave: { name: '合成波', description: '80年代的复古未来感，霓虹灯、跑车、落日。', palette: [{ hex: '#0f0f23' }, { hex: '#ff006e' }, { hex: '#3a86ff' }, { hex: '#ffbe0b' }] },
    brutalism: { name: '野兽派建筑', description: '粗犷、原始、不加修饰的混凝土结构，充满力量感。', palette: [{ hex: '#2c2c2c' }, { hex: '#f5f5f5' }, { hex: '#ff4444' }, { hex: '#ffff00' }] },
    kawaii: { name: '可爱风', description: '粉嫩、甜美、治愈，充满少女心。', palette: [{ hex: '#fff0f5' }, { hex: '#8b5a83' }, { hex: '#ff69b4' }, { hex: '#87ceeb' }] },
    steampunk: { name: '蒸汽朋克', description: '维多利亚时代的工业革命与科幻想象，齿轮、蒸汽、黄铜。', palette: [{ hex: '#2f1b14' }, { hex: '#d4af37' }, { hex: '#b8860b' }, { hex: '#8b4513' }] },
    neontokyo: { name: '霜虹东京', description: '赛博朋克与日式美学的结合，冷峻的都市与绚烂的霓虹。', palette: [{ hex: '#0a0a0a' }, { hex: '#00ffff' }, { hex: '#00ff41' }, { hex: '#ff1493' }] },
    vintageposter: { name: '复古海报', description: '20世纪的复古海报风格，色彩温暖，质感怀旧。', palette: [{ hex: '#f5e6d3' }, { hex: '#8b4513' }, { hex: '#dc143c' }, { hex: '#ff6347' }] },
};

let currentTheme = localStorage.getItem('theme') || 'default';

function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

function getRandomTheme() {
    const themeKeys = Object.keys(themes);
    let newTheme;
    do {
        newTheme = themeKeys[Math.floor(Math.random() * themeKeys.length)];
    } while (newTheme === currentTheme);
    return newTheme;
}

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
});
