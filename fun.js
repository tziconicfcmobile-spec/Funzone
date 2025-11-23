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
        description: "game la mpira la fts la nbc la 2025 timu na jezi zote zipo, wasiliana nasi kupata pin .",
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
        id: 23,
        name: "fc 26 mod fifa 26",
        image: "26.jpg",
        description: "download and play your favorite football game fc 26 mod fifa 26 | offline |",
        downloadLink: "26.html",
        type: "premium",
        pinRequired: true 
    },
    {
        id: 11,
        name: "dls 26 mod fc 26",
        image: "dls.jpg",
        description: "download and play your favorite football game dls 26 mod fc 26 | offline |",
        downloadLink: "https://www.mediafire.com/file/fcn4gxlcdnb1zxr/DLS_26_MOD_FC_26.zip/file?dkey=g7mnepfhe8p&r=1083",
        type: "free",
        pinRequired: false
    },
    {
        id: 3,
        name: "UFC 5 PPSSPP",
        image: "u.jpg",
        description: "ufc 5 | OFFLINE | PPSSPP EMULATOR, wasiliana nasi kupata pin .",
        downloadLink: "https://www.mediafire.com/file/lzfbfs7irv0w2f8/UFC_5_PSP_BY_FUNZONE.7z/file",
        type: "premium",
        pinRequired: true
    },
    {
        id: 12,
        name: "GTA San Andreas",
        image: "gta.jpg",
        description: "download and enjoy the most beautiful GTA games of all time",
        downloadLink: "https://www.mediafire.com/file/041u4yh2l4l79kl/GTA_San_Andreas_Mod_2.11.277-RisTechy.com.apk/file",
        type: "free",
        pinRequired: false
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
        description: "Enjoy game Kali la basi la Tanzania mod ambalo Lina mabasi yote na ramani halisi wasiliana nasi kupata pin.",
        downloadLink: "https://www.mediafire.com/file/6z2v4l72dt6dhzj/pinodeire_World_bus_by_funzone.7z/file",
        type: "premium",
        pinRequired: true
    },
    {
        id: 6,
        name: "mortal combat",
        image: "mortal.png",
        description: "download na huenjoy game lako la mortal kombat",
        downloadLink: "#",
        type: "free", 
        pinRequired: false
    },
    {
        id: 10,
        name: "dfl 26",
        image: "dfl.jpg",
        description: "game Kali la dfl wasiliana nasi kupata pin",
        downloadLink: "dfl.html",
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
        id: 14,
        name: "GTA v mod",
        image: "gtav.jpg",
        description: "gta san Andreas mod GTA v download na huenjoy, wasiliana nasi kwa pin",
        downloadLink: "gtav.html",
        type: "premium",
        pinRequired: true
    },
    {
        id: 8,
        name: "fifa 16 mod fc 26",
        image: "fc.jpg",
        description: "game la fifa 26 download na huenjoy",
        downloadLink: "fifa.html",
        type: "free",
        pinRequired: false
    },
    {
        id: 19,
        name: "max Payne",
        image: "max.jpg",
        description: "download max Payne game, pin you will find out in my you-tube channel",
        downloadLink: "https://www.mediafire.com/file/igurijugpfungvp/max+Payne+(+funzone).zip/file",
        type: "premium",
        pinRequired: true
    },
    {
        id: 24,
        name: "APEX RACING (UNLIMITED MONEY)",
        image: "apex.jpg",
        description: "download and play for free your favorite racing game which is Apex racing unlimited money ",
        downloadLink: "https://statics.liteapks.co/Apex%20Racing/Apex-Racing-v1.20.3-mod.apk",
        type: "free",
        pinRequired: false
    },
    {
        id: 16,
        name: "European front remastered",
        image: "eu.jpg",
        description: "download and enjoy european front remastered",
        downloadLink: "https://www.mediafire.com/file/jzcbzet1panbvzx/EUROPE_FRONT_REMASTERED_1.0.2_MOD_BY_RADJA_GAMERZ.zip/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 18,
        name: "fts 26",
        image: "fts26.jpg",
        description: "your favorite game of fts 26 download now and enjoy",
        downloadLink: "https://www.mediafire.com/file/ablf3eqfv1jr50d/FTS_26_Difficult_LN30_DROID_New_Update.zip/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 22,
        name: "wwe",
        image: "wwe.jpg",
        description: " download game lako pendwa la wwe kwa free na huenjoy wakatu unacheza",
        downloadLink: "https://dl.apkvision.org/wwe-2k25-netflix-edition/WWE-2K25-v0.836.0-unlocked-apkvision.apk",
        type: "free",
        pinRequired: false
    },
    {
        id: 15,
        name: "tomb raider",
        image: "tomb.jpg",
        description: "download and enjoy tomb rider PSP games for free",
        downloadLink: "https://www.mediafire.com/file/es2j8qzf51o5aol/Tomb+Raider+-+Anniversary+(USA)+(PSP)+(PSN).zip/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 13,
        name: "Ea fc 26 ppsspp",
        image: "eapsp.jpg",
        description: "download and enjoy ea fc 26 for free offline access",
        downloadLink: "eapsp.html",
        type: "free",
        pinRequired: false
    },
    {
        id: 21,
        name: "mortal Kombat unchained ppsspp",
        image: "unchained.jpg",
        description: "download mortal Kombat unchained PSP for free",
        downloadLink: "https://www.mediafire.com/file/kfy8t8f45fu49w3/1SOPSPGAME%252310.zip/file",
        type: "free",
        pinRequired: false
    },
    {
        id: 20,
        name: "Amizing spider-man 2",
        image: "spider.jpg",
        description: "download spider-man amazing 2 for free and enjoy while playing it",
        downloadLink: "spider.html",
        type: "free",
        pinRequired: false
    },
    {
        id: 17,
        name: "dls 26 wydad mod",
        image: "wydad.jpg",
        description: "download and enjoy dls game wydad mod for free",
        downloadLink: "dls.html",
        type: "free",
        pinRequired: false
    },
];

// Function to handle all download links - WORKS WITH ANY LINK (NO PIN PROMPT)
function handleDownload(gameId, downloadLink) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    // Handle different types of links - DIRECT DOWNLOAD WITHOUT PIN
    if (downloadLink.startsWith('http')) {
        // External links (MediaFire, APKVision, etc.)
        window.open(downloadLink, '_blank');
    } else if (downloadLink.endsWith('.html')) {
        // Internal HTML pages
        window.location.href = downloadLink;
    } else if (downloadLink === '#') {
        // Links that are not ready
        alert('⚠️ Download link for this game is not available yet. Please check back later or contact us.');
    } else {
        // Fallback for any other links
        window.open(downloadLink, '_blank');
    }
}

// Function to get random trending games (changes every 10 seconds)
function getRandomTrendingGames() {
    // Create a shuffled array of games
    const shuffledGames = [...games].sort(() => Math.random() - 0.5);
    
    // Select 5 random games
    return shuffledGames.slice(0, 5);
}

// Simple string hash function for consistent random selection
function stringHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

// Function to check if trending games need to be updated
function shouldUpdateTrendingGames() {
    const lastUpdate = localStorage.getItem('trendingLastUpdate');
    const today = new Date().toDateString();
    
    if (!lastUpdate || lastUpdate !== today) {
        localStorage.setItem('trendingLastUpdate', today);
        return true;
    }
    return false;
}

// Initialize website when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadGames();
    loadTrendingGames();
    initSearch();
    initFilters();
    initSmoothScrolling();
    handleDirectGameLinks();
    initThemeToggle();
    
    // Auto-update trending games every 10 seconds
    setInterval(loadTrendingGames, 10000);
    
    // Check and update trending games daily
    if (shouldUpdateTrendingGames()) {
        console.log('Updating trending games for today...');
    }
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

// Load trending games with marquee effect
function loadTrendingGames() {
    const trendingTrack = document.getElementById('trendingTrack');
    if (!trendingTrack) return;
    
    trendingTrack.innerHTML = '';
    
    // Get random trending games (changes every time)
    const trendingGames = getRandomTrendingGames();
    
    // Add trending property to games for display
    trendingGames.forEach(game => {
        game.trending = true;
    });
    
    // Duplicate trending games for smooth continuous marquee
    const allTrendingGames = [...trendingGames, ...trendingGames, ...trendingGames];
    
    allTrendingGames.forEach(game => {
        const trendingCard = createTrendingCard(game);
        trendingTrack.appendChild(trendingCard);
    });
    
    // Update trending games counter in console
    console.log(`Updated trending games (${trendingGames.length}):`, trendingGames.map(g => g.name));
}

// Create trending game card
function createTrendingCard(game) {
    const trendingCard = document.createElement('div');
    trendingCard.className = 'trending-card';
    
    const badgeClass = game.type === 'free' ? 'badge-free' : 'badge-premium';
    const badgeText = game.type === 'free' ? 'FREE' : 'PREMIUM';
    
    trendingCard.innerHTML = `
        <div class="game-image-container">
            <img src="${game.image}" alt="${game.name}" class="game-image" onerror="handleImageError(this)">
            <div class="trending-badge">🔥 TRENDING</div>
            <div class="game-badge ${badgeClass}">${badgeText}</div>
        </div>
        <div class="game-content">
            <h3 class="game-title">${game.name}</h3>
            <p class="game-description">${game.description}</p>
            <div class="game-actions">
                <button class="download-btn" onclick="handleDownload(${game.id}, '${game.downloadLink}')">
                    Download Now
                </button>
                <button class="share-btn" onclick="shareGame(${game.id})">
                    📤 Share
                </button>
            </div>
        </div>
    `;
    
    return trendingCard;
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
        <div class="game-card-content">
            <div class="game-image-container">
                <img src="${game.image}" alt="${game.name}" class="game-image" onerror="handleImageError(this)">
                <div class="game-badge ${badgeClass}">${badgeText}</div>
            </div>
            <div class="game-content">
                <h3 class="game-title">${game.name}</h3>
                <p class="game-description">${game.description}</p>
                <div class="pin-notice ${noticeClass}">${noticeText}</div>
                
                <div class="game-actions">
                    <button class="download-btn" onclick="handleDownload(${game.id}, '${game.downloadLink}')">
                        Download Now
                    </button>
                    <button class="share-btn" onclick="shareGame(${game.id})">
                        📤 Share Link
                    </button>
                </div>
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

// Initialize theme toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    // Set default theme to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButton(newTheme);
    });
}

// Update theme button icon
function updateThemeButton(theme) {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
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
        
        if (!isNaN(gameId) && gameId >= 1 && gameId <= 10000000) {
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

// ===== AI ASSISTANT FUNCTIONALITY =====
let isAssistantOpen = false;

function toggleAssistant() {
    const assistantWindow = document.getElementById('assistantWindow');
    isAssistantOpen = !isAssistantOpen;
    
    if (isAssistantOpen) {
        assistantWindow.style.display = 'flex';
        setTimeout(() => {
            assistantWindow.style.transform = 'translateY(0)';
            assistantWindow.style.opacity = '1';
        }, 10);
        document.getElementById('userQuestion').focus();
    } else {
        assistantWindow.style.transform = 'translateY(20px)';
        assistantWindow.style.opacity = '0';
        setTimeout(() => {
            assistantWindow.style.display = 'none';
        }, 300);
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        handleUserQuestion();
    }
}

function askQuickQuestion(question) {
    document.getElementById('userQuestion').value = question;
    handleUserQuestion();
}

function handleUserQuestion() {
    const userInput = document.getElementById('userQuestion');
    const question = userInput.value.trim();
    
    if (!question) return;
    
    // Display user message
    addMessage(question, 'user');
    userInput.value = '';
    
    // Process and respond
    setTimeout(() => {
        const response = generateAIResponse(question);
        addMessage(response, 'bot');
    }, 1000);
}

function addMessage(content, sender) {
    const messagesContainer = document.getElementById('assistantMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    messageDiv.innerHTML = `
        <div class="message-content">${content}</div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIResponse(question) {
    const lowerQuestion = question.toLowerCase();
    
    // 🔐 PIN-RELATED QUESTIONS - MUHIMU KABISA!
    if (lowerQuestion.includes('pin') || lowerQuestion.includes('pini') || 
        lowerQuestion.includes('premium') || lowerQuestion.includes('lipia') ||
        lowerQuestion.includes('bei') || lowerQuestion.includes('pesa') ||
        lowerQuestion.includes('money') || lowerQuestion.includes('cost') ||
        lowerQuestion.includes('price') || lowerQuestion.includes('unlock') ||
        lowerQuestion.includes('locked') || lowerQuestion.includes('fungua')) {
        
        return `🔐 <strong>KUHUSU PIN ZA GAMES PREMIUM:</strong><br><br>
        Kwa kupata PIN ya game yoyote premium:<br>
        • <strong>Tuma neno "PIN" kwenye WhatsApp: <span style="color:#667eea">0671131355</span></strong><br>
        • Utapata PIN haraka kwa bei nafuu<br>
        • Tunakupigia simu mara moja ukiitumia<br>
        • Pia tunaweza kukusaidia kuinstall game<br><br>
        <em>📞 Piga simu au tuma WhatsApp: <strong>0671131355</strong></em>`;
    }
    
    // 🆓 FREE GAMES
    if (lowerQuestion.includes('free') || lowerQuestion.includes('bure') || 
        lowerQuestion.includes('hapana pesa') || lowerQuestion.includes('no money') ||
        lowerQuestion.includes('complimentary') || lowerQuestion.includes('without pay')) {
        return `🆓 <strong>GAMES ZA BURE:</strong><br><br>
        Tuna games nyingi za bure! Zifuatazo ni baadhi tu:<br>
        • eFootball 26 PPSSPP<br>
        • Bright Memory Infinite<br>
        • DLS 26 MOD FC 26<br>
        • GTA San Andreas<br>
        • God Hand<br>
        • God of War 1<br>
        • Mortal Kombat<br>
        • Tomb Raider<br>
        • European Front Remastered<br>
        • FTS 26<br><br>
        <em>Bonyeza "FREE GAMES" kwenye filter au tafuta game unayotaka!</em>`;
    }
    
    // 📥 DOWNLOAD HELP
    if (lowerQuestion.includes('download') || lowerQuestion.includes('pakua') ||
        lowerQuestion.includes('install') || lowerQuestion.includes('weka') ||
        lowerQuestion.includes('sakinisha') || lowerQuestion.includes('set up') ||
        lowerQuestion.includes('saved') || lowerQuestion.includes('save')) {
        return `📥 <strong>MSAADA WA DOWNLOAD & INSTALLATION:</strong><br><br>
        Ikiwa una shida ya kudownload au kuinstall:<br>
        • Hakikisha una internet nzuri na imetosheleza<br>
        • Tumia browser ya Chrome kwa download bora<br>
        • Angalia storage ya simu inatosheleze<br>
        • Kwa games za PSP, unahitaji PPSSPP emulator kwanza<br>
        • Ikiwa file ni .zip au .rar, unahitaji app ya kufungua<br>
        • Kama bado shida, piga: <strong>0671131355</strong>`;
    }
    
    // 🎮 GAME RECOMMENDATIONS
    if (lowerQuestion.includes('pendekeza') || lowerQuestion.includes('zuri') ||
        lowerQuestion.includes('kali') || lowerQuestion.includes('bora') ||
        lowerQuestion.includes('mpira') || lowerQuestion.includes('soka') ||
        lowerQuestion.includes('football') || lowerQuestion.includes('action') ||
        lowerQuestion.includes('adventure') || lowerQuestion.includes('racing') ||
        lowerQuestion.includes('sports') || lowerQuestion.includes('fighting')) {
        return `🎮 <strong>GAMES BORA KULINGANA NA AINA:</strong><br><br>
        <strong>Kwa wapenzi wa MPIRA:</strong><br>
        • eFootball 26 PPSSPP (BURE)<br>
        • FTS 25 NBC Mod (PREMIUM)<br>
        • DLS 26 MOD FC 26 (BURE)<br>
        • FC 26 Mod FIFA 26 (PREMIUM)<br><br>
        <strong>Kwa wapenzi wa ACTION:</strong><br>
        • God of War 1 (BURE)<br>
        • Bright Memory Infinite (BURE)<br>
        • Mortal Kombat (BURE)<br>
        • UFC 5 (PREMIUM)<br><br>
        <strong>Kwa wapenzi wa RACING/DRIVING:</strong><br>
        • Pinodeire World Bus (PREMIUM)<br><br>
        <em>Unaweza kutumia search kwa kupata games za aina unayotaka!</em>`; 
    }
    
    // 📱 TECHNICAL SUPPORT
    if (lowerQuestion.includes('tatizo') || lowerQuestion.includes('shida') ||
        lowerQuestion.includes('haifanyi') || lowerQuestion.includes('crash') ||
        lowerQuestion.includes('error') || lowerQuestion.includes('siwezi') ||
        lowerQuestion.includes('not working') || lowerQuestion.includes('problem') ||
        lowerQuestion.includes('issue') || lowerQuestion.includes('fix') ||
        lowerQuestion.includes('broken') || lowerQuestion.includes('corrupt')) {
        return `🔧 <strong>MSAADA WA KI-TECHNICAL:</strong><br><br>
        Kama game haifanyi kazi vizuri:<br>
        • Hakikisha simu yako ina Android 6.0 au juu zaidi<br>
        • Angalia storage inatosheleze (angalia kwenye Settings)<br>
        • Kama ni game la PSP, weka PPSSPP emulator kwanza<br>
        • Jaribu kui-restart simu yako<br>
        • Hakikisha umedownload game vizuri<br>
        • Ikiwa bado shida, piga: <strong>0671131355</strong> kwa msaada wa haraka`;
    }
    
    // 🆕 NEW GAMES & UPDATES
    if (lowerQuestion.includes('mpya') || lowerQuestion.includes('update') ||
        lowerQuestion.includes('latest') || lowerQuestion.includes('mengine') ||
        lowerQuestion.includes('new') || lowerQuestion.includes('fresh') ||
        lowerQuestion.includes('recent') || lowerQuestion.includes('added')) {
        return `🆕 <strong>GAMES MPYA & UPDATES:</strong><br><br>
        Tunazidi kuongeza games mpya kila siku! Baadhi ya games mpya:<br>
        • FTS 26 - Update mpya<br>
        • DLS 26 MOD FC 26<br>
        • eFootball 26 PPSSPP<br>
        • Bright Memory Infinite<br><br>
        Tunatafuta kuongeza zaidi kama:<br>
        • FIFA 26 updates<br>
        • GTA VI (inapotoka)<br>
        • Call of Duty Mobile mods<br>
        • Na mengine mengi!<br><br>
        <em>Fuata YouTube channel yetu kwa updates: @funzone-g7</em>`;
    }
    
    // ℹ️ ABOUT FUNZONE
    if (lowerQuestion.includes('funzone') || lowerQuestion.includes('wenu') ||
        lowerQuestion.includes('legit') || lowerQuestion.includes('salama') ||
        lowerQuestion.includes('safe') || lowerQuestion.includes('trust') ||
        lowerQuestion.includes('real') || lowerQuestion.includes('authentic') ||
        lowerQuestion.includes('about') || lowerQuestion.includes('kuhusu')) {
        return `ℹ️ <strong>KUHUSU FUNZONE:</strong><br><br>
        • Tunatoa games za kiwango cha juu za simu<br>
        • Games zote ni SAFE bila virus - tunazitest kwanza<br>
        • Tuna msaada 24/7 kwa WhatsApp na simu<br>
        • Tumeanzishwa mwaka 2025<br>
        • Creator: SCOBA77<br>
        • Lengo: Kuwapa watu games bora kwa bei nafuu<br><br>
        <em>📞 Wasiliana nasi: <strong>0671131355</strong></em>`;
    }
    
    // 🎯 SPECIFIC GAME QUESTIONS
    if (lowerQuestion.includes('fifa') || lowerQuestion.includes('pes') || 
        lowerQuestion.includes('efootball') || lowerQuestion.includes('soccer') ||
        lowerQuestion.includes('dls') || lowerQuestion.includes('dream league') ||
        lowerQuestion.includes('fts') || lowerQuestion.includes('first touch') ||
        lowerQuestion.includes('gta') || lowerQuestion.includes('grand theft') ||
        lowerQuestion.includes('god of war') || lowerQuestion.includes('mortal kombat') ||
        lowerQuestion.includes('ufc') || lowerQuestion.includes('fighting') ||
        lowerQuestion.includes('bus') || lowerQuestion.includes('basi') ||
        lowerQuestion.includes('spider') || lowerQuestion.includes('spiderman')) {
        
        const gameNames = ['fifa', 'pes', 'efootball', 'dls', 'fts', 'gta', 'god of war', 'mortal kombat', 'ufc', 'bus', 'spider'];
        const foundGame = gameNames.find(gameName => lowerQuestion.includes(gameName));
        
        if (foundGame) {
            return `🎮 <strong>KUHUSU GAME LA ${foundGame.toUpperCase()}:</strong><br><br>
            Ninaweza kukupa maelezo zaidi kuhusu game hili!<br>
            • Angalia kwenye orodha ya games hapo juu<br>
            • Tumia search box kwa kuiita kwa jina lake<br>
            • Kama ni premium, tuma "PIN" kwa: <strong>0671131355</strong><br>
            • Kama ni bure, download moja kwa moja!<br><br>
            <em>Una swali maalum kuhusu game hili? Uliza tu!</em>`;
        }
    }
    
    // 📞 CONTACT & SUPPORT
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('wasiliana') ||
        lowerQuestion.includes('support') || lowerQuestion.includes('msaada') ||
        lowerQuestion.includes('help') || lowerQuestion.includes('saidia') ||
        lowerQuestion.includes('call') || lowerQuestion.includes('piga') ||
        lowerQuestion.includes('whatsapp') || lowerQuestion.includes('message')) {
        return `📞 <strong>MAWASILIANO NA MSAADA:</strong><br><br>
        Tupatie simu au tuma WhatsApp kwa:<br>
        • Kupata PIN za games premium<br>
        • Msaada wa ki-technical<br>
        • Maswali yoyote kuhusu games<br>
        • Mapendekezo ya games mpya<br><br>
        <strong>📱 Namba ya simu/WhatsApp: <span style="color:#667eea">0671131355</span></strong><br>
        <em>Huduma 24/7 - Tuna respond haraka!</em>`;
    }
    
    // 🕒 AVAILABILITY & TIMING
    if (lowerQuestion.includes('muda') || lowerQuestion.includes('time') ||
        lowerQuestion.includes('saa') || lowerQuestion.includes('hour') ||
        lowerQuestion.includes('available') || lowerQuestion.includes('patikana') ||
        lowerQuestion.includes('open') || lowerQuestion.includes('fungua')) {
        return `🕒 <strong>MUDA WA HUDUMA:</strong><br><br>
        Tunakupa huduma:<br>
        • <strong>Kila siku - 24/7</strong><br>
        • Msaada wa haraka kwenye WhatsApp<br>
        • Response within minutes<br>
        • Usiku na mchana<br><br>
        <em>Hata kama ni usiku, tuma ujumbe - tutakujibu!</em>`;
    }
    
    // 💰 PAYMENT METHODS
    if (lowerQuestion.includes('malipo') || lowerQuestion.includes('payment') ||
        lowerQuestion.includes('lipa') || lowerQuestion.includes('pay') ||
        lowerQuestion.includes('tuma pesa') || lowerQuestion.includes('send money') ||
        lowerQuestion.includes('mpesa') || lowerQuestion.includes('airtel money') ||
        lowerQuestion.includes('tigo pesa') || lowerQuestion.includes('halopesa')) {
        return `💰 <strong>NJIA ZA KULIPIA:</strong><br><br>
        Kwa sasa tunakubali:<br>
        • <strong>M-Pesa</strong> (Tanzania)<br>
        • <strong>Airtel Money</strong><br>
        • <strong>Tigo Pesa</strong><br>
        • <strong>HaloPesa</strong><br><br>
        <em>Bei za PIN ni nafuu! Tuma "PIN" kwa <strong>0671131355</strong> kujua bei halisi</em>`;
    }
    
    // 🎮 EMULATOR & PSP GAMES
    if (lowerQuestion.includes('emulator') || lowerQuestion.includes('ppsspp') ||
        lowerQuestion.includes('psp') || lowerQuestion.includes('iso') ||
        lowerQuestion.includes('rom') || lowerQuestion.includes('console')) {
        return `🎮 <strong>KUHUSU PSP GAMES NA EMULATOR:</strong><br><br>
        Kwa games za PSP kama eFootball 26, UFC 5, nk:<br>
        • Unahitaji <strong>PPSSPP Emulator</strong> kwanza<br>
        • Tunaweza kukusaidia kuipata na kuiset up<br>
        • Games za PSP huwa na graphics nzuri<br>
        • Zinafanya kazi kwenye simu nyingi<br><br>
        <em>Piga <strong>0671131355</strong> kwa msaada wa kuweka emulator</em>`;
    }
    
    // DEFAULT RESPONSE
    return `🤖 <strong>Nimekuelewa swali lako!</strong><br><br>
    Ninaweza kukusaidia kupata:<br>
    • 🔐 PIN za games premium<br>
    • 🆓 Orodha ya games bure<br>
    • 📥 Msaada wa download & installation<br>
    • 🎮 Mapendekezo ya games<br>
    • 🔧 Suluhisho la matatizo ya ki-technical<br>
    • ℹ️ Maelezo kuhusu FunZone<br><br>
    <strong>Au piga simu moja kwa moja: <span style="color:#667eea">0671131355</span></strong><br>
    <em>Huduma 24/7 - Tuna respond haraka!</em>`;
}

// Add search highlight style
const style = document.createElement('style');
style.textContent = `
    .search-highlight {
        background: #856404;
        color: #fff3cd;
        padding: 0.1rem 0.2rem;
        border-radius: 3px;
        font-weight: bold;
    }
    
    [data-theme="light"] .search-highlight {
        background: #fff3cd;
        color: #856404;
    }
`;
document.head.appendChild(style);