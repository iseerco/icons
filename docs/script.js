// ===== State =====
let allIcons = [];
let filteredIcons = [];
let displayedCount = 0;
const ICONS_PER_PAGE = 100;

let currentStyle = 'all';
let currentWeight = 'all';
let searchQuery = '';
let currentIcon = null;

// ===== DOM Elements =====
const searchInput = document.getElementById('searchInput');
const iconsGrid = document.getElementById('iconsGrid');
const resultCount = document.getElementById('resultCount');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreContainer = document.getElementById('loadMoreContainer');
const iconModal = document.getElementById('iconModal');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initIcons();
    initFilters();
    initSearch();
    initKeyboardShortcuts();
});

function initIcons() {
    if (typeof ICONS_MANIFEST !== 'undefined') {
        allIcons = ICONS_MANIFEST;
        filteredIcons = [...allIcons];
        renderIcons();
        updateResultCount();
    }
}

// ===== Filters =====
function initFilters() {
    // Style filter
    document.querySelectorAll('#styleFilter .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#styleFilter .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStyle = btn.dataset.value;
            applyFilters();
        });
    });

    // Weight filter
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
        // Focus search on /
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Close modal on Escape
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
            const terms = searchQuery.split(/\s+/);
            return terms.every(term => 
                icon.name.toLowerCase().includes(term) ||
                icon.component.toLowerCase().includes(term)
            );
        }
        return true;
    });
    
    displayedCount = 0;
    iconsGrid.innerHTML = '';
    renderIcons();
    updateResultCount();
}

// ===== Render Icons =====
function renderIcons() {
    const fragment = document.createDocumentFragment();
    const endIndex = Math.min(displayedCount + ICONS_PER_PAGE, filteredIcons.length);
    
    for (let i = displayedCount; i < endIndex; i++) {
        const icon = filteredIcons[i];
        const card = createIconCard(icon);
        fragment.appendChild(card);
    }
    
    iconsGrid.appendChild(fragment);
    displayedCount = endIndex;
    
    loadMoreContainer.style.display = displayedCount < filteredIcons.length ? 'flex' : 'none';
}

function createIconCard(icon) {
    const card = document.createElement('div');
    card.className = 'icon-card';
    card.onclick = () => openModal(icon);
    
    const img = document.createElement('img');
    img.src = icon.cdn;
    img.alt = icon.component;
    img.loading = 'lazy';
    
    const name = document.createElement('span');
    name.className = 'icon-name';
    name.textContent = icon.component;
    
    card.appendChild(img);
    card.appendChild(name);
    
    return card;
}

function updateResultCount() {
    resultCount.textContent = `Showing ${displayedCount.toLocaleString()} of ${filteredIcons.length.toLocaleString()} icons`;
}

// ===== Load More =====
loadMoreBtn.addEventListener('click', () => {
    renderIcons();
    updateResultCount();
});

// ===== Modal =====
function openModal(icon) {
    currentIcon = icon;
    
    // Icon display
    const modalIconImg = document.getElementById('modalIconImg');
    modalIconImg.src = icon.cdn;
    modalIconImg.alt = icon.component;
    
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
    
    document.getElementById('modalIconImg').src = icon.cdn;
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
