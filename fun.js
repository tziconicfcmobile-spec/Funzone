// Games Data - With Categories
const games = [
    {
        id: 43,
        name: "Fifa 16 original",
        image: "o.jpg",
        description: "Download original FIFA 16 with all teams and players likeness.",
        downloadLink: "o.html",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 44,
        name: "Spider Man Miles Morales Mobile",
        image: "mile.jpg",
        description: "Download Spider Man Miles Morales mobile game for free.",
        downloadLink: "https://dl.apkvision.org/spider-man-miles-morales/spider-man-miles-morales-v1.15.b2.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 1,
        name: "eFootball 26 PPSSPP",
        image: "e.jpg",
        description: "eFootball 26 | Offline game | PPSSPP Emulator.",
        downloadLink: "https://www.mediafire.com/file/xet3s2ofesp5do4/eFootball_2026_GAME.zip/file",
        type: "free",
        pinRequired: false,
        category: "psp"
    },
    {
        id: 45,
        name: "Truck Simulator USA EVO Mod",
        image: "t.jpg",
        description: "Download popular truck simulator USA EVO with mod money/gold.",
        downloadLink: "https://dl.apkvision.org/truck-simulator-usa-revolution/truck-simulator-usa-mod_10.0.18-apkvision.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 2,
        name: "FTS 25 NBC Mod",
        image: "fts.jpg",
        description: "FTS 25 NBC mod with all teams and kits. Contact us for PIN.",
        downloadLink: "https://www.mediafire.com/file/2kau0ceh13ycxtv/FTS_25_NBC.7z/file",
        type: "premium",
        pinRequired: true,
        category: "android"
    },
    {
        id: 5,
        name: "Bright Memory Infinite",
        image: "b.png",
        description: "The most action-packed game - download and play for free.",
        downloadLink: "https://www.mediafire.com/file/jl6mdl8sftoe9ec/bright-memory-infinite-1.31-mod-menu-5play.7z/file",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 23,
        name: "FC 26 Mod FIFA 16",
        image: "26.jpg",
        description: "FC 26 mod FIFA 16 | Offline football game.",
        downloadLink: "26.html",
        type: "premium",
        pinRequired: true,
        category: "android"
    },
    {
        id: 50,
        name: "Hitman (gamehub)",
        image: "hitman.jpg",
        description: "download game la hitman ambalo linachezwa kwenye PC na pia kwenye simu kwa kutumia emulator ya gamehub",
        downloadLink: "https://buzzheavier.com/az9idxyg840b",
        type: "free",
        pinRequired: false,
        category: "pc"
    },
    {
        id: 11,
        name: "DLS 26 Mod FC 26",
        image: "dls.jpg",
        description: "DLS 26 mod FC 26 - your favorite football game.",
        downloadLink: "https://www.mediafire.com/file/fcn4gxlcdnb1zxr/DLS_26_MOD_FC_26.zip/file?dkey=g7mnepfhe8p&r=1083",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 3,
        name: "UFC 5 PPSSPP",
        image: "u.jpg",
        description: "UFC 5 | OFFLINE | PPSSPP Emulator.",
        downloadLink: "https://www.mediafire.com/file/lzfbfs7irv0w2f8/UFC_5_PSP_BY_FUNZONE.7z/file",
        type: "premium",
        pinRequired: true,
        category: "psp"
    },
    {
        id: 12,
        name: "GTA San Andreas",
        image: "gta.jpg",
        description: "Download and enjoy the most beautiful GTA game of all time.",
        downloadLink: "https://www.mediafire.com/file/041u4yh2l4l79kl/GTA_San_Andreas_Mod_2.11.277-RisTechy.com.apk/file",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 9,
        name: "God Hand",
        image: "hand.jpg",
        description: "Download God Hand game for Aether SX2 emulator.",
        downloadLink: "https://www.mediafire.com/file/9gefs9uyr0o5co7/GOD+HAND+HACK+EDITION.iso/file",
        type: "free",
        pinRequired: false,
        category: "emulator"
    },
    {
        id: 46,
        name: "PUBG MOBILE LITE",
        image: "pu.jpg",
        description: "PUBG MOBILE LITE for low-end devices.",
        downloadLink: "pu.html",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 4,
        name: "Pinodeire World Bus",
        image: "bus.jpg",
        description: "Tanzania bus simulator mod with all buses and real map.",
        downloadLink: "https://www.mediafire.com/file/6z2v4l72dt6dhzj/pinodeire_World_bus_by_funzone.7z/file",
        type: "premium",
        pinRequired: true,
        category: "android"
    },
    {
        id: 47,
        name: "Need for Speed Most Wanted Mobile",
        image: "ne.jpg",
        description: "Need for Speed Most Wanted mobile edition.",
        downloadLink: "ne.html",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 6,
        name: "Mortal Kombat",
        image: "mortal.png",
        description: "Download and enjoy Mortal Kombat fighting game.",
        downloadLink: "https://www.mediafire.com/file/par831qvb13r6mm/elkingofthemusicall%252C_Inc.rar/file",
        type: "free",
        pinRequired: false,
        category: "emulator"
    },
    {
        id: 10,
        name: "DFL 26",
        image: "dfl.jpg",
        description: "DFL 26 football game - contact us for PIN.",
        downloadLink: "dfl.html",
        type: "premium",
        pinRequired: true,
        category: "android"
    },
    {
        id: 7,
        name: "God of War 1",
        image: "war.jpg",
        description: "Download God of War 1 for free.",
        downloadLink: "https://www.mediafire.com/file/zsj8ckt6ftdlhrq/God+of+War+1+Vampire+Edition.iso/file",
        type: "free",
        pinRequired: false,
        category: "emulator"
    },
    {
        id: 14,
        name: "GTA V Mod",
        image: "gtav.jpg",
        description: "GTA San Andreas mod GTA V - contact for PIN.",
        downloadLink: "gtav.html",
        type: "premium",
        pinRequired: true,
        category: "android"
    },
    {
        id: 8,
        name: "FIFA 16 Mod FC 26",
        image: "fc.jpg",
        description: "FIFA 16 mod FC 26 - download and enjoy.",
        downloadLink: "fifa.html",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 48,
        name: "GTA V | v3.1",
        image: "v3.jpg",
        description: "GTA V version 3.1 for mobile - free download.",
        downloadLink: "https://dl.apkvision.org/Grand-Theft-Auto-V-0.3-Test.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 19,
        name: "Max Payne",
        image: "max.jpg",
        description: "Download Max Payne game - PIN on YouTube channel.",
        downloadLink: "https://www.mediafire.com/file/igurijugpfungvp/max+Payne+(+funzone).zip/file",
        type: "premium",
        pinRequired: true,
        category: "android"
    },
    {
        id: 24,
        name: "Apex Racing (Unlimited Money)",
        image: "apex.jpg",
        description: "Apex Racing with unlimited money mod.",
        downloadLink: "https://statics.liteapks.co/Apex%20Racing/Apex-Racing-v1.20.3-mod.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 29,
        name: "Maleo Mod TZ (Singida Map)",
        image: "maleo.jpg",
        description: "Maleo mod TZ with Singida map.",
        downloadLink: "https://www.mediafire.com/file/6zvue8ep7n6n46q/BUS+TANZANIA+GAME+LA+BUS+FILE+ZOTE+NIPO+HAPA+KUPATA+PASSWORD+TUMA+NENO+BUS+KWENDA+NAMBA+0686350237+AU+0672550237+RAMANI+ZIPO.7z/file",
        type: "premium",
        pinRequired: true,
        category: "android"
    },
    {
        id: 16,
        name: "European Front Remastered",
        image: "eu.jpg",
        description: "European Front Remastered strategy game.",
        downloadLink: "https://www.mediafire.com/file/jzcbzet1panbvzx/EUROPE_FRONT_REMASTERED_1.0.2_MOD_BY_RADJA_GAMERZ.zip/file",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 25,
        name: "Watch Dogs Mobile",
        image: "dogs.jpg",
        description: "Watch Dogs Mobile for free download.",
        downloadLink: "https://dl.apkvision.org/watch-dogs/WatchDogsMobileV1.2-apkvision.org.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 33,
        name: "Wall of Insanity 2 (Hacked)",
        image: "wall.jpg",
        description: "Wall of Insanity 2 hacked version.",
        downloadLink: "https://dl.apkvision.org/wall-of-insanity-2/Wall-Of-Insanity-2-v1.3-mod-menu-apkvision.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 18,
        name: "FTS 26",
        image: "fts26.jpg",
        description: "FTS 26 - your favorite football game.",
        downloadLink: "https://www.mediafire.com/file/ablf3eqfv1jr50d/FTS_26_Difficult_LN30_DROID_New_Update.zip/file",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 27,
        name: "Modern Combat 4",
        image: "mc.jpg",
        description: "Modern Combat 4 with unlimited money and unlocked items.",
        downloadLink: "mc.html",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 34,
        name: "eFootball 26 PSP",
        image: "yamali.jpg",
        description: "eFootball 26 for PSP emulator.",
        downloadLink: "yamali.html",
        type: "free",
        pinRequired: false,
        category: "psp"
    },
    {
        id: 22,
        name: "WWE 2K25",
        image: "wwe.jpg",
        description: "WWE 2K25 Netflix edition.",
        downloadLink: "https://dl.apkvision.org/wwe-2k25-netflix-edition/WWE-2K25-v0.836.0-unlocked-apkvision.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 26,
        name: "GTA Vice City",
        image: "vise.jpg",
        description: "GTA Vice City APK high graphics.",
        downloadLink: "https://cdn900.onehost.io/customs/Grand_Theft_Auto_Vice_City_v112_1757613235.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 15,
        name: "Tomb Raider",
        image: "tomb.jpg",
        description: "Tomb Raider Anniversary for PSP.",
        downloadLink: "https://www.mediafire.com/file/es2j8qzf51o5aol/Tomb+Raider+-+Anniversary+(USA)+(PSP)+(PSN).zip/file",
        type: "free",
        pinRequired: false,
        category: "psp"
    },
    {
        id: 40,
        name: "GTA IV Mod Unlimited Money",
        image: "iv.jpg",
        description: "GTA IV mod with unlimited money.",
        downloadLink: "https://dl.apkvision.org/gta-4/GTA-4-Mobile-Edition-1.0-by-Freaky-Studios.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 28,
        name: "Batman Dark Knight Rises",
        image: "batman.jpg",
        description: "Batman Dark Knight Rises mobile game.",
        downloadLink: "batman.html",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 13,
        name: "EA FC 26 PPSSPP",
        image: "eapsp.jpg",
        description: "EA FC 26 for PPSSPP emulator.",
        downloadLink: "eapsp.html",
        type: "free",
        pinRequired: false,
        category: "psp"
    },
    {
        id: 30,
        name: "Red Dead Redemption Mobile",
        image: "red.jpg",
        description: "Red Dead Redemption mobile APK high graphics.",
        downloadLink: "https://dl.apkvision.org/red-dead-redemption/RDR-ROCKSTAR-v1.50.60293175-full-apkvision.apks",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 49,
        name: "blur (winlator)",
        image: "blur.jpg",
        description: "download game la blur ambalo utacheza kwenye PC yako na pia kwa simu yako kwa kutumia emulator ya winlator.",
        downloadLink: "https://www.mediafire.com/file/2678sh5ac7c9053/%2540B.lur.zip/file",
        type: "free",
        pinRequired: false,
        category: "pc"
    },
    {
        id: 41,
        name: "Bendy and the Dark Revival",
        image: "b.jpg",
        description: "Bendy and the Dark Revival horror game.",
        downloadLink: "https://dl.apkvision.org/bendy-and-the-dark-revival/Dark-Revival-v1.0.0-full-apkvision.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 35,
        name: "GTA Liberty City PPSSPP",
        image: "liberty.jpg",
        description: "GTA Liberty City for PSP emulator.",
        downloadLink: "https://www.mediafire.com/file/xvhjzb1nzex72yo/elkingofthemusicall%252C_Inc.rar/file",
        type: "free",
        pinRequired: false,
        category: "psp"
    },
    {
        id: 51,
        name: "call of duty black ops",
        image: "ops.jpg",
        description: "download game la call of duty black ops ambalo linachezwa kwenye PC yako pia kwa simu yako kwa kutumia winlator emulator",
        downloadLink: "https://1fichier.com/?8gkxzpp9nwb4esjs0clv",
        type: "free",
        pinRequired: false,
        category: "pc"
    },
    {
        id: 21,
        name: "Mortal Kombat Unchained PPSSPP",
        image: "unchained.jpg",
        description: "Mortal Kombat Unchained for PSP.",
        downloadLink: "https://www.mediafire.com/file/par831qvb13r6mm/elkingofthemusicall%252C_Inc.rar/file",
        type: "free",
        pinRequired: false,
        category: "psp"
    },
    {
        id: 32,
        name: "Drive Real Truck Simulator",
        image: "drive.jpg",
        description: "Drive Real Truck Simulator unlimited money.",
        downloadLink: "https://dl.apkvision.org/drive-real-truck-simulator/Drive-Real-Truck-Simulator-v0.5.4-mod-apkvision.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 39,
        name: "Aerofly FS Global",
        image: "aerofly.jpg",
        description: "Aerofly FS Global with free aircraft purchase.",
        downloadLink: "https://dl.apkvision.org/aerofly-fs-global/Aerofly-FS-Global-v01.06.01.02-mod-apkvision.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 20,
        name: "Left to Survive",
        image: "left.jpg",
        description: "Left to Survive zombie survival game.",
        downloadLink: "https://dl.apkvision.org/left-to-survive/left-to-survive-mod_8.1.0-apkvision.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 37,
        name: "Days After: Zombie Survival",
        image: "days.jpg",
        description: "Days After zombie survival game.",
        downloadLink: "https://dl.apkvision.org/days-after-zombie-survival/days-after-mod_12.8.2-apkvision.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 17,
        name: "DLS 26 Wydad Mod",
        image: "wydad.jpg",
        description: "DLS 26 Wydad mod for free.",
        downloadLink: "dls.html",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 31,
        name: "Race Max Pro Unlimited Money",
        image: "race.jpg",
        description: "Race Max Pro with unlimited money.",
        downloadLink: "https://dl.apkvision.org/race-max-pro/race-max-pro-mod_2.8.3-apkvision.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 38,
        name: "Bus Simulator Indonesia Unlimited Fuel",
        image: "fuel.jpg",
        description: "Bus Simulator Indonesia mod unlimited fuel.",
        downloadLink: "https://dl.apkvision.org/bus-simulator-indonesia/bus-simulator-indonesia-mod_4.4.1-apkvision.apk",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 42,
        name: "Football League 26 Mod",
        image: "l.jpg",
        description: "Football League 26 with all teams and players likeness.",
        downloadLink: "l.html",
        type: "free",
        pinRequired: false,
        category: "android"
    },
    {
        id: 36,
        name: "Spider Man 3 PPSSPP",
        image: "man3.jpg",
        description: "Spider Man 3 for PSP emulator.",
        downloadLink: "https://www.mediafire.com/file/58ke49en0e22ug2/elkingofthemusicall%252C_Inc.rar/file",
        type: "free",
        pinRequired: false,
        category: "psp"
    }
];

// Initialize website when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('FunZone website loading...');
    loadGames();
    loadTrendingGames();
    initSearch();
    initFilters();
    initCategories();
    initSmoothScrolling();
    handleDirectGameLinks();
    initThemeToggle();
    initActiveNav();
    initMobileOptimizations();
    
    // Auto-update trending games every 15 seconds
    setInterval(loadTrendingGames, 15000);
});

// ===== 1. HANDLE DIRECT GAME LINKS =====
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

// ===== 2. HIGHLIGHT SPECIFIC GAME =====
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

// ===== 3. CATEGORIES FUNCTIONS =====
function initCategories() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
            const filterType = getActiveFilter();
            
            filterAndDisplayGames(searchTerm, filterType, category);
        });
    });
}

function getActiveCategory() {
    const activeButton = document.querySelector('.category-btn.active');
    return activeButton ? activeButton.getAttribute('data-category') : 'all';
}

// ===== 4. FILTER FUNCTIONS =====
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterType = this.getAttribute('data-filter');
            const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
            const category = getActiveCategory();
            filterAndDisplayGames(searchTerm, filterType, category);
        });
    });
}

function getActiveFilter() {
    const activeButton = document.querySelector('.filter-btn.active');
    return activeButton ? activeButton.getAttribute('data-filter') : 'all';
}

// ===== 5. SEARCH FUNCTION =====
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            const filterType = getActiveFilter();
            const category = getActiveCategory();
            filterAndDisplayGames(searchTerm, filterType, category);
        });
    }
}

// ===== 6. MAIN FILTER FUNCTION =====
function filterAndDisplayGames(searchTerm, filterType, category = 'all') {
    let filteredGames = games;
    
    // Apply search filter
    if (searchTerm) {
        filteredGames = filteredGames.filter(game => 
            game.name.toLowerCase().includes(searchTerm) || 
            game.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply type filter (free/premium)
    if (filterType !== 'all') {
        filteredGames = filteredGames.filter(game => game.type === filterType);
    }
    
    // Apply category filter
    if (category !== 'all') {
        filteredGames = filteredGames.filter(game => game.category === category);
    }
    
    displayGames(filteredGames, searchTerm);
}

// ===== 7. DISPLAY GAMES =====
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

function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ===== 8. CLEAR SEARCH =====
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Reset filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === 'all') {
            btn.classList.add('active');
        }
    });
    
    // Reset categories
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === 'all') {
            btn.classList.add('active');
        }
    });
    
    loadGames();
}

// ===== 9. CREATE GAME CARD =====
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
    
    // Category badge class
    const categoryClass = `badge-${game.category}`;
    const categoryText = game.category.toUpperCase();
    
    gameCard.innerHTML = `
        <div class="game-card-content">
            <div class="game-image-container">
                <img src="${game.image}" alt="${game.name}" class="game-image" onerror="handleImageError(this)">
                <div class="game-category-badge ${categoryClass}">${categoryText}</div>
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

// ===== 10. CREATE TRENDING CARD =====
function createTrendingCard(game) {
    const trendingCard = document.createElement('div');
    trendingCard.className = 'trending-card';
    
    const badgeClass = game.type === 'free' ? 'badge-free' : 'badge-premium';
    const badgeText = game.type === 'free' ? 'FREE' : 'PREMIUM';
    const categoryClass = `badge-${game.category}`;
    const categoryText = game.category.toUpperCase();
    
    trendingCard.innerHTML = `
        <div class="game-image-container">
            <img src="${game.image}" alt="${game.name}" class="game-image" onerror="handleImageError(this)">
            <div class="trending-badge">🔥 TRENDING</div>
            <div class="game-category-badge ${categoryClass}">${categoryText}</div>
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

// ===== 11. LOAD GAMES =====
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;
    
    gamesGrid.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// ===== 12. LOAD TRENDING GAMES =====
function getRandomTrendingGames() {
    const shuffledGames = [...games].sort(() => Math.random() - 0.5);
    return shuffledGames.slice(0, 5);
}

function loadTrendingGames() {
    const trendingTrack = document.getElementById('trendingTrack');
    if (!trendingTrack) return;
    
    trendingTrack.innerHTML = '';
    
    const trendingGames = getRandomTrendingGames();
    
    trendingGames.forEach(game => {
        game.trending = true;
    });
    
    // Duplicate for smooth marquee effect
    const allTrendingGames = [...trendingGames, ...trendingGames, ...trendingGames];
    
    allTrendingGames.forEach(game => {
        const trendingCard = createTrendingCard(game);
        trendingTrack.appendChild(trendingCard);
    });
}

// ===== 13. HANDLE DOWNLOAD (SIMPLE VERSION) =====
function handleDownload(gameId, downloadLink) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    // Premium games download moja kwa moja, hakuna alert
    if (downloadLink.startsWith('http')) {
        window.open(downloadLink, '_blank');
    } else if (downloadLink.endsWith('.html')) {
        window.location.href = downloadLink;
    } else if (downloadLink === '#') {
        alert('⚠️ Download link for this game is not available yet. Please check back later or contact us.');
    } else {
        window.open(downloadLink, '_blank');
    }
}

// ===== 14. HANDLE IMAGE ERROR =====
function handleImageError(img) {
    console.log(`Image failed to load: ${img.src}`);
    img.src = 'https://via.placeholder.com/300x200/667eea/ffffff?text=Game+Image';
    img.alt = 'Game Image';
}

// ===== 15. SHARE FUNCTIONS =====
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

// ===== 16. THEME TOGGLE =====
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
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

function updateThemeButton(theme) {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}

// ===== 17. SMOOTH SCROLLING =====
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

// ===== 18. ACTIVE NAVIGATION =====
function initActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== 19. MOBILE OPTIMIZATIONS =====
function initMobileOptimizations() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth <= 480;
    
    if (isMobile || isSmallScreen) {
        document.body.classList.add('mobile-device');
        
        const style = document.createElement('style');
        style.textContent = `
            .trending-track {
                animation-duration: 50s !important;
            }
            
            .games-grid {
                grid-template-columns: 1fr !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== 20. SIMPLE AI ASSISTANT =====
let isAssistantOpen = false;

function toggleAssistant() {
    const assistantWindow = document.getElementById('assistantWindow');
    isAssistantOpen = !isAssistantOpen;
    
    if (isAssistantOpen) {
        assistantWindow.style.display = 'flex';
        setTimeout(() => {
            assistantWindow.classList.add('show');
        }, 10);
        document.getElementById('userQuestion').focus();
    } else {
        assistantWindow.classList.remove('show');
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
    }, 500);
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
    
    // PIN Questions
    if (lowerQuestion.includes('pin') || lowerQuestion.includes('premium') || lowerQuestion.includes('lipia')) {
        return `🔐 <strong>KUHUSU PIN ZA GAMES PREMIUM:</strong><br><br>
        Kwa kupata PIN ya game yoyote premium:<br>
        • <strong>WhatsApp: 0671131355</strong><br>
        • Bei nafuu<br>
        • Msaada wa haraka<br><br>
        <em>📞 Piga simu au tuma WhatsApp: <strong>0671131355</strong></em>`;
    }
    
    // Free Games
    if (lowerQuestion.includes('free') || lowerQuestion.includes('bure')) {
        return `🆓 <strong>GAMES ZA BURE:</strong><br><br>
        Tuna games nyingi za bure!<br>
        • Bonyeza "FREE GAMES" kwenye filter<br>
        • Au tafuta game unayotaka!<br><br>
        <em>Zaidi ya 30 games bure zinakungoja!</em>`;
    }
    
    // Download Help
    if (lowerQuestion.includes('download') || lowerQuestion.includes('pakua')) {
        return `📥 <strong>MSAADA WA DOWNLOAD:</strong><br><br>
        Ikiwa una shida:<br>
        • Tumia Chrome browser<br>
        • Hakikisha una internet nzuri<br>
        • Angalia storage ya simu<br>
        • Kwa msaada zaidi: <strong>0671131355</strong>`;
    }
    
    // Default Response
    return `🤖 <strong>Nimekuelewa!</strong><br><br>
    Ninaweza kukusaidia kupata:<br>
    • 🔐 PIN za games premium<br>
    • 🆓 Orodha ya games bure<br>
    • 📥 Msaada wa download<br><br>
    <strong>Au piga simu: <span style="color:#667eea">0671131355</span></strong>`;
}