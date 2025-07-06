// favorites.js - Handle favorites page functionality
document.addEventListener('DOMContentLoaded', function() {
    displayFavorites();
    setupClearAllButton();
});

/**
 * Display all favorited destinations
 */
async function displayFavorites() {
    const favoriteIds = getFavoriteIds();
    const destinations = await loadDestinations();
    
    if (favoriteIds.length === 0) {
        displayNoFavorites();
        return;
    }
    
    const favoriteDestinations = destinations.filter(dest => 
        favoriteIds.includes(dest.id)
    );
    
    renderFavorites(favoriteDestinations);
    updateFavoritesCount(favoriteDestinations.length);
}

/**
 * Get favorite destination IDs from localStorage
 */
function getFavoriteIds() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
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
 * Render favorite destinations to the page
 */
function renderFavorites(favorites) {
    const container = document.getElementById('favorites-container');
    const favoritesHTML = favorites.map(destination => 
        createFavoriteCard(destination)
    ).join('');
    
    container.innerHTML = `
        <div class="favorites-header">
            <h2>Your Saved Destinations</h2>
            <button id="clear-all-btn" class="clear-all-btn">Clear All Favorites</button>
        </div>
        <div class="favorites-grid">
            ${favoritesHTML}
        </div>
    `;
}

/**
 * Create a favorite destination card HTML
 */
function createFavoriteCard(destination) {
    return `
        <div class="favorite-card" data-id="${destination.id}">
            <div class="card-image">
                <img src="${destination.image}" alt="${destination.name}" loading="lazy">
            </div>
            <div class="card-content">
                <h3>${destination.name}</h3>
                <p class="location">${destination.country}</p>
                <p class="description">${destination.description}</p>
                
                <div class="destination-info">
                    <div class="info-item">
                        <span class="label">Budget:</span>
                        <span class="value budget-${destination.budget}">${destination.budget}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Best Time:</span>
                        <span class="value">${destination.bestSeasons.join(', ')}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Duration:</span>
                        <span class="value">${destination.recommendedDuration}</span>
                    </div>
                </div>
                
                <div class="activities">
                    <span class="label">Perfect for:</span>
                    <div class="activity-tags">
                        ${destination.activities.slice(0, 4).map(activity => 
                            `<span class="activity-tag">${activity}</span>`
                        ).join('')}
                        ${destination.activities.length > 4 ? '<span class="more">+' + (destination.activities.length - 4) + ' more</span>' : ''}
                    </div>
                </div>
                
                <div class="card-actions">
                    <button class="remove-btn" onclick="removeFavorite(${destination.id})">
                        <i class="remove-icon">🗑️</i>
                        Remove from Favorites
                    </button>
                    <button class="share-btn" onclick="shareDestination(${destination.id})">
                        <i class="share-icon">📤</i>
                        Share
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Display message when no favorites are found
 */
function displayNoFavorites() {
    const container = document.getElementById('favorites-container');
    container.innerHTML = `
        <div class="no-favorites">
            <div class="empty-state">
                <div class="empty-icon">💝</div>
                <h3>No Favorites Yet</h3>
                <p>You haven't saved any destinations yet. Start exploring and add destinations to your favorites!</p>
                <div class="action-buttons">
                    <a href="form.html" class="cta-button">Get Recommendations</a>
                    <a href="destinations.html" class="secondary-button">Browse All Destinations</a>
                </div>
            </div>
        </div>
    `;
}

/**
 * Remove a destination from favorites
 */
function removeFavorite(destinationId) {
    const confirmed = confirm('Are you sure you want to remove this destination from your favorites?');
    
    if (!confirmed) return;
    
    let favorites = getFavoriteIds();
    const index = favorites.indexOf(destinationId);
    
    if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        
        // Remove the card from the DOM with animation
        const card = document.querySelector(`[data-id="${destinationId}"]`);
        if (card) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                card.remove();
                updateFavoritesCount(favorites.length);
                
                // Show no favorites message if list is empty
                if (favorites.length === 0) {
                    displayNoFavorites();
                }
            }, 300);
        }
        
        showNotification('Destination removed from favorites');
    }
}

/**
 * Clear all favorites
 */
function clearAllFavorites() {
    const favorites = getFavoriteIds();
    
    if (favorites.length === 0) {
        showNotification('No favorites to clear');
        return;
    }
    
    const confirmed = confirm(`Are you sure you want to remove all ${favorites.length} destinations from your favorites?`);
    
    if (confirmed) {
        localStorage.removeItem('favorites');
        displayNoFavorites();
        showNotification('All favorites cleared');
    }
}

/**
 * Setup clear all button event listener
 */
function setupClearAllButton() {
    document.addEventListener('click', function(e) {
        if (e.target.matches('#clear-all-btn')) {
            clearAllFavorites();
        }
    });
}

/**
 * Share a destination (simple implementation)
 */
function shareDestination(destinationId) {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this amazing destination!',
            text: 'I found this great vacation spot on ChooseYourVacation',
            url: `${window.location.origin}/destinations.html#${destinationId}`
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        const url = `${window.location.origin}/destinations.html#${destinationId}`;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Destination link copied to clipboard!');
        }).catch(() => {
            showNotification('Unable to copy link');
        });
    }
}

/**
 * Update favorites count display
 */
function updateFavoritesCount(count) {
    const countElement = document.getElementById('favorites-count');
    if (countElement) {
        countElement.textContent = count;
    }
    
    // Update page title
    document.title = `My Favorites (${count}) - ChooseYourVacation`;
}

/**
 * Show notification message
 */
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

/**
 * Export favorites data (bonus feature)
 */
function exportFavorites() {
    const favorites = getFavoriteIds();
    
    if (favorites.length === 0) {
        showNotification('No favorites to export');
        return;
    }
    
    const data = {
        exportDate: new Date().toISOString(),
        favorites: favorites
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-favorite-destinations.json';
    a.click();
    
    URL.revokeObjectURL(url);
    showNotification('Favorites exported successfully!');
}

/**
 * Initialize favorites page stats
 */
function initializeFavoritesStats() {
    const favorites = getFavoriteIds();
    updateFavoritesCount(favorites.length);
}
