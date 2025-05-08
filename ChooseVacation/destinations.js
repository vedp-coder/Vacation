/**
 * Destinations.js
 * This file handles the destination buttons and displays attractions
 * for the Choose Your Vacation Adventure website.
 */

document.addEventListener("DOMContentLoaded", function() {
    const parisButton = document.getElementById("paris");
    const newyorkButton = document.getElementById("newyork");
    const londonButton = document.getElementById("london");
    const istanbulButton = document.getElementById("istanbul");
    const hongkongButton = document.getElementById("hongkong");

    parisButton.addEventListener("click", function() {
        showParisAttractions();
    });

    newyorkButton.addEventListener("click", function() {
        showNewYorkAttractions();
    });

    londonButton.addEventListener("click", function() {
        showLondonAttractions();
    });

    istanbulButton.addEventListener("click", function() {
        showIstanbulAttractions();
    });

    hongkongButton.addEventListener("click", function() {
        showHongKongAttractions();
    });
});

function createAttractionElements(container, cityName, attractions) {
    container.innerHTML = "";

    const header = document.createElement("h2");
    header.textContent = `Top 10 Tourist Attractions in ${cityName}`;
    container.appendChild(header);

    for (let i = 0; i < attractions.length; i++) {
        const attractionDiv = document.createElement("div");
        attractionDiv.className = "attraction";

        const nameHeading = document.createElement("h3");
        nameHeading.textContent = attractions[i].name;
        attractionDiv.appendChild(nameHeading);

        const descPara = document.createElement("p");
        descPara.textContent = attractions[i].description;
        attractionDiv.appendChild(descPara);

        if (attractions[i].image) {
            const image = document.createElement("img");
            image.src = attractions[i].image;
            image.alt = attractions[i].name;
            image.className = "attraction-image";
            attractionDiv.appendChild(image);
        }

        container.appendChild(attractionDiv);
    }
}

function showParisAttractions() {
    const container = document.getElementById("attractions-container");
    const attractions = [
        { name: "Eiffel Tower", description: "...", image: "images/paris_eiffel_tower.jpg" },
        { name: "Louvre Museum", description: "...", image: "images/paris_louvre.jpg" },
        { name: "Notre-Dame Cathedral", description: "...", image: "images/paris_notre_dame.jpg" },
        { name: "Arc de Triomphe", description: "...", image: "images/paris_arc.jpg" },
        { name: "Montmartre", description: "...", image: "images/paris_montmartre.jpg" },
        { name: "Champs-Élysées", description: "...", image: "images/paris_champs.jpg" },
        { name: "Seine River Cruise", description: "...", image: "images/paris_seine.jpg" },
        { name: "Palace of Versailles", description: "...", image: "images/paris_versailles.jpg" },
        { name: "Musée d'Orsay", description: "...", image: "images/paris_orsay.jpg" },
        { name: "Centre Pompidou", description: "...", image: "images/paris_pompidou.jpg" }
    ];
    createAttractionElements(container, "Paris", attractions);
}

function showNewYorkAttractions() {
    const container = document.getElementById("attractions-container");
    const attractions = [
        { name: "Statue of Liberty", description: "...", image: "images/ny_statue_liberty.jpg" },
        { name: "Empire State Building", description: "...", image: "images/ny_empire_state.jpg" },
        { name: "Central Park", description: "...", image: "images/ny_central_park.jpg" },
        { name: "Times Square", description: "...", image: "images/ny_times_square.jpg" },
        { name: "Metropolitan Museum of Art", description: "...", image: "images/ny_met_museum.jpg" },
        { name: "Brooklyn Bridge", description: "...", image: "images/ny_brooklyn_bridge.jpg" },
        { name: "9/11 Memorial & Museum", description: "...", image: "images/ny_911_memorial.jpg" },
        { name: "Broadway", description: "...", image: "images/ny_broadway.jpg" },
        { name: "High Line", description: "...", image: "images/ny_high_line.jpg" },
        { name: "Rockefeller Center", description: "...", image: "images/ny_rockefeller.jpg" }
    ];
    createAttractionElements(container, "New York", attractions);
}

function showLondonAttractions() {
    const container = document.getElementById("attractions-container");
    const attractions = [
        { name: "Tower of London", description: "...", image: "images/london_tower.jpg" },
        { name: "British Museum", description: "...", image: "images/london_british_museum.jpg" },
        { name: "Buckingham Palace", description: "...", image: "images/london_buckingham.jpg" },
        { name: "London Eye", description: "...", image: "images/london_eye.jpg" },
        { name: "Westminster Abbey", description: "...", image: "images/london_westminster.jpg" },
        { name: "Big Ben & Houses of Parliament", description: "...", image: "images/london_big_ben.jpg" },
        { name: "Tate Modern", description: "...", image: "images/london_tate.jpg" },
        { name: "Natural History Museum", description: "...", image: "images/london_natural_history.jpg" },
        { name: "Hyde Park", description: "...", image: "images/london_hyde.jpg" },
        { name: "Tower Bridge", description: "...", image: "images/london_tower_bridge.jpg" }
    ];
    createAttractionElements(container, "London", attractions);
}

function showIstanbulAttractions() {
    const container = document.getElementById("attractions-container");
    const attractions = [
        { name: "Hagia Sophia", description: "...", image: "images/istanbul_hagia.jpg" },
        { name: "Blue Mosque", description: "...", image: "images/istanbul_blue.jpg" },
        { name: "Topkapi Palace", description: "...", image: "images/istanbul_topkapi.jpg" },
        { name: "Grand Bazaar", description: "...", image: "images/istanbul_bazaar.jpg" },
        { name: "Bosphorus Strait", description: "...", image: "images/istanbul_bosphorus.jpg" },
        { name: "Basilica Cistern", description: "...", image: "images/istanbul_cistern.jpg" },
        { name: "Spice Bazaar", description: "...", image: "images/istanbul_spice.jpg" },
        { name: "Galata Tower", description: "...", image: "images/istanbul_galata.jpg" },
        { name: "Dolmabahçe Palace", description: "...", image: "images/istanbul_dolmabahce.jpg" },
        { name: "Istiklal Avenue", description: "...", image: "images/istanbul_istiklal.jpg" }
    ];
    createAttractionElements(container, "Istanbul", attractions);
}

function showHongKongAttractions() {
    const container = document.getElementById("attractions-container");
    const attractions = [
        { name: "Victoria Peak", description: "...", image: "images/hk_peak.jpg" },
        { name: "Victoria Harbour", description: "...", image: "images/hk_harbour.jpg" },
        { name: "Hong Kong Disneyland", description: "...", image: "images/hk_disney.jpg" },
        { name: "Tian Tan Buddha (Big Buddha)", description: "...", image: "images/hk_buddha.jpg" },
        { name: "Temple Street Night Market", description: "...", image: "images/hk_market.jpg" },
        { name: "Star Ferry", description: "...", image: "images/hk_ferry.jpg" },
        { name: "Wong Tai Sin Temple", description: "...", image: "images/hk_wong_temple.jpg" },
        { name: "Ocean Park", description: "...", image: "images/hk_ocean.jpg" },
        { name: "Lan Kwai Fong", description: "...", image: "images/hk_lkf.jpg" },
        { name: "Ngong Ping 360", description: "...", image: "images/hk_ngong.jpg" }
    ];
    createAttractionElements(container, "Hong Kong", attractions);
}
