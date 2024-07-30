document.addEventListener('DOMContentLoaded', () => {
    // Mock data
    const profiles = [
        { id: 1, name: 'John Doe', location: 'Seattle, WA', email: 'john@example.com', privateEmail: false },
        { id: 2, name: 'Jane Smith', location: 'New York, NY', email: 'jane@example.com', privateEmail: true }
    ];

    const loggedInUser = { id: 1, name: 'John Doe', email: 'john@example.com', privateEmail: false };

    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate login
            window.location.href = 'profiles.html';
        });
    }

    // Load profiles
    const profilesList = document.getElementById('profilesList');
    if (profilesList) {
        profiles.forEach(profile => {
            const profileDiv = document.createElement('div');
            profileDiv.className = 'profile';
            profileDiv.innerHTML = `
                <h3>${profile.name}</h3>
                <p>Location: ${profile.location}</p>
                <a href="profile.html?id=${profile.id}">View Profile</a>
            `;
            profilesList.appendChild(profileDiv);
        });
    }

    // Search profiles
    const searchForm = document.getElementById('searchForm');
    const searchResults = document.getElementById('searchResults');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const location = searchForm.location.value.toLowerCase();
            searchResults.innerHTML = '';
            const results = profiles.filter(profile => profile.location.toLowerCase().includes(location));
            results.forEach(profile => {
                const profileDiv = document.createElement('div');
                profileDiv.className = 'profile';
                profileDiv.innerHTML = `
                    <h3>${profile.name}</h3>
                    <p>Location: ${profile.location}</p>
                    <a href="profile.html?id=${profile.id}">View Profile</a>
                `;
                searchResults.appendChild(profileDiv);
            });
        });
    }

    // Load individual profile
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        const userId = new URLSearchParams(window.location.search).get('id');
        const user = profiles.find(p => p.id == userId) || loggedInUser;
        document.getElementById('email').value = user.email;
        document.getElementById('privateEmail').checked = user.privateEmail;

        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            user.privateEmail = document.getElementById('privateEmail').checked;
            alert('Profile updated');
        });
    }

    // Add to cart functionality
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            alert('Product added to cart');
        });
    }

    // Checkout functionality
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            alert('Checkout completed');
            window.location.href = 'index.html';
        });
    }
});
