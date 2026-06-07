// ==========================================
// Main JavaScript for PP Availables Website
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const productGrid = document.getElementById('productGrid');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const clearBtn = document.getElementById('clearBtn');
    const noResults = document.getElementById('noResults');

    /**
     * Shuffle array using Fisher-Yates algorithm
     * @param {Array} array - Array to shuffle
     * @returns {Array} - New shuffled array
     */
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Initialize the page with shuffled products
    displayProducts(shuffleArray(products));
    setupEventListeners();

    /**
     * Display products in the grid
     * @param {Array} productsArray - Array of product objects to display
     */
    function displayProducts(productsArray) {
        // Clear existing content
        productGrid.innerHTML = '';

        if (productsArray.length === 0) {
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';

        // Create and append product cards
        productsArray.forEach(product => {
            const card = createProductCard(product);
            productGrid.appendChild(card);
        });
    }

    /**
     * Create a product card element
     * @param {Object} product - Product object
     * @returns {HTMLAnchorElement} - Product card as anchor element
     */
    function createProductCard(product) {
        const card = document.createElement('a');
        card.href = product.link;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.className = 'product-card';
        card.setAttribute('aria-label', `${product.name} - ${product.description}`);

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400?text=Product+Image'">
            </div>
            <div class="product-info">
                <h3 class="product-name">${escapeHtml(product.name)}</h3>
                <p class="product-description">${escapeHtml(product.description)}</p>
                <span class="product-link">
                    View on Amazon <i class="fas fa-external-link-alt"></i>
                </span>
            </div>
        `;

        return card;
    }

    /**
     * Search products by name or description
     * @param {string} searchTerm - Search query
     * @returns {Array} - Filtered products array
     */
    function searchProducts(searchTerm) {
        if (!searchTerm || searchTerm.trim() === '') {
            return products;
        }

        const term = searchTerm.toLowerCase().trim();
        return products.filter(product => {
            return product.name.toLowerCase().includes(term) || 
                   product.description.toLowerCase().includes(term);
        });
    }

    /**
     * Escape HTML to prevent XSS
     * @param {string} text - Text to escape
     * @returns {string} - Escaped text
     */
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Setup event listeners
     */
    function setupEventListeners() {
        // Search button click
        searchBtn.addEventListener('click', function() {
            performSearch();
        });

        // Enter key in search input
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Real-time search as user types
        searchInput.addEventListener('input', function() {
            performSearch();
        });

        // Clear search
        clearBtn.addEventListener('click', function() {
            searchInput.value = '';
            clearBtn.style.display = 'none';
            displayProducts(shuffleArray(products));
        });

        // Show/hide clear button based on input
        searchInput.addEventListener('input', function() {
            clearBtn.style.display = searchInput.value.length > 0 ? 'inline-block' : 'none';
        });
    }

    /**
     * Perform search and update display
     */
    function performSearch() {
        const searchTerm = searchInput.value;
        const filteredProducts = searchProducts(searchTerm);
        displayProducts(filteredProducts);
        
        // Show clear button if there's text
        clearBtn.style.display = searchTerm.length > 0 ? 'inline-block' : 'none';
    }
});
