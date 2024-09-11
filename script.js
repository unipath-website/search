const schools = [
    {
        name: 'University of Toronto',
        location: 'Toronto, ON',
        logo: 'logo/UniversityofToronto.jpg',
    },
    {
        name: 'University of Waterloo',
        location: 'Waterloo, ON',
        logo: 'logo/UniversityOfWaterloo.svg'
    },
    {
        name: 'Queen\'s University',
        location: 'Kingston, ON',
        logo: 'logo/QueensU.svg'
    },
    {
        name: 'McMaster University',
        location: 'Hamilton, ON',
        logo: 'logo/McMaster_University_logo.svg'
    },
    {
        name: 'Western University',
        location: 'London, ON',
        logo: 'logo/WesternUniversity.svg'
    }
];

function displaySchoolCards(schoolsToDisplay) {
    const schoolCardsContainer = document.getElementById('school-cards');
    schoolCardsContainer.innerHTML = '';

    schoolsToDisplay.forEach(school => {
        const card = document.createElement('div');
        card.classList.add('school-card');

        card.innerHTML = `
      <img src="${school.logo}" alt="one moment lol" class="school-logo">
      <h3>${school.name}</h3>
      <p>${school.location}</p>
      
    `;

        schoolCardsContainer.appendChild(card);
    });
}

function filterSchools() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredSchools = schools.filter(school =>
        school.name.toLowerCase().includes(searchInput) ||
        school.location.toLowerCase().includes(searchInput)
    );

    displaySchoolCards(filteredSchools);
}

displaySchoolCards(schools);
