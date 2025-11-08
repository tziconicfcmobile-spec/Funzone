// Games Data - Badilisha na games zako halisi
const games = [
    {
        id: 1,
        name: "efootball 26 PPSSPP",
        image: "e.jpg",
        description: "efootball 26 | offline game | PPSSPP EMULATOR.",
        downloadLink: "https://www.mediafire.com/file/xet3s2ofesp5do4/eFootball_2026_GAME.zip/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 2,
        name: "fts 25 nbc mod",
        image: "fts.jpg",
        description: "game la mpira la fts la nbc la 2025 timu na jezi zote zipo.",
        downloadLink: "https://www.mediafire.com/file/2kau0ceh13ycxtv/FTS_25_NBC.7z/file",
        type: "premium",
        pinRequired: true
    },
    {
        id: 5,
        name: "bright memory infinite",
        image: "b.png",
        description: "the most action game download and play for free .",
        downloadLink: "https://www.mediafire.com/file/jl6mdl8sftoe9ec/bright-memory-infinite-1.31-mod-menu-5play.7z/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 3,
        name: "UFC 5 PPSSPP",
        image: "u.jpg",
        description: "ufc 5 | OFFLINE | PPSSPP EMULATOR .",
        downloadLink: "https://www.mediafire.com/file/lzfbfs7irv0w2f8/UFC_5_PSP_BY_FUNZONE.7z/file",
        type: "premium",
        pinRequired: true
    },
    {
        id: 9,
        name: "god hand",
        image: "hand.jpg",
        description: "god hand.",
        downloadLink: "https://www.mediafire.com/file/9gefs9uyr0o5co7/GOD+HAND+HACK+EDITION.iso/file",
        type: "free",
        pinRequired: false
    },
     {
        id: 4,
        name: "pinodeire world bus",
        image: "bus.jpg",
        description: "Enjoy game Kali la basi la Tanzania mod ambalo Lina mabasi yote na ramani halisi .",
        downloadLink: "https://www.mediafire.com/file/6z2v4l72dt6dhzj/pinodeire_World_bus_by_funzone.7z/file",
        type: "premium",
        pinRequired: true
    },
    {
        id: 10,
        name: "dfl 26",
        image: "dfl.jpg",
        description: "not yet for download .",
        downloadLink: "dfl.html",
        type: "free",
        pinRequired: false
    },   
    {
        id: 6,
        name: "mortal combat",
        image: "mortal.png",
        description: "not yet for download .",
        downloadLink: "",
        type: "premium", 
        pinRequired: true
    },
     
    {
        id: 7,
        name: "god of war 1",
        image: "war.jpg",
        description: "god of war 1 .",
        downloadLink: "https://www.mediafire.com/file/zsj8ckt6ftdlhrq/God+of+War+1+Vampire+Edition.iso/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 8,
        name: "fifa 26",
        image: "fc.jpg",
        description: "not yet for download ",
        downloadLink:"fifa.html",
        type: "premium",
        pinRequired: true
    },
    
];

// Initialize website when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadGames();
    initSearch();
    initFilters();
    initSmoothScrolling();
    handleDirectGameLinks();
});

// Load games into the grid
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;
    
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
    gameCard.id = `game-${game.id}`;
    
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
            
            <div class="game-actions">
                <a href="${game.downloadLink}" class="download-btn" target="_blank">
                    Download Now
                </a>
                <button class="share-btn" onclick="shareGame(${game.id})">
                    📤 Share Link
                </button>
            </div>
        </div>
    `;
    
    return gameCard;
}

// Handle image loading errors
function handleImageError(img) {
    console.log(`Image failed to load: ${img.src}`);
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
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
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
    
    if (searchTerm) {
        filteredGames = filteredGames.filter(game => 
            game.name.toLowerCase().includes(searchTerm) || 
            game.description.toLowerCase().includes(searchTerm)
        );
    }
    
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

// Handle direct game links from WhatsApp
function handleDirectGameLinks() {
    const hash = window.location.hash;
    
    if (hash) {
        const gameId = parseInt(hash.replace('#game-', ''));
        
        if (!isNaN(gameId) && gameId >= 1 && gameId <= 6) {
            setTimeout(() => {
                const gamesSection = document.getElementById('games');
                if (gamesSection) {
                    gamesSection.scrollIntoView({ behavior: 'smooth' });
                }
                
                highlightGame(gameId);
            }, 1000);
        }
    }
}

// Highlight specific game
function highlightGame(gameId) {
    document.querySelectorAll('.game-card').forEach(card => {
        card.classList.remove('game-highlight');
    });
    
    const gameCard = document.getElementById(`game-${gameId}`);
    if (gameCard) {
        gameCard.classList.add('game-highlight');
        gameCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Share individual game
function shareGame(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    const gameUrl = `${window.location.origin}${window.location.pathname}#game-${gameId}`;
    const shareText = `Check out "${game.name}" on FunZone! 🎮\n${gameUrl}`;
    
    if (navigator.share) {
        navigator.share({
            title: game.name,
            text: shareText,
            url: gameUrl
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert(`Link for "${game.name}" copied to clipboard! 📋\nShare it on WhatsApp!`);
        }).catch(() => {
            prompt('Copy this link to share:', shareText);
        });
    }
}

// Share entire website
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
            alert('Website link copied to clipboard! 📋\nShare it with your friends!');
        }).catch(() => {
            prompt('Copy this link to share:', shareText);
        });
    }
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