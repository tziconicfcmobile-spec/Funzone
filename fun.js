// Games Data - Badilisha na games zako halisi
const games = [
    {
        id: 1,
        name: "Epic Adventure",
        image: "one.jpg",
        description: "Embark on an amazing journey through magical lands filled with challenges and treasures.",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME1_LINK/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 2,
        name: "Racing Extreme",
        image: "logo.jpg", 
        description: "Experience the thrill of high-speed racing with stunning graphics and realistic physics.",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME2_LINK/file",
        type: "premium",
        pinRequired: true
    },
    {
        id: 3,
        name: "Puzzle Master",
        image: "images/game3.jpg",
        description: "Challenge your brain with hundreds of mind-bending puzzles and brain teasers.",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME3_LINK/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 4,
        name: "Space Warriors",
        image: "images/game4.jpg",
        description: "Fight alien invaders in this action-packed space shooter with amazing visuals.",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME4_LINK/file",
        type: "premium", 
        pinRequired: true
    },
    {
        id: 5,
        name: "Zombie Survival",
        image: "images/game5.jpg",
        description: "Survive the zombie apocalypse in this thrilling survival horror game.",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME5_LINK/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 6,
        name: "Football Pro 2024",
        image: "images/game6.jpg",
        description: "The most realistic football simulation with all your favorite teams and players.",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME6_LINK/file",
        type: "premium",
        pinRequired: true
    }
];

// Global variables
let currentDownloadGame = null;
let countdownInterval = null;

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
    const buttonText = game.pinRequired ? 'Download (Need PIN)' : 'Download Now';
    
    gameCard.innerHTML = `
        <div class="game-image-container">
            <img src="${game.image}" alt="${game.name}" class="game-image" onerror="handleImageError(this)">
            <div class="game-badge ${badgeClass}">${badgeText}</div>
        </div>
        <div class="game-content">
            <h3 class="game-title">${game.name}</h3>
            <p class="game-description">${game.description}</p>
            <div class="pin-notice ${noticeClass}">${noticeText}</div>
            <button class="download-btn" onclick="showAdAndDownload(${game.id})">
                ${buttonText}
            </button>
        </div>
    `;
    
    return gameCard;
}

// Handle image loading errors
function handleImageError(img) {
    console.log(`Image failed to load: ${img.src}`);
    // You can set a default image here if you want
    // img.src = 'images/default-game.jpg';
}

// Initialize search functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    
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
    
    title.innerHTML = highlightText(title.textContent, searchTerm);
    description.innerHTML = highlightText(description.textContent, searchTerm);
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
    document.getElementById('searchInput').value = '';
    
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
                const offsetTop = targetElement.offsetTop - 80; // Adjust for navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Show ad popup before download
function showAdAndDownload(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    currentDownloadGame = game;
    showAdPopup();
}

// Show ad popup
function showAdPopup() {
    const popup = document.getElementById('adPopup');
    popup.style.display = 'flex';
    
    startCountdown();
}

// Start countdown timer
function startCountdown() {
    let seconds = 15;
    const countdownElement = document.getElementById('countdown');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Reset button state
    downloadBtn.disabled = true;
    downloadBtn.textContent = `Download Now (${seconds})`;
    
    // Clear any existing interval
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    
    countdownInterval = setInterval(() => {
        seconds--;
        countdownElement.textContent = seconds;
        downloadBtn.textContent = `Download Now (${seconds})`;
        
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            downloadBtn.disabled = false;
            downloadBtn.textContent = 'Download Now';
        }
    }, 1000);
}

// Close ad popup
function closeAd() {
    const popup = document.getElementById('adPopup');
    popup.style.display = 'none';
    
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    
    currentDownloadGame = null;
}

// Proceed with download after ad
function proceedDownload() {
    if (!currentDownloadGame) return;
    
    // Open download link
    window.open(currentDownloadGame.downloadLink, '_blank');
    
    // Track download (optional)
    trackDownload(currentDownloadGame);
    
    // Close popup
    closeAd();
}

// Track download statistics (optional)
function trackDownload(game) {
    console.log(`Download started: ${game.name}`);
    // Here you can add analytics tracking
}

// Add search highlight style
const style = document.createElement('style');
style.textContent = `
    .search-highlight {
        background: #fff3cd;
        padding: 0.1rem 0.2rem;
        border-radius: 3px;
        font-weight: bold;
    }
`;
document.head.appendChild(style);