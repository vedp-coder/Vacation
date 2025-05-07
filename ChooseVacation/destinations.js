/**
 * Destinations.js
 * This file manages the destinations functionality for the Vacation Adventure website.
 * It handles the selection of destinations and displays the top 10 tourist attractions for each.
 * 
 * Author: [Your Name]
 * Date: May 7, 2025
 */

// Store attraction data for each destination
const attractionsData = {
    paris: [
        {
            name: "Eiffel Tower",
            description: "The iconic iron lattice tower on the Champ de Mars, built in 1889. It's one of the world's most recognizable landmarks and offers breathtaking views of Paris.",
            image: "images/paris/eiffel_tower.jpg"
        },
        {
            name: "Louvre Museum",
            description: "The world's largest art museum and historic monument, home to thousands of works of art including the Mona Lisa and Venus de Milo.",
            image: "images/paris/louvre.jpg"
        },
        {
            name: "Notre-Dame Cathedral",
            description: "A medieval Catholic cathedral known for its French Gothic architecture, beautiful rose windows, and flying buttresses.",
            image: "images/paris/notre_dame.jpg"
        },
        {
            name: "Montmartre",
            description: "A historic hill district known for its artistic history, the white-domed Basilica of the Sacré-Cœur, and stunning views of the city.",
            image: "images/paris/montmartre.jpg"
        },
        {
            name: "Arc de Triomphe",
            description: "A monumental arch honoring those who fought for France, offering panoramic views from the top and standing at the center of a star-shaped configuration of 12 radiating avenues.",
            image: "images/paris/arc_de_triomphe.jpg"
        },
        {
            name: "Champs-Élysées",
            description: "One of the world's most famous avenues, known for luxury shops, cafés, and the annual Bastille Day military parade.",
            image: "images/paris/champs_elysees.jpg"
        },
        {
            name: "Musée d'Orsay",
            description: "A museum housed in a former railway station, featuring the largest collection of impressionist and post-impressionist masterpieces in the world.",
            image: "images/paris/musee_orsay.jpg"
        },
        {
            name: "Palace of Versailles",
            description: "The principal royal residence of France from 1682 until the start of the French Revolution, known for its opulent décor, Hall of Mirrors, and beautiful gardens.",
            image: "images/paris/versailles.jpg"
        },
        {
            name: "Seine River Cruise",
            description: "A scenic boat tour along the Seine River, offering unique perspectives of Paris's famous monuments and bridges.",
            image: "images/paris/seine_cruise.jpg"
        },
        {
            name: "Centre Pompidou",
            description: "A complex building in the style of high-tech architecture, housing the largest museum for modern art in Europe.",
            image: "images/paris/pompidou.jpg"
        }
    ],
    newyork: [
        {
            name: "Statue of Liberty",
            description: "A colossal neoclassical sculpture gifted by France to the United States, symbolizing freedom and democracy.",
            image: "images/newyork/statue_of_liberty.jpg"
        },
        {
            name: "Empire State Building",
            description: "An iconic Art Deco skyscraper with observatories offering panoramic views of New York City.",
            image: "images/newyork/empire_state.jpg"
        },
        {
            name: "Central Park",
            description: "An urban park spanning 843 acres, offering recreational activities, scenic paths, and cultural attractions.",
            image: "images/newyork/central_park.jpg"
        },
        {
            name: "Times Square",
            description: "A major commercial intersection, tourist destination, and entertainment center known for its bright lights and billboards.",
            image: "images/newyork/times_square.jpg"
        },
        {
            name: "Metropolitan Museum of Art",
            description: "One of the world's largest and finest art museums, with collections spanning 5,000 years of world culture.",
            image: "images/newyork/met.jpg"
        },
        {
            name: "Brooklyn Bridge",
            description: "A historic hybrid cable-stayed/suspension bridge connecting Manhattan and Brooklyn, offering spectacular views of the city's skyline.",
            image: "images/newyork/brooklyn_bridge.jpg"
        },
        {
            name: "9/11 Memorial & Museum",
            description: "A commemoration of the September 11, 2001 attacks and a tribute to the nearly 3,000 victims.",
            image: "images/newyork/911_memorial.jpg"
        },
        {
            name: "Broadway",
            description: "The theater district known for its numerous theaters, theatrical performances, and musicals.",
            image: "images/newyork/broadway.jpg"
        },
        {
            name: "High Line",
            description: "An elevated linear park created on a former New York Central Railroad spur on the west side of Manhattan.",
            image: "images/newyork/high_line.jpg"
        },
        {
            name: "Rockefeller Center",
            description: "A complex of commercial buildings known for its ice-skating rink, Christmas tree, and Top of the Rock observation deck.",
            image: "images/newyork/rockefeller.jpg"
        }
    ],
    london: [
        {
            name: "Tower of London",
            description: "A historic castle on the north bank of the River Thames, known for housing the Crown Jewels and its fascinating history.",
            image: "images/london/tower_of_london.jpg"
        },
        {
            name: "British Museum",
            description: "A public institution dedicated to human history, art, and culture, with a collection of over 8 million works.",
            image: "images/london/british_museum.jpg"
        },
        {
            name: "Buckingham Palace",
            description: "The London residence and administrative headquarters of the monarch of the United Kingdom, known for the Changing of the Guard ceremony.",
            image: "images/london/buckingham_palace.jpg"
        },
        {
            name: "London Eye",
            description: "A giant Ferris wheel offering breathtaking views of the city from its glass capsules.",
            image: "images/london/london_eye.jpg"
        },
        {
            name: "Westminster Abbey",
            description: "A Gothic abbey church that has been the traditional place of coronation and burial for English and British monarchs.",
            image: "images/london/westminster_abbey.jpg"
        },
        {
            name: "Big Ben & Houses of Parliament",
            description: "The iconic clock tower and the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom.",
            image: "images/london/big_ben.jpg"
        },
        {
            name: "Tate Modern",
            description: "Britain's national gallery of international modern art, housed in the former Bankside Power Station.",
            image: "images/london/tate_modern.jpg"
        },
        {
            name: "Natural History Museum",
            description: "A museum exhibiting a vast range of specimens from various segments of natural history, housed in a Romanesque building.",
            image: "images/london/natural_history.jpg"
        },
        {
            name: "Hyde Park",
            description: "One of the largest parks in London, famous for Speakers' Corner and the Serpentine lake.",
            image: "images/london/hyde_park.jpg"
        },
        {
            name: "Tower Bridge",
            description: "A combined bascule and suspension bridge crossing the River Thames, known for its Victorian Gothic style.",
            image: "images/london/tower_bridge.jpg"
        }
    ],
    istanbul: [
        {
            name: "Hagia Sophia",
            description: "A former Greek Orthodox Christian patriarchal cathedral, later an Ottoman imperial mosque, and now a museum known for its massive dome and Byzantine architecture.",
            image: "images/istanbul/hagia_sophia.jpg"
        },
        {
            name: "Blue Mosque",
            description: "An Ottoman-era mosque known for its blue tile work, six minarets, and cascading domes.",
            image: "images/istanbul/blue_mosque.jpg"
        },
        {
            name: "Topkapi Palace",
            description: "A large museum that was once the main residence and administrative headquarters of the Ottoman sultans.",
            image: "images/istanbul/topkapi_palace.jpg"
        },
        {
            name: "Grand Bazaar",
            description: "One of the largest and oldest covered markets in the world, with over 4,000 shops.",
            image: "images/istanbul/grand_bazaar.jpg"
        },
        {
            name: "Bosphorus Strait",
            description: "A narrow strait that forms part of the boundary between Europe and Asia, offering scenic cruises.",
            image: "images/istanbul/bosphorus.jpg"
        },
        {
            name: "Basilica Cistern",
            description: "An ancient underground water reservoir built in the 6th century during the reign of Byzantine Emperor Justinian I.",
            image: "images/istanbul/basilica_cistern.jpg"
        },
        {
            name: "Spice Bazaar",
            description: "A colorful covered market selling spices, Turkish delight, and other delicacies.",
            image: "images/istanbul/spice_bazaar.jpg"
        },
        {
            name: "Galata Tower",
            description: "A medieval stone tower providing panoramic views of Istanbul's historic peninsula and surrounding areas.",
            image: "images/istanbul/galata_tower.jpg"
        },
        {
            name: "Dolmabahçe Palace",
            description: "A 19th-century palace that served as the main administrative center of the Ottoman Empire in its final decades.",
            image: "images/istanbul/dolmabahce_palace.jpg"
        },
        {
            name: "Istiklal Avenue",
            description: "A elegant pedestrian street lined with boutiques, cafes, restaurants, and historic buildings.",
            image: "images/istanbul/istiklal.jpg"
        }
    ],
    hongkong: [
        {
            name: "Victoria Peak",
            description: "The highest hill on Hong Kong Island, offering stunning views of the city skyline, Victoria Harbour, and surrounding islands.",
            image: "images/hongkong/victoria_peak.jpg"
        },
        {
            name: "Victoria Harbour",
            description: "A natural landform harbor separating Hong Kong Island and Kowloon Peninsula, known for its spectacular skyline.",
            image: "images/hongkong/victoria_harbour.jpg"
        },
        {
            name: "Hong Kong Disneyland",
            description: "A theme park featuring classic Disney attractions and entertainment based on Disney characters and stories.",
            image: "images/hongkong/disneyland.jpg"
        },
        {
            name: "Tian Tan Buddha (Big Buddha)",
            description: "A large bronze statue of Buddha Shakyamuni, located near Po Lin Monastery on Lantau Island.",
            image: "images/hongkong/big_buddha.jpg"
        },
        {
            name: "Temple Street Night Market",
            description: "A bustling night market known for its street food, trinkets, and fortune tellers.",
            image: "images/hongkong/temple_street.jpg"
        },
        {
            name: "Star Ferry",
            description: "A passenger ferry service operating across Victoria Harbour, offering iconic views of the Hong Kong skyline.",
            image: "images/hongkong/star_ferry.jpg"
        },
        {
            name: "Wong Tai Sin Temple",
            description: "A famous shrine and popular tourist attraction, known for its beautiful architecture and fortune-telling services.",
            image: "images/hongkong/wong_tai_sin.jpg"
        },
        {
            name: "Ocean Park",
            description: "A marine mammal park, oceanarium, animal theme park, and amusement park featuring animal exhibits and thrilling rides.",
            image: "images/hongkong/ocean_park.jpg"
        },
        {
            name: "Lan Kwai Fong",
            description: "A popular nightlife district with numerous bars, restaurants, and clubs.",
            image: "images/hongkong/lan_kwai_fong.jpg"
        },
        {
            name: "Ngong Ping 360",
            description: "A cable car system offering spectacular views of the mountains, South China Sea, and Hong Kong International Airport.",
            image: "images/hongkong/ngong_ping.jpg"
        }
    ]
};

/**
 * Display attractions for the selected destination
 * @param {string} destination - The selected destination
 */
function displayAttractions(destination) {
    // Clear active class from all buttons
    document.querySelectorAll('.destination-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to selected button
    document.getElementById(destination).classList.add('active');
    
    // Get attractions container
    const attractionsContainer = document.getElementById('attractions-container');
    
    // Clear previous content
    attractionsContainer.innerHTML = '';
    
    // Create destination header
    const destinationHeader = document.createElement('div');
    destinationHeader.className = 'destination-header';
    destinationHeader.innerHTML = `
        <h2>Top 10 Tourist Attractions in ${destination.charAt(0).toUpperCase() + destination.slice(1)}</h2>
        <p>Explore these amazing attractions during your vacation!</p>
    `;
    attractionsContainer.appendChild(destinationHeader);
    
    // Create attractions grid
    const attractionsGrid = document.createElement('div');
    attractionsGrid.className = 'attractions-grid';
    
    // Add each attraction
    attractionsData[destination].forEach(attraction => {
        const attractionCard = document.createElement('div');
        attractionCard.className = 'attraction-card';
        
        // Use placeholder image for now since real images aren't available
        const imageSrc = attraction.image || 'https://via.placeholder.com/300x200?text=' + encodeURIComponent(attraction.name);
        
        attractionCard.innerHTML = `
            <img src="${imageSrc}" alt="${attraction.name}" class="attraction-image">
            <div class="attraction-content">
                <h3 class="attraction-title">${attraction.name}</h3>
                <p class="attraction-description">${attraction.description}</p>
            </div>
        `;
        
        attractionsGrid.appendChild(attractionCard);
    });
    
    // Add attractions grid to container
    attractionsContainer.appendChild(attractionsGrid);
    
    // Scroll to attractions section
    attractionsContainer.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Initialize event listeners for destination buttons
 */
function initDestinationButtons() {
    document.querySelectorAll('.destination-btn').forEach(button => {
        button.addEventListener('click', function() {
            const destination = this.id;
            displayAttractions(destination);
        });
    });
}

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initDestinationButtons();
    
    // Optional: Display a default destination on page load
    // displayAttractions('paris');
});
