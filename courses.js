const categories = {
    finance: { name: 'Finance', enrolments: 1200, rating: 4.5, image: 'Finance.webp' },
    economy: { name: 'Economy', enrolments: 800, rating: 4.3, image: 'eco.avif' },
    history: { name: 'History', enrolments: 950, rating: 4.4, image: 'history.webp' },
    geography: { name: 'Geography', enrolments: 650, rating: 4.2, image: 'geo.webp' },
    maths: { name: 'Maths', enrolments: 1500, rating: 4.7, image: 'math.jpg' },
    reasoning: { name: 'Reasoning', enrolments: 700, rating: 4.1, image: 'reasoning.jpg' }
};

const courses = {
    finance: [
        { title: 'Basic Finance', thumbnail: 'Finance.webp', price: '$50', duration: '5 hours' },
        { title: 'Advanced Finance', thumbnail: 'Finance.webp', price: '$100', duration: '10 hours' }
    ],
    economy: [
        { title: 'Microeconomics', thumbnail: 'eco.avif', price: '$60', duration: '6 hours' },
        { title: 'Macroeconomics', thumbnail: 'eco.avif', price: '$80', duration: '8 hours' }
    ],
    history: [
        { title: 'World History', thumbnail: 'history.webp', price: '$70', duration: '7 hours' },
        { title: 'Ancient Civilizations', thumbnail: 'history.webp', price: '$90', duration: '9 hours' }
    ],
    geography: [
        { title: 'Physical Geography', thumbnail: 'geo.webp', price: '$40', duration: '4 hours' },
        { title: 'Human Geography', thumbnail: 'geo.webp', price: '$60', duration: '6 hours' }
    ],
    maths: [
        { title: 'Algebra', thumbnail: 'math.jpg', price: '$50', duration: '5 hours' },
        { title: 'Calculus', thumbnail: 'math.jpg', price: '$100', duration: '10 hours' }
    ],
    reasoning: [
        { title: 'Logical Reasoning', thumbnail: 'reasoning.jpg', price: '$45', duration: '4.5 hours' },
        { title: 'Critical Thinking', thumbnail: 'reasoning.jpg', price: '$75', duration: '7.5 hours' }
    ]
};

function toggleCategories() {
    const container = document.getElementById('categories-container');
    container.style.display = container.style.display === 'none' ? 'flex' : 'none';
    const courseContainer = document.getElementById('course-container');
    courseContainer.innerHTML = '';
}

function showCourses(category) {
    const courseContainer = document.getElementById('course-container');
    courseContainer.innerHTML = '';

    const selectedCategory = document.createElement('div');
    selectedCategory.className = 'selected-category';
    selectedCategory.innerHTML = `
        <h2>${categories[category].name}</h2>
        <p>Enrolments: ${categories[category].enrolments}</p>
        <p>Rating: ${getStars(categories[category].rating)}</p>
        <img src="${categories[category].image}" alt="${categories[category].name}">
    `;
    courseContainer.appendChild(selectedCategory);

    courses[category].forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <img src="${course.thumbnail}" alt="${course.title}">
            <h4>${course.title}</h4>
            <p>Price: ${course.price}</p>
            <p>Duration: ${course.duration}</p>
            <p>Rating: ${getStars(4.5)}</p>
            <p>Enrolments: ${Math.floor(Math.random() * 1000)}</p>
        `;
        courseContainer.appendChild(courseCard);
    });

    document.getElementById('categories-container').style.display = 'none';
}

function getStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
    }
    return stars;
}
