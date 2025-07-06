// results.js - Handle recommendation results display
document.addEventListener('DOMContentLoaded', function() {
    displayRecommendations();
    setupFavoriteButtons();
});

/**
 * Display personalized recommendations based on user preferences
 */
async function displayRecommendations() {
    const userPreferences = getUserPreferences();
    const destinations = await loadDestinations();
    
    if (!userPreferences) {
        displayNoPreferences();
        return;
    }
    
    const recommendations = generateRecommendations(userPreferences, destinations);
    renderRecommendations(recommendations);
}

/**
 * Get user preferences from localStorage
 */
function getUserPreferences() {
    const preferences = localStorage.getItem('userPreferences');
    return preferences ? JSON.parse(preferences) : null;
}

/**
 * Load destinations from JSON file
 */
async function loadDestinations() {
    try {
        const response = await fetch('./data/destinations.json');
        const data = await response.json();
        return data.destinations;
    } catch (error) {
        console.error('Error loading destinations:', error);
        return [];
    }
}

/**
 * Generate personalized recommendations based on user preferences
 */
function generateRecommendations(preferences, destinations) {
    const scored = destinations.map(destination => {
        let score = 0;
        
        // Score based on budget match
        if (destination.budget === preferences.budget) {
            score += 3;
        } else if (isBudgetCompatible(destination.budget, preferences.budget)) {
            score += 1;
        }
        
        // Score based on season match
        if (destination.bestSeasons.includes(preferences.season)) {
            score += 2;
        }
        
        // Score based on activities match
        const matchingActivities = destination.activities.filter(activity => 
            preferences.activities.includes(activity)
        );
        score += matchingActivities.length;
        
        // Score based on group type
        if (destination.groupTypes.includes(preferences.groupType)) {
            score += 1;
        }
        
        return { ...destination, score };
    });
    
    // Sort by score and return top 5
    return scored
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .filter(dest => dest.score > 0);
}

/**
 * Check if destination budget is compatible with user budget
 */
function isBudgetCompatible(destBudget, userBudget) {
    const budgetOrder = ['budget', 'mid-range', 'luxury'];
    const destIndex = budgetOrder.indexOf(destBudget);
    const userIndex = budgetOrder.indexOf(userBudget);
    
    // Allow one level difference
    return Math.abs(destIndex - userIndex) <= 1;
}

/**
 * Render recommendations to the page
 */
function renderRecommendations(recommendations) {
    const container = document.getElementById('recommendations-container');
    const userPreferences = getUserPreferences();
    
    if (recommendations.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No Perfect Matches Found</h3>
                <p>We couldn't find destinations that match all your preferences. Try adjusting your criteria or explore our full destinations list.</p>
                <a href="destinations.html" class="cta-button">View All Destinations</a>
            </div>
        `;
        return;
    }
    
    // Display user preferences summary
    const preferencesHTML = `
        <div class="preferences-summary">
            <h3>Your Preferences</h3>
            <div class="preference-tags">
                <span class="tag">${userPreferences.season}</span>
                <span class="tag">${userPreferences.budget}</span>
                <span class="tag">${userPreferences.groupType}</span>
                <span class="tag">${userPreferences.duration}</span>
            </div>
        </div>
    `;
    
    const recommendationsHTML = recommendations.map(destination => 
        createDestinationCard(destination, true)
    ).join('');
    
    container.innerHTML = preferencesHTML + 
        '<div class="recommendations-grid">' + recommendationsHTML + '</div>' +
        '<div class="recommendations-footer">' +
        '<a href="form.html" class="secondary-button">Refine Search</a>' +
        '<a href="destinations.html" class="secondary-button">View All Destinations</a>' +
        '</div>';
}

/**
 * Create a destination card HTML
 */
function createDestinationCard(destination, showMatchScore = false) {
    const isFavorite = isDestinationFavorite(destination.id);
    const matchPercentage = showMatchScore ? Math.round((destination.score / 7) * 100) : 0;
    
    return `
        <div class="destination-card" data-id="${destination.id}">
            <div class="card-image">
                <img src="${destination.image}" alt="${destination.name}" loading="lazy">
                ${showMatchScore ? `<div class="match-score">${matchPercentage}% Match</div>` : ''}
            </div>
            <div class="card-content">
                <h3>${destination.name}</h3>
                <p class="location">${destination.country}</p>
                <p class="description">${destination.description}</p>
                
                <div class="destination-details">
                    <div class="budget-level">
                        <span class="label">Budget:</span>
                        <span class="value budget-${destination.budget}">${destination.budget}</span>
                    </div>
                    <div class="best-time">
                        <span class="label">Best Time:</span>
                        <span class="value">${destination.bestSeasons.join(', ')}</span>
                    </div>
                </div>
                
                <div class="activities">
                    <span class="label">Activities:</span>
                    <div class="activity-tags">
                        ${destination.activities.slice(0, 3).map(activity => 
                            `<span class="activity-tag">${activity}</span>`
                        ).join('')}
                        ${destination.activities.length > 3 ? '<span class="more">+' + (destination.activities.length - 3) + ' more</span>' : ''}
                    </div>
                </div>
                
                <div class="card-actions">
                    <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" 
                            onclick="toggleFavorite(${destination.id})">
                        <i class="heart-icon">${isFavorite ? '❤️' : '🤍'}</i>
                        ${isFavorite ? 'Favorited' : 'Add to Favorites'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Display message when no preferences are found
 */
function displayNoPreferences() {
    const container = document.getElementById('recommendations-container');
    container.innerHTML = `
        <div class="no-preferences">
            <h3>No Preferences Found</h3>
            <p>It looks like you haven't filled out our recommendation form yet. Let's find your perfect vacation destination!</p>
            <a href="form.html" class="cta-button">Get Personalized Recommendations</a>
        </div>
    `;
}

/**
 * Check if destination is in favorites
 */
function isDestinationFavorite(destinationId) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(destinationId);
}

/**
 * Toggle favorite status of a destination
 */
function toggleFavorite(destinationId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = favorites.indexOf(destinationId);
    
    if (index === -1) {
        favorites.push(destinationId);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update the button appearance
    const button = document.querySelector(`[data-id="${destinationId}"] .favorite-btn`);
    const icon = button.querySelector('.heart-icon');
    
    if (favorites.includes(destinationId)) {
        button.classList.add('favorited');
        button.innerHTML = '<i class="heart-icon">❤️</i>Favorited';
    } else {
        button.classList.remove('favorited');
        button.innerHTML = '<i class="heart-icon">🤍</i>Add to Favorites';
    }
}

/**
 * Setup favorite buttons event listeners
 */
function setupFavoriteButtons() {
    // Event delegation for dynamically created buttons
    document.addEventListener('click', function(e) {
        if (e.target.matches('.favorite-btn') || e.target.closest('.favorite-btn')) {
            const button = e.target.closest('.favorite-btn');
            const card = button.closest('.destination-card');
            const destinationId = parseInt(card.dataset.id);
            toggleFavorite(destinationId);
        }
    });
}
