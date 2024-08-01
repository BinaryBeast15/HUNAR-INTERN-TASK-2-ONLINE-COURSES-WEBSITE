const categories = {
    finance: { name: 'Finance', enrolments: 1200, rating: 4.5, image: 'Finance.webp' },
    economy: { name: 'Economy', enrolments: 800, rating: 4.3, image: 'eco.avif' },
    history: { name: 'History', enrolments: 950, rating: 4.4, image: 'history.webp' },
    geography: { name: 'Geography', enrolments: 650, rating: 4.2, image: 'geo.webp' },
    maths: { name: 'Maths', enrolments: 1500, rating: 4.7, image: 'math.jpg' },
    reasoning: { name: 'Reasoning', enrolments: 700, rating: 4.1, image: 'reasoning.jpg' }
};

function showCategoryCards() {
    const courseContainer = document.getElementById('course-container');
    courseContainer.innerHTML = '';

    Object.keys(categories).forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <img src="${categories[category].image}" alt="${categories[category].name}">
            <h3>${categories[category].name}</h3>
            <p>Enrolments: ${categories[category].enrolments}</p>
            <p>Rating: ${getStars(categories[category].rating)}</p>
        `;
        categoryCard.onclick = () => showCourses(category);
        courseContainer.appendChild(categoryCard);
    });
}

function showCourses(category) {
    const courseContainer = document.getElementById('course-container');
    courseContainer.innerHTML = '';

    courses[category].forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <img src="${course.thumbnail}" alt="${course.title}">
            <h4>${course.title}</h4>
            <p>Price: ${course.price}</p>
            <p>Duration: ${course.duration}</p>
        `;
        courseContainer.appendChild(courseCard);
    });
}

function getStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
    }
    return stars;
}
