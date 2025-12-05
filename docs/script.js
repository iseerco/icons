// ===== State =====
let allIcons = [];
let filteredIcons = [];
let displayedCount = 0;
const ICONS_PER_PAGE = 100;

let currentStyle = 'all';
let currentWeight = 'all';
let searchQuery = '';

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
        // Style filter
        if (currentStyle !== 'all' && icon.style !== currentStyle) {
            return false;
        }
        
        // Weight filter
        if (currentWeight !== 'all' && icon.weight !== currentWeight) {
            return false;
        }
        
        // Search filter
        if (searchQuery) {
            const searchTerms = searchQuery.split(/\s+/);
            return searchTerms.every(term => 
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
    
    // Show/hide load more button
    if (displayedCount < filteredIcons.length) {
        loadMoreContainer.style.display = 'flex';
    } else {
        loadMoreContainer.style.display = 'none';
    }
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
    const total = filteredIcons.length;
    const showing = displayedCount;
    
    if (searchQuery || currentStyle !== 'all' || currentWeight !== 'all') {
        resultCount.textContent = `Showing ${showing.toLocaleString()} of ${total.toLocaleString()} icons`;
    } else {
        resultCount.textContent = `Showing ${showing.toLocaleString()} of ${total.toLocaleString()} icons`;
    }
}

// ===== Load More =====
loadMoreBtn.addEventListener('click', () => {
    renderIcons();
    updateResultCount();
});

// ===== Modal =====
function openModal(icon) {
    const modalPreview = document.getElementById('modalPreview');
    const modalIconName = document.getElementById('modalIconName');
    const modalStyle = document.getElementById('modalStyle');
    const modalWeight = document.getElementById('modalWeight');
    const modalImport = document.getElementById('modalImport');
    const modalUsage = document.getElementById('modalUsage');
    const modalCdn = document.getElementById('modalCdn');
    const modalFilename = document.getElementById('modalFilename');
    const modalDownload = document.getElementById('modalDownload');
    
    // Preview
    modalPreview.innerHTML = `<img src="${icon.cdn}" alt="${icon.component}">`;
    
    // Info
    modalIconName.textContent = icon.component;
    modalStyle.textContent = icon.style;
    modalWeight.textContent = icon.weight;
    
    // Code
    const importPath = `@iseer/icons/${icon.style}/${icon.weight}`;
    modalImport.textContent = `import { ${icon.component} } from '${importPath}';`;
    modalUsage.textContent = `<${icon.component} size={24} />`;
    modalCdn.textContent = icon.cdn;
    modalFilename.textContent = icon.filename;
    
    // Download
    modalDownload.href = icon.cdn;
    modalDownload.download = icon.filename;
    
    // Show modal
    iconModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    iconModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Copy to Clipboard =====
async function copyCode(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        showToast();
    } catch (err) {
        // Fallback for older browsers
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
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}
