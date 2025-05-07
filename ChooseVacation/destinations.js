/**
 * Destinations.js
 * This file handles the destination buttons and displays attractions
 * for the Choose Your Vacation Adventure website.
 */

// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get all destination buttons
    const parisButton = document.getElementById("paris");
    const newyorkButton = document.getElementById("newyork");
    const londonButton = document.getElementById("london");
    const istanbulButton = document.getElementById("istanbul");
    const hongkongButton = document.getElementById("hongkong");
    
    // Add click event listeners to buttons
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

// Function to show Paris attractions
function showParisAttractions() {
    // Get the attractions container
    const container = document.getElementById("attractions-container");
    
    // Clear previous content
    container.innerHTML = "";
    
    // Create header
    const header = document.createElement("h2");
    header.textContent = "Top 10 Tourist Attractions in Paris";
    container.appendChild(header);
    
    // Create attractions list
    const attractions = [
        {
            name: "Eiffel Tower",
            description: "The iconic iron lattice tower built in 1889, offering panoramic views of Paris.",
            image: "images/paris_eiffel_tower.jpg"
        },
        {
            name: "Louvre Museum",
            description: "World's largest art museum, home to thousands of works including the Mona Lisa.",
            image: "images/paris_louvre.jpg"
        },
        {
            name: "Notre-Dame Cathedral",
            description: "Medieval Catholic cathedral known for its French Gothic architecture.",
            image: "images/paris_notre_dame.jpg"
        },
        {
            name: "Arc de Triomphe",
            description: "A monumental arch honoring those who fought for France.",
            image: "images/paris_arc.jpg"
        },
        {
            name: "Montmartre",
            description: "A historic hill district known for its artistic history and the Sacré-Cœur Basilica.",
            image: "images/paris_montmartre.jpg"
        },
        {
            name: "Champs-Élysées",
            description: "One of the world's most famous avenues, known for luxury shops and cafés.",
            image: "images/paris_champs.jpg"
        },
        {
            name: "Seine River Cruise",
            description: "A scenic boat tour offering unique perspectives of Paris's famous monuments.",
            image: "images/paris_seine.jpg"
        },
        {
            name: "Palace of Versailles",
            description: "Former royal residence known for its opulent décor and beautiful gardens.",
            image: "images/paris_versailles.jpg"
        },
        {
            name: "Musée d'Orsay",
            description: "Museum housing impressionist masterpieces in a former railway station.",
            image: "images/paris_orsay.jpg"
        },
        {
            name: "Centre Pompidou",
            description: "A complex building housing the largest museum for modern art in Europe.",
            image: "images/paris_pompidou.jpg"
        }
    ];
    
    // Create and append attraction elements
    for (let i = 0; i < attractions.length; i++) {
        // Create div for each attraction
        const attractionDiv = document.createElement("div");
        attractionDiv.className = "attraction";
        
        // Create heading for attraction name
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = attractions[i].name;
        attractionDiv.appendChild(nameHeading);
        
        // Create paragraph for description
        const descPara = document.createElement("p");
        descPara.textContent = attractions[i].description;
        attractionDiv.appendChild(descPara);
        
        // Add attraction to container
        container.appendChild(attractionDiv);
    }
}

// Function to show New York attractions
function showNewYorkAttractions() {
    const container = document.getElementById("attractions-container");
    container.innerHTML = "";
    
    const header = document.createElement("h2");
    header.textContent = "Top 10 Tourist Attractions in New York";
    container.appendChild(header);
    
    const attractions = [
        {
            name: "Statue of Liberty",
            description: "A colossal neoclassical sculpture symbolizing freedom and democracy."
        },
        {
            name: "Empire State Building",
            description: "An iconic Art Deco skyscraper with observatories offering panoramic city views."
        },
        {
            name: "Central Park",
            description: "An urban park spanning 843 acres with recreational activities and scenic paths."
        },
        {
            name: "Times Square",
            description: "A major commercial intersection known for its bright lights and billboards."
        },
        {
            name: "Metropolitan Museum of Art",
            description: "One of the world's largest art museums with collections spanning 5,000 years."
        },
        {
            name: "Brooklyn Bridge",
            description: "A historic bridge connecting Manhattan and Brooklyn with spectacular views."
        },
        {
            name: "9/11 Memorial & Museum",
            description: "A commemoration of the September 11, 2001 attacks and tribute to victims."
        },
        {
            name: "Broadway",
            description: "The theater district known for its numerous theaters and performances."
        },
        {
            name: "High Line",
            description: "An elevated linear park created on a former railroad spur."
        },
        {
            name: "Rockefeller Center",
            description: "A complex known for its ice-skating rink and observation deck."
        }
    ];
    
    for (let i = 0; i < attractions.length; i++) {
        const attractionDiv = document.createElement("div");
        attractionDiv.className = "attraction";
        
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = attractions[i].name;
        attractionDiv.appendChild(nameHeading);
        
        const descPara = document.createElement("p");
        descPara.textContent = attractions[i].description;
        attractionDiv.appendChild(descPara);
        
        container.appendChild(attractionDiv);
    }
}

// Function to show London attractions
function showLondonAttractions() {
    const container = document.getElementById("attractions-container");
    container.innerHTML = "";
    
    const header = document.createElement("h2");
    header.textContent = "Top 10 Tourist Attractions in London";
    container.appendChild(header);
    
    const attractions = [
        {
            name: "Tower of London",
            description: "A historic castle known for housing the Crown Jewels."
        },
        {
            name: "British Museum",
            description: "A public institution dedicated to human history, art, and culture."
        },
        {
            name: "Buckingham Palace",
            description: "The London residence of the monarch of the United Kingdom."
        },
        {
            name: "London Eye",
            description: "A giant Ferris wheel offering breathtaking views of the city."
        },
        {
            name: "Westminster Abbey",
            description: "A Gothic abbey church that has been the coronation site for British monarchs."
        },
        {
            name: "Big Ben & Houses of Parliament",
            description: "The iconic clock tower and meeting place of the UK Parliament."
        },
        {
            name: "Tate Modern",
            description: "Britain's national gallery of international modern art."
        },
        {
            name: "Natural History Museum",
            description: "A museum exhibiting a vast range of specimens from natural history."
        },
        {
            name: "Hyde Park",
            description: "One of the largest parks in London, famous for Speakers' Corner."
        },
        {
            name: "Tower Bridge",
            description: "A combined bascule and suspension bridge crossing the River Thames."
        }
    ];
    
    for (let i = 0; i < attractions.length; i++) {
        const attractionDiv = document.createElement("div");
        attractionDiv.className = "attraction";
        
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = attractions[i].name;
        attractionDiv.appendChild(nameHeading);
        
        const descPara = document.createElement("p");
        descPara.textContent = attractions[i].description;
        attractionDiv.appendChild(descPara);
        
        container.appendChild(attractionDiv);
    }
}

// Function to show Istanbul attractions
function showIstanbulAttractions() {
    const container = document.getElementById("attractions-container");
    container.innerHTML = "";
    
    const header = document.createElement("h2");
    header.textContent = "Top 10 Tourist Attractions in Istanbul";
    container.appendChild(header);
    
    const attractions = [
        {
            name: "Hagia Sophia",
            description: "A former cathedral, later a mosque, now a museum with Byzantine architecture."
        },
        {
            name: "Blue Mosque",
            description: "An Ottoman-era mosque known for its blue tile work and six minarets."
        },
        {
            name: "Topkapi Palace",
            description: "A large museum that was once the main residence of Ottoman sultans."
        },
        {
            name: "Grand Bazaar",
            description: "One of the largest and oldest covered markets in the world."
        },
        {
            name: "Bosphorus Strait",
            description: "A narrow strait that forms part of the boundary between Europe and Asia."
        },
        {
            name: "Basilica Cistern",
            description: "An ancient underground water reservoir built in the 6th century."
        },
        {
            name: "Spice Bazaar",
            description: "A colorful covered market selling spices and other delicacies."
        },
        {
            name: "Galata Tower",
            description: "A medieval stone tower providing panoramic views of Istanbul."
        },
        {
            name: "Dolmabahçe Palace",
            description: "A 19th-century palace that served as an administrative center."
        },
        {
            name: "Istiklal Avenue",
            description: "A elegant pedestrian street lined with boutiques, cafes, and restaurants."
        }
    ];
    
    for (let i = 0; i < attractions.length; i++) {
        const attractionDiv = document.createElement("div");
        attractionDiv.className = "attraction";
        
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = attractions[i].name;
        attractionDiv.appendChild(nameHeading);
        
        const descPara = document.createElement("p");
        descPara.textContent = attractions[i].description;
        attractionDiv.appendChild(descPara);
        
        container.appendChild(attractionDiv);
    }
}

// Function to show Hong Kong attractions
function showHongKongAttractions() {
    const container = document.getElementById("attractions-container");
    container.innerHTML = "";
    
    const header = document.createElement("h2");
    header.textContent = "Top 10 Tourist Attractions in Hong Kong";
    container.appendChild(header);
    
    const attractions = [
        {
            name: "Victoria Peak",
            description: "The highest hill on Hong Kong Island offering stunning views of the city."
        },
        {
            name: "Victoria Harbour",
            description: "A natural harbor known for its spectacular skyline."
        },
        {
            name: "Hong Kong Disneyland",
            description: "A theme park featuring classic Disney attractions and entertainment."
        },
        {
            name: "Tian Tan Buddha (Big Buddha)",
            description: "A large bronze statue of Buddha Shakyamuni on Lantau Island."
        },
        {
            name: "Temple Street Night Market",
            description: "A bustling night market known for street food and trinkets."
        },
        {
            name: "Star Ferry",
            description: "A passenger ferry service offering iconic views of the Hong Kong skyline."
        },
        {
            name: "Wong Tai Sin Temple",
            description: "A famous shrine known for its beautiful architecture."
        },
        {
            name: "Ocean Park",
            description: "A marine mammal park, oceanarium, and animal theme park."
        },
        {
            name: "Lan Kwai Fong",
            description: "A popular nightlife district with numerous bars and restaurants."
        },
        {
            name: "Ngong Ping 360",
            description: "A cable car system offering spectacular views of the mountains."
        }
    ];
    
    for (let i = 0; i < attractions.length; i++) {
        const attractionDiv = document.createElement("div");
        attractionDiv.className = "attraction";
        
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = attractions[i].name;
        attractionDiv.appendChild(nameHeading);
        
        const descPara = document.createElement("p");
        descPara.textContent = attractions[i].description;
        attractionDiv.appendChild(descPara);
        
        container.appendChild(attractionDiv);
    }
}
