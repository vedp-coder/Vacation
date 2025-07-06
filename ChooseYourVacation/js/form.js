// Form page JavaScript for ChooseYourVacation
// Handles the recommendation form logic and user preferences

document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    updateBudgetDisplay();
    loadSavedPreferences();
});

function initializeForm() {
    const form = document.getElementById('recommendationForm');
    const budgetSlider = document.getElementById('budget');
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    if (budgetSlider) {
        budgetSlider.addEventListener('input', updateBudgetDisplay);
    }
}

function updateBudgetDisplay() {
    const budgetSlider = document.getElementById('budget');
    const budgetValue = document.getElementById('budgetValue');
    
    if (budgetSlider && budgetValue) {
        const value = parseInt(budgetSlider.value);
        let budgetText = '';
        
        if (value <= 1000) {
            budgetText = `$${value} - Budget Friendly`;
        } else if (value <= 2500) {
            budgetText = `$${value} - Moderate`;
        } else {
            budgetText = `$${value} - Luxury`;
        }
        
        budgetValue.textContent = budgetText;
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(e.target);
    const preferences = {
        season: formData.get('season'),
        budget: getBudgetCategory(parseInt(formData.get('budget'))),
        budgetAmount: parseInt(formData.get('budget')),
        activities: formData.getAll('activities'),
        duration: formData.get('duration'),
        groupType: formData.get('groupType'),
        timestamp: new Date().toISOString()
    };
    
    // Validate form
    if (!validateForm(preferences)) {
        return;
    }
    
    // Save preferences
    if (window.ChooseYourVacation) {
        window.ChooseYourVacation.saveUserPreferences(preferences);
    }
    
    // Show loading state
    showLoadingState();
    
    // Simulate processing time
    setTimeout(() => {
        // Redirect to results page
        window.location.href = 'results.html';
    }, 1500);
}

function validateForm(preferences) {
    let isValid = true;
    
    // Clear previous errors
    clearFormErrors();
    
    // Validate season
    if (!preferences.season) {
        showFormError('seasonError', 'Please select a travel season');
        isValid = false;
    }
    
    // Validate activities
    if (!preferences.activities || preferences.activities.length === 0) {
        showFormError('activitiesError', 'Please select at least one activity');
        isValid = false;
    }
    
    // Validate duration
    if (!preferences.duration) {
        showFormError('durationError', 'Please select trip duration');
        isValid = false;
    }
    
    // Validate group type
    if (!preferences.groupType) {
        showFormError('groupTypeError', 'Please select your group type');
        isValid = false;
    }
    
    return isValid;
}

function showFormError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        errorElement.style.color = '#e74c3c';
    }
}

function clearFormErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(element => {
        element.textContent = '';
        element.style.display = 'none';
    });
}

function getBudgetCategory(amount) {
    if (amount <= 1000) return 'low';
    if (amount <= 2500) return 'medium';
    return 'high';
}

function showLoadingState() {
    const submitButton = document.querySelector('button[type="submit"]');
    const loadingOverlay = document.createElement('div');
    
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Finding Your Perfect Destinations...';
    }
    
    // Create loading overlay
    loadingOverlay.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Analyzing your preferences...</p>
            <p>Finding the perfect destinations for you...</p>
        </div>
    `;
    
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    document.body.appendChild(loadingOverlay);
    
    // Add spinner styles
    const spinnerStyles = document.createElement('style');
    spinnerStyles.textContent = `
        .loading-spinner {
            text-align: center;
            color: #333;
        }
        
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .loading-spinner p {
            margin: 0.5rem 0;
            font-size: 1.1rem;
        }
    `;
    
    document.head.appendChild(spinnerStyles);
}

function loadSavedPreferences() {
    if (window.ChooseYourVacation) {
        const savedPreferences = window.ChooseYourVacation.getUserPreferences();
        
        if (savedPreferences && Object.keys(savedPreferences).length > 0) {
            // Fill form with saved preferences
            const form = document.getElementById('recommendationForm');
            if (form) {
                // Season
                if (savedPreferences.season) {
                    const seasonSelect = form.querySelector('[name="season"]');
                    if (seasonSelect) seasonSelect.value = savedPreferences.season;
                }
                
                // Budget
                if (savedPreferences.budgetAmount) {
                    const budgetSlider = form.querySelector('[name="budget"]');
                    if (budgetSlider) {
                        budgetSlider.value = savedPreferences.budgetAmount;
                        updateBudgetDisplay();
                    }
                }
                
                // Activities
                if (savedPreferences.activities) {
                    savedPreferences.activities.forEach(activity => {
                        const checkbox = form.querySelector(`[name="activities"][value="${activity}"]`);
                        if (checkbox) checkbox.checked = true;
                    });
                }
                
                // Duration
                if (savedPreferences.duration) {
                    const durationSelect = form.querySelector('[name="duration"]');
                    if (durationSelect) durationSelect.value = savedPreferences.duration;
                }
                
                // Group type
                if (savedPreferences.groupType) {
                    const groupRadio = form.querySelector(`[name="groupType"][value="${savedPreferences.groupType}"]`);
                    if (groupRadio) groupRadio.checked = true;
                }
            }
        }
    }
}

// Form field interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add interactive feedback for form fields
    const formFields = document.querySelectorAll('input, select, textarea');
    
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            if (this.value) {
                this.parentElement.classList.add('filled');
            } else {
                this.parentElement.classList.remove('filled');
            }
        });
    });
    
    // Add styles for form interactivity
    const formStyles = document.createElement('style');
    formStyles.textContent = `
        .form-group.focused label {
            color: #667eea;
        }
        
        .form-group.focused input,
        .form-group.focused select,
        .form-group.focused textarea {
            border-color: #667eea;
            box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
        }
        
        .form-group.filled label {
            color: #667eea;
        }
        
        .checkbox-group input[type="checkbox"]:checked + label {
            color: #667eea;
            font-weight: 600;
        }
        
        .radio-group input[type="radio"]:checked + label {
            color: #667eea;
            font-weight: 600;
        }
        
        .form-progress {
            width: 100%;
            height: 4px;
            background: #e1e1e1;
            border-radius: 2px;
            overflow: hidden;
            margin-bottom: 2rem;
        }
        
        .form-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #667eea, #764ba2);
            transition: width 0.3s ease;
        }
    `;
    
    document.head.appendChild(formStyles);
    
    // Add form progress indicator
    addFormProgressIndicator();
});

function addFormProgressIndicator() {
    const form = document.getElementById('recommendationForm');
    if (form) {
        const progressBar = document.createElement('div');
        progressBar.className = 'form-progress';
        progressBar.innerHTML = '<div class="form-progress-bar" style="width: 0%"></div>';
        
        const firstFormGroup = form.querySelector('.form-group');
        if (firstFormGroup) {
            firstFormGroup.parentNode.insertBefore(progressBar, firstFormGroup);
        }
        
        // Update progress when form fields change
        const formFields = form.querySelectorAll('input, select, textarea');
        const totalFields = formFields.length;
        
        formFields.forEach(field => {
            field.addEventListener('change', updateProgress);
            field.addEventListener('input', updateProgress);
        });
        
        function updateProgress() {
            let filledFields = 0;
            
            formFields.forEach(field => {
                if (field.type === 'checkbox' || field.type === 'radio') {
                    if (field.checked) filledFields++;
                } else if (field.value.trim()) {
                    filledFields++;
                }
            });
            
            const progressPercent = (filledFields / totalFields) * 100;
            const progressBarFill = document.querySelector('.form-progress-bar');
            if (progressBarFill) {
                progressBarFill.style.width = `${progressPercent}%`;
            }
        }
    }
}
