// ===== State =====
let allIcons = [];
let filteredIcons = [];
const ICONS_PER_PAGE = 100;

let currentStyle = 'all';
let currentWeight = 'all';
let searchQuery = '';
let currentIcon = null;
let currentIconSize = 48;
let currentPage = 1;
let currentColor = '#000000';

// ===== DOM Elements =====
const searchInput = document.getElementById('searchInput');
const iconsGrid = document.getElementById('iconsGrid');
const resultCount = document.getElementById('resultCount');
const iconModal = document.getElementById('iconModal');
const themeToggle = document.getElementById('themeToggle');
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const paginationPages = document.getElementById('paginationPages');
const emptyState = document.getElementById('emptyState');
const pagination = document.getElementById('pagination');
const colorPicker = document.getElementById('colorPicker');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    showLoadingSkeleton();
    initIcons();
    initFilters();
    initSearch();
    initSizeSlider();
    initColorPicker();
    initPagination();
    initRandomButton();
    initKeyboardShortcuts();
});

// ===== Random Icon =====
function initRandomButton() {
    const randomBtn = document.getElementById('randomIcon');
    randomBtn.addEventListener('click', () => {
        if (allIcons.length > 0) {
            const randomIndex = Math.floor(Math.random() * allIcons.length);
            const randomIcon = allIcons[randomIndex];
            openModal(randomIcon);
        }
    });
}

// ===== Install Copy =====
function copyInstall(type) {
    const commands = {
        npm: 'npm i @iseer/icons',
        yarn: 'yarn add @iseer/icons'
    };
    
    navigator.clipboard.writeText(commands[type]).then(() => {
        showToast();
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = commands[type];
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast();
    });
}

// ===== Loading Skeleton =====
function showLoadingSkeleton() {
    iconsGrid.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-card';
        iconsGrid.appendChild(skeleton);
    }
}

// ===== Theme Toggle =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// ===== Icons =====
function initIcons() {
    if (typeof ICONS_MANIFEST !== 'undefined') {
        allIcons = ICONS_MANIFEST;
        filteredIcons = [...allIcons];
        renderIcons();
        updateResultCount();
        renderPagination();
    }
}

// ===== Size Slider =====
function initSizeSlider() {
    sizeSlider.addEventListener('input', (e) => {
        currentIconSize = parseInt(e.target.value);
        sizeValue.textContent = currentIconSize;
        updateModalIconSize();
    });
}

function updateModalIconSize() {
    const modalDisplay = document.querySelector('.modal-icon-display');
    const svg = modalDisplay.querySelector('svg');
    if (svg) {
        svg.style.width = `${currentIconSize * 2}px`;
        svg.style.height = `${currentIconSize * 2}px`;
    }
}

// ===== Color Picker =====
function initColorPicker() {
    const hexInput = document.getElementById('hexInput');
    
    // Preset colors
    document.querySelectorAll('.color-preset').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.color-preset').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentColor = btn.dataset.color;
            colorPicker.value = currentColor;
            hexInput.value = currentColor;
            applyIconColor();
        });
    });
    
    // Custom color picker
    colorPicker.addEventListener('input', (e) => {
        currentColor = e.target.value;
        hexInput.value = currentColor.toUpperCase();
        document.querySelectorAll('.color-preset').forEach(b => b.classList.remove('active'));
        applyIconColor();
    });
    
    // Hex input
    hexInput.addEventListener('input', (e) => {
        let value = e.target.value;
        
        // Add # if missing
        if (value && !value.startsWith('#')) {
            value = '#' + value;
        }
        
        // Validate hex color
        if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
            currentColor = value;
            colorPicker.value = value;
            document.querySelectorAll('.color-preset').forEach(b => b.classList.remove('active'));
            applyIconColor();
        }
    });
    
    // Format on blur
    hexInput.addEventListener('blur', (e) => {
        e.target.value = currentColor.toUpperCase();
    });
}

function applyIconColor() {
    const modalImg = document.getElementById('modalIconImg');
    if (currentColor === '#000000') {
        modalImg.style.filter = '';
    } else {
        // Convert hex to filter
        modalImg.style.filter = hexToFilter(currentColor);
    }
}

function hexToFilter(hex) {
    // Simple approach: use CSS filter to colorize
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // Calculate brightness and hue rotation
    const brightness = (r + g + b) / 3 / 255;
    const hue = rgbToHue(r, g, b);
    const saturation = rgbToSaturation(r, g, b);
    
    return `brightness(0) saturate(100%) invert(${brightness * 100}%) sepia(100%) saturate(${saturation * 10}%) hue-rotate(${hue}deg)`;
}

function rgbToHue(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h;
    if (max === min) h = 0;
    else if (max === r) h = ((g - b) / (max - min)) % 6;
    else if (max === g) h = (b - r) / (max - min) + 2;
    else h = (r - g) / (max - min) + 4;
    return Math.round(h * 60);
}

function rgbToSaturation(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    return max === 0 ? 0 : (max - min) / max;
}

// ===== Pagination =====
function initPagination() {
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderIcons();
            renderPagination();
            scrollToTop();
        }
    });
    
    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredIcons.length / ICONS_PER_PAGE);
        if (currentPage < totalPages) {
            currentPage++;
            renderIcons();
            renderPagination();
            scrollToTop();
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getTotalPages() {
    return Math.ceil(filteredIcons.length / ICONS_PER_PAGE);
}

function renderPagination() {
    const totalPages = getTotalPages();
    paginationPages.innerHTML = '';
    
    if (totalPages === 0) {
        pagination.style.display = 'none';
        return;
    }
    
    pagination.style.display = 'flex';
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
    
    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
            paginationPages.appendChild(createPageBtn(i));
        }
    } else {
        paginationPages.appendChild(createPageBtn(1));
        
        if (currentPage > 3) {
            paginationPages.appendChild(createEllipsis());
        }
        
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
        
        for (let i = start; i <= end; i++) {
            paginationPages.appendChild(createPageBtn(i));
        }
        
        if (currentPage < totalPages - 2) {
            paginationPages.appendChild(createEllipsis());
        }
        
        paginationPages.appendChild(createPageBtn(totalPages));
    }
}

function createPageBtn(page) {
    const btn = document.createElement('button');
    btn.className = `page-btn ${page === currentPage ? 'active' : ''}`;
    btn.textContent = page;
    btn.onclick = () => goToPage(page);
    return btn;
}

function createEllipsis() {
    const span = document.createElement('span');
    span.className = 'page-ellipsis';
    span.textContent = '...';
    return span;
}

function goToPage(page) {
    currentPage = page;
    renderIcons();
    renderPagination();
    scrollToTop();
}

// ===== Filters =====
function initFilters() {
    document.querySelectorAll('#styleFilter .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#styleFilter .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStyle = btn.dataset.value;
            applyFilters();
        });
    });

    document.querySelectorAll('#weightFilter .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#weightFilter .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentWeight = btn.dataset.value;
            applyFilters();
        });
    });
}

// ===== Search =====
function initSearch() {
    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchQuery = e.target.value.toLowerCase().trim();
            applyFilters();
        }, 150);
    });
}

function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
        
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// ===== Filter Logic =====
function applyFilters() {
    filteredIcons = allIcons.filter(icon => {
        if (currentStyle !== 'all' && icon.style !== currentStyle) return false;
        if (currentWeight !== 'all' && icon.weight !== currentWeight) return false;
        
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            const name = icon.name.toLowerCase();
            const component = icon.component.toLowerCase();
            return name.includes(q) || component.includes(q);
        }
        return true;
    });
    
    currentPage = 1;
    renderIcons();
    updateResultCount();
    renderPagination();
}

// ===== Render Icons =====
function renderIcons() {
    iconsGrid.innerHTML = '';
    
    // Show empty state if no results
    if (filteredIcons.length === 0) {
        emptyState.style.display = 'flex';
        return;
    }
    
    emptyState.style.display = 'none';
    
    const fragment = document.createDocumentFragment();
    const startIndex = (currentPage - 1) * ICONS_PER_PAGE;
    const endIndex = Math.min(startIndex + ICONS_PER_PAGE, filteredIcons.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const icon = filteredIcons[i];
        const card = createIconCard(icon);
        fragment.appendChild(card);
    }
    
    iconsGrid.appendChild(fragment);
}

function createIconCard(icon) {
    const card = document.createElement('div');
    card.className = 'icon-card';
    card.setAttribute('data-tooltip', icon.name);
    card.onclick = () => openModal(icon);
    
    const img = document.createElement('img');
    img.src = icon.cdn;
    img.alt = icon.component;
    img.loading = 'lazy';
    
    card.appendChild(img);
    
    return card;
}

function updateResultCount() {
    if (filteredIcons.length === 0) {
        resultCount.textContent = 'No icons found';
        return;
    }
    const startIndex = (currentPage - 1) * ICONS_PER_PAGE + 1;
    const endIndex = Math.min(currentPage * ICONS_PER_PAGE, filteredIcons.length);
    resultCount.textContent = `Showing ${startIndex.toLocaleString()}-${endIndex.toLocaleString()} of ${filteredIcons.length.toLocaleString()} icons`;
}

// ===== Modal =====
function openModal(icon) {
    currentIcon = icon;
    
    // Reset size slider and color
    currentIconSize = 48;
    sizeSlider.value = 48;
    sizeValue.textContent = 48;
    currentColor = '#000000';
    colorPicker.value = '#000000';
    document.getElementById('hexInput').value = '#000000';
    document.querySelectorAll('.color-preset').forEach((b, i) => {
        b.classList.toggle('active', i === 0);
    });
    
    // Icon display - Inline SVG for coloring
    const modalDisplay = document.querySelector('.modal-icon-display');
    modalDisplay.innerHTML = '<div class="loading-spinner"></div>'; // Add simple loader or just text
    
    fetch(icon.cdn)
        .then(res => res.text())
        .then(svgText => {
            modalDisplay.innerHTML = svgText;
            const svg = modalDisplay.querySelector('svg');
            if (svg) {
                // Ensure SVG sizes correctly
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');
                svg.style.width = `${currentIconSize * 2}px`;
                svg.style.height = `${currentIconSize * 2}px`;
                
                // Ensure SVG uses fill/stroke from current color
                // Removing existing fill/stroke attributes or setting them to currentColor might be needed
                // But usually just setting color on parent or svg works if they inherit
                applyIconColor();
            }
        });
    
    // Variants - show all 8 (both styles, all weights)
    const modalVariants = document.getElementById('modalVariants');
    modalVariants.innerHTML = '';
    
    const styles = ['rounded', 'straight'];
    const weights = ['thin', 'regular', 'bold', 'solid'];
    
    styles.forEach(style => {
        weights.forEach(weight => {
            const variantIcon = allIcons.find(i => 
                i.name === icon.name && 
                i.style === style && 
                i.weight === weight
            );
            
            if (variantIcon) {
                const btn = document.createElement('button');
                btn.className = `variant-btn ${style === icon.style && weight === icon.weight ? 'active' : ''}`;
                btn.title = `${style} ${weight}`;
                btn.onclick = (e) => {
                    e.stopPropagation();
                    switchVariant(variantIcon);
                };
                
                const img = document.createElement('img');
                img.src = variantIcon.cdn;
                img.alt = `${style} ${weight}`;
                
                // In dark mode, invert the preview variants (simple filter is fine for thumbnails)
                
                btn.appendChild(img);
                modalVariants.appendChild(btn);
            }
        });
    });
    
    // Info
    document.getElementById('modalIconName').textContent = icon.component;
    document.getElementById('modalStyle').textContent = icon.style;
    document.getElementById('modalWeight').textContent = icon.weight;
    
    // Code
    const importPath = `@iseer/icons/${icon.style}/${icon.weight}`;
    document.getElementById('modalImport').textContent = `import { ${icon.component} } from '${importPath}';`;
    document.getElementById('modalUsage').textContent = `<${icon.component} size={24} />`;
    document.getElementById('modalCdn').textContent = icon.cdn;
    
    // Download
    const downloadBtn = document.getElementById('modalDownload');
    downloadBtn.href = icon.cdn;
    downloadBtn.download = icon.filename;
    
    // Show modal
    iconModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function switchVariant(icon) {
    currentIcon = icon;
    
    // Update SVG display
    const modalDisplay = document.querySelector('.modal-icon-display');
    modalDisplay.innerHTML = '<div class="loading-spinner"></div>';
    
    fetch(icon.cdn)
        .then(res => res.text())
        .then(svgText => {
            modalDisplay.innerHTML = svgText;
            const svg = modalDisplay.querySelector('svg');
            if (svg) {
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');
                applyIconColor();
                updateModalIconSize();
            }
        });
    
    document.getElementById('modalStyle').textContent = icon.style;
    document.getElementById('modalWeight').textContent = icon.weight;
    
    const importPath = `@iseer/icons/${icon.style}/${icon.weight}`;
    document.getElementById('modalImport').textContent = `import { ${icon.component} } from '${importPath}';`;
    document.getElementById('modalCdn').textContent = icon.cdn;
    document.getElementById('modalDownload').href = icon.cdn;
    
    // Update active variant button
    document.querySelectorAll('.variant-btn').forEach(btn => {
        const isActive = btn.title === `${icon.style} ${icon.weight}`;
        btn.classList.toggle('active', isActive);
    });
}

function applyIconColor() {
    const modalDisplay = document.querySelector('.modal-icon-display');
    const svg = modalDisplay.querySelector('svg');
    if (!svg) return;
    
    // Set color style on SVG
    svg.style.color = currentColor;
    svg.style.fill = currentColor;
    
    // Also target all paths to ensure they take the color
    // Some SVGs might use stroke instead of fill
    const elements = svg.querySelectorAll('*');
    elements.forEach(el => {
        const fill = el.getAttribute('fill');
        const stroke = el.getAttribute('stroke');
        
        if (fill && fill !== 'none') {
            el.style.fill = currentColor;
        }
        if (stroke && stroke !== 'none') {
            el.style.stroke = currentColor;
        }
        // Force fill if no attributes present (often black by default)
        if (!fill && !stroke && el.tagName === 'path') {
             el.style.fill = currentColor;
        }
    });
}

function closeModal() {
    iconModal.classList.remove('active');
    document.body.style.overflow = '';
    currentIcon = null;
}

// ===== Copy to Clipboard =====
async function copyCode(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        showToast();
    } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast();
    }
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}
