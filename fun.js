// Games Data - Badilisha na games zako halisi
const games = [
    {
        id: 1,
        name: "efootball 25 PPSSPP",
        image: "e.jpg",
        description: "Embark on an amazing journey through magical lands filled with challenges and treasures.",
        downloadLink: "https://www.mediafire.com/file/xet3s2ofesp5do4/eFootball_2026_GAME.zip/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 2,
        name: "modern combat 4",
        image: "m.jpg", 
        description: "Experience the thrill of high-speed racing with stunning graphics and realistic physics.",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME2_LINK/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 3,
        name: "fifa 26",
        image: "fc.jpg",
        description: "the most realistic football game with all your favorite team and players .",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME3_LINK/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 4,
        name: "mortal combat",
        image: "mortal.png",
        description: "Fight alien invaders in this action-packed space shooter with amazing visuals.",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME4_LINK/file",
        type: "premium", 
        pinRequired: true
    },
    {
        id: 5,
        name: "god of war",
        image: "war.jpg",
        description: "Survive the zombie apocalypse in this thrilling survival horror game.",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME5_LINK/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 6,
        name: "Football Pro 2024",
        image: "https://via.placeholder.com/300x200/96c93d/ffffff?text=Football+Pro",
        description: "The most realistic football simulation with all your favorite teams and players.",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME6_LINK/file",
        type: "premium",
        pinRequired: true
    }
];

// Initialize website when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadGames();
    initSearch();
    initFilters();
    initSmoothScrolling();
});

// Load games into the grid
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// Create individual game card
function createGameCard(game) {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    
    const badgeClass = game.type === 'free' ? 'badge-free' : 'badge-premium';
    const badgeText = game.type === 'free' ? 'FREE' : 'PREMIUM';
    const noticeClass = game.type === 'free' ? 'notice-free' : 'notice-premium';
    const noticeText = game.pinRequired ? 
        '🔒 PIN Required - Contact us to get PIN' : 
        '✅ No PIN Required - Download & Play!';
    
    gameCard.innerHTML = `
        <div class="game-image-container">
            <img src="${game.image}" alt="${game.name}" class="game-image" onerror="handleImageError(this)">
            <div class="game-badge ${badgeClass}">${badgeText}</div>
        </div>
        <div class="game-content">
            <h3 class="game-title">${game.name}</h3>
            <p class="game-description">${game.description}</p>
            <div class="pin-notice ${noticeClass}">${noticeText}</div>
            <a href="${game.downloadLink}" class="download-btn" target="_blank">
                Download Now
            </a>
        </div>
    `;
    
    return gameCard;
}

// Handle image loading errors
function handleImageError(img) {
    console.log(`Image failed to load: ${img.src}`);
    // Use a fallback placeholder image
    img.src = 'https://via.placeholder.com/300x200/667eea/ffffff?text=Game+Image';
    img.alt = 'Game Image';
}

// Initialize search functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            filterAndDisplayGames(searchTerm, getActiveFilter());
        });
        
        // Clear search on escape key
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                this.value = '';
                filterAndDisplayGames('', getActiveFilter());
            }
        });
    }
}

// Initialize filter buttons
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Apply filter
            const filterType = this.getAttribute('data-filter');
            const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
            filterAndDisplayGames(searchTerm, filterType);
        });
    });
}

// Get currently active filter
function getActiveFilter() {
    const activeButton = document.querySelector('.filter-btn.active');
    return activeButton ? activeButton.getAttribute('data-filter') : 'all';
}

// Filter and display games based on search and filter
function filterAndDisplayGames(searchTerm, filterType) {
    let filteredGames = games;
    
    // Apply search filter
    if (searchTerm) {
        filteredGames = filteredGames.filter(game => 
            game.name.toLowerCase().includes(searchTerm) || 
            game.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply type filter
    if (filterType !== 'all') {
        filteredGames = filteredGames.filter(game => game.type === filterType);
    }
    
    displayGames(filteredGames, searchTerm);
}

// Display filtered games
function displayGames(gamesToShow, searchTerm = '') {
    const gamesGrid = document.getElementById('gamesGrid');
    
    if (!gamesGrid) return;
    
    gamesGrid.innerHTML = '';
    
    if (gamesToShow.length === 0) {
        showNoGamesMessage(searchTerm);
        return;
    }
    
    gamesToShow.forEach(game => {
        const gameCard = createGameCard(game);
        
        // Highlight search term if present
        if (searchTerm) {
            highlightSearchTerm(gameCard, searchTerm);
        }
        
        gamesGrid.appendChild(gameCard);
    });
}

// Show message when no games found
function showNoGamesMessage(searchTerm) {
    const gamesGrid = document.getElementById('gamesGrid');
    const message = searchTerm ? 
        `No games found for "${searchTerm}"` : 
        'No games found';
    
    gamesGrid.innerHTML = `
        <div class="no-games">
            <div class="sad-emoji">😕</div>
            <p>${message}</p>
            <button class="filter-btn" onclick="clearSearch()">Show All Games</button>
        </div>
    `;
}

// Highlight search term in game cards
function highlightSearchTerm(gameCard, searchTerm) {
    const title = gameCard.querySelector('.game-title');
    const description = gameCard.querySelector('.game-description');
    
    if (title) {
        title.innerHTML = highlightText(title.textContent, searchTerm);
    }
    if (description) {
        description.innerHTML = highlightText(description.textContent, searchTerm);
    }
}

// Highlight text with search term
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

// Escape special characters for regex
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Clear search and show all games
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Reset to "All Games" filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === 'all') {
            btn.classList.add('active');
        }
    });
    
    loadGames();
}

// Initialize smooth scrolling for navigation
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Simple share function
function shareWebsite() {
    const websiteUrl = window.location.href;
    const shareText = "Check out FunZone - Amazing free and premium mobile games! 🎮 " + websiteUrl;
    
    if (navigator.share) {
        navigator.share({
            title: 'FunZone Games',
            text: shareText,
            url: websiteUrl
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Link copied to clipboard! 📋\nShare with your friends!');
        }).catch(() => {
            // Fallback for older browsers
            prompt('Copy this link to share:', shareText);
        });
    }
}

// Simple cookie functions (if needed later)
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}