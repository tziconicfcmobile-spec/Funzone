// Sample games data - REPLACE WITH YOUR ACTUAL GAMES FROM MEDIAFIRE
const games = [
    {
        id: 1,
        name: "Epic Adventure Game",
        image: "https://via.placeholder.com/500x300/667eea/white?text=Epic+Adventure",
        description: "Embark on an amazing journey through magical lands - FREE, no PIN required!",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME1_LINK/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 2,
        name: "Racing Extreme",
        image: "https://via.placeholder.com/500x300/f093fb/white?text=Racing+Extreme",
        description: "High-speed racing with stunning graphics - Contact for PIN",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME2_LINK/file",
        type: "premium",
        pinRequired: true
    },
    {
        id: 3,
        name: "Puzzle Master",
        image: "https://via.placeholder.com/500x300/4ecdc4/white?text=Puzzle+Master",
        description: "Challenge your brain with mind-bending puzzles - FREE, no PIN",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME3_LINK/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 4,
        name: "Space Warriors",
        image: "https://via.placeholder.com/500x300/ff6b6b/white?text=Space+Warriors",
        description: "Fight alien invaders in space - Contact for PIN",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME4_LINK/file",
        type: "premium",
        pinRequired: true
    },
    {
        id: 5,
        name: "Zombie Survival",
        image: "https://via.placeholder.com/500x300/45b7d1/white?text=Zombie+Survival",
        description: "Survive zombie apocalypse - FREE, no PIN required!",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME5_LINK/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 6,
        name: "Football Pro 2024",
        image: "https://via.placeholder.com/500x300/96c93d/white?text=Football+Pro",
        description: "Realistic football simulation - Contact for PIN",
        downloadLink: "https://www.mediafire.com/file/YOUR_GAME6_LINK/file",
        type: "premium",
        pinRequired: true
    }
];

// Current game to download
let currentDownloadGame = null;

// Load games into the grid
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = ''; // Clear existing games
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        
        // Determine badge color based on game type
        const badgeColor = game.type === 'free' ? '#28a745' : '#ffc107';
        const badgeText = game.type === 'free' ? 'FREE' : 'PREMIUM';
        
        gameCard.innerHTML = `
            <div class="game-image-container">
                <div class="game-image" style="background: linear-gradient(45deg, ${badgeColor}, #667eea)">
                    <span class="image-text">${game.name}</span>
                </div>
                <div class="game-badge" style="background: ${badgeColor}">${badgeText}</div>
            </div>
            <div class="game-content">
                <h3 class="game-title">${game.name}</h3>
                <p class="game-description">${game.description}</p>
                ${game.pinRequired ? 
                    '<p class="pin-notice">🔒 PIN Required - Contact us to get PIN</p>' : 
                    '<p class="pin-notice">✅ No PIN Required - Download & Play!</p>'
                }
                <button class="download-btn" onclick="showAdAndDownload(${game.id})">
                    ${game.pinRequired ? 'Download (Need PIN)' : 'Download Now'}
                </button>
            </div>
        `;
        
        gamesGrid.appendChild(gameCard);
    });
}

// Function to show ad popup before download
function showAdAndDownload(gameId) {
    const game = games.find(g => g.id === gameId);
    currentDownloadGame = game;
    
    // Create ad popup
    const adPopup = document.createElement('div');
    adPopup.className = 'ad-popup';
    adPopup.id = 'adPopup';
    adPopup.innerHTML = `
        <div class="popup-content">
            <div class="popup-header">
                <h3>Support Our Website</h3>
                <button class="close-btn" onclick="closeAd()">×</button>
            </div>
            <div class="popup-ad">
                <p>🎮 Thanks for downloading! Please support us by watching this ad.</p>
                <div class="ad-placeholder">
                    <p>ADVERTISEMENT</p>
                    <!-- AdSense Ad Unit -->
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_AD_CLIENT_ID"
                            crossorigin="anonymous"></script>
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="ca-pub-YOUR_AD_CLIENT_ID"
                         data-ad-slot="1234567890"
                         data-ad-format="auto"></ins>
                    <script>
                         (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </div>
                <p class="ad-timer">Download will start in <span id="countdown">5</span> seconds...</p>
            </div>
            <div class="popup-footer">
                <button class="skip-btn" onclick="closeAd()">Skip Ad</button>
                <button class="continue-btn" onclick="proceedDownload()">Download Now</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(adPopup);
    
    // Start countdown
    startCountdown();
}

// Countdown timer for ad
function startCountdown() {
    let seconds = 15;
    const countdownElement = document.getElementById('countdown');
    const continueBtn = document.querySelector('.continue-btn');
    
    // Disable continue button initially
    continueBtn.disabled = true;
    continueBtn.style.opacity = '0.6';
    
    const countdownInterval = setInterval(() => {
        seconds--;
        countdownElement.textContent = seconds;
        
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            continueBtn.disabled = false;
            continueBtn.style.opacity = '1';
            continueBtn.textContent = 'Download Now';
        }
    }, 1000);
}

// Close ad popup
function closeAd() {
    const popup = document.getElementById('adPopup');
    if (popup) {
        popup.remove();
    }
    currentDownloadGame = null;
}

// Proceed with download after ad
function proceedDownload() {
    if (currentDownloadGame) {
        // Open download link in new tab
        window.open(currentDownloadGame.downloadLink, '_blank');
        
        // Close popup
        closeAd();
        
        // Track download (optional)
        console.log(`Download started: ${currentDownloadGame.name}`);
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // For external links, don't prevent default
            if (link.getAttribute('href').startsWith('http') || link.getAttribute('href').includes('.html')) {
                return;
            }
            
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Filter games by type
function filterGames(type) {
    const filteredGames = type === 'all' ? games : games.filter(game => game.type === type);
    
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';
    
    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        
        const badgeColor = game.type === 'free' ? '#28a745' : '#ffc107';
        const badgeText = game.type === 'free' ? 'FREE' : 'PREMIUM';
        
        gameCard.innerHTML = `
            <div class="game-image-container">
                <div class="game-image" style="background: linear-gradient(45deg, ${badgeColor}, #667eea)">
                    <span class="image-text">${game.name}</span>
                </div>
                <div class="game-badge" style="background: ${badgeColor}">${badgeText}</div>
            </div>
            <div class="game-content">
                <h3 class="game-title">${game.name}</h3>
                <p class="game-description">${game.description}</p>
                ${game.pinRequired ? 
                    '<p class="pin-notice">🔒 PIN Required - Contact us to get PIN</p>' : 
                    '<p class="pin-notice">✅ No PIN Required - Download & Play!</p>'
                }
                <button class="download-btn" onclick="showAdAndDownload(${game.id})">
                    ${game.pinRequired ? 'Download (Need PIN)' : 'Download Now'}
                </button>
            </div>
        `;
        
        gamesGrid.appendChild(gameCard);
    });
}

// Search games function
function searchGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredGames = games.filter(game => 
        game.name.toLowerCase().includes(searchTerm) || 
        game.description.toLowerCase().includes(searchTerm)
    );
    
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';
    
    if (filteredGames.length === 0) {
        gamesGrid.innerHTML = '<div class="no-games"><p>No games found matching your search.</p></div>';
        return;
    }
    
    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        
        const badgeColor = game.type === 'free' ? '#28a745' : '#ffc107';
        const badgeText = game.type === 'free' ? 'FREE' : 'PREMIUM';
        
        gameCard.innerHTML = `
            <div class="game-image-container">
                <div class="game-image" style="background: linear-gradient(45deg, ${badgeColor}, #667eea)">
                    <span class="image-text">${game.name}</span>
                </div>
                <div class="game-badge" style="background: ${badgeColor}">${badgeText}</div>
            </div>
            <div class="game-content">
                <h3 class="game-title">${game.name}</h3>
                <p class="game-description">${game.description}</p>
                ${game.pinRequired ? 
                    '<p class="pin-notice">🔒 PIN Required - Contact us to get PIN</p>' : 
                    '<p class="pin-notice">✅ No PIN Required - Download & Play!</p>'
                }
                <button class="download-btn" onclick="showAdAndDownload(${game.id})">
                    ${game.pinRequired ? 'Download (Need PIN)' : 'Download Now'}
                </button>
            </div>
        `;
        
        gamesGrid.appendChild(gameCard);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadGames();
    initSmoothScrolling();
    
    // Add search functionality if search input exists
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', searchGames);
    }
    
    // Add filter buttons if they exist
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter');
            filterGames(filterType);
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Contact form handler
function handleContactForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send this data to a server
    console.log('Contact form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! We will contact you soon.');
    event.target.reset();
}

// Game statistics (optional)
const gameStats = {
    totalDownloads: 0,
    trackDownload: function() {
        this.totalDownloads++;
        console.log(`Total downloads: ${this.totalDownloads}`);
    }
};