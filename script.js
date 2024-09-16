const schools = [
    {
        name: 'University of Toronto',
        location: 'Toronto, ON',
        programs: 700,
        meanAdmission: 96.9,
        stdev: 3.05,
        logo: './logo/UniversityOfToronto.jpg'
    },
    {
        name: 'University of Waterloo',
        location: 'Waterloo, ON',
        programs: 400,
        meanAdmission: 97.8,
        stdev: 3.9,
        logo: './logo/UniversityOfWaterloo.svg'
    },
    {
        name: 'Queen\'s University',
        location: 'Kingston, ON',
        programs: 150,
        meanAdmission: 93.3,
        stdev: 3.96,
        logo: './logo/QueensU.svg'
    },
    {
        name: 'McMaster University',
        location: 'Hamilton, ON',
        programs: 300,
        meanAdmission: 96.9,
        stdev: 2.47,
        logo: './logo/McMaster_University_Logo.svg'
    }
];

function displaySchoolCards(schoolsToDisplay) {
    const schoolCardsContainer = document.getElementById('school-cards');
    schoolCardsContainer.innerHTML = ''; // Clear existing cards

    schoolsToDisplay.forEach(school => {
        const card = document.createElement('div');
        card.classList.add('school-card');

        card.innerHTML = `
      <img src="${school.logo}" alt="${school.name} Logo" class="school-logo">
      <h3>${school.name}</h3>
      <p>Location: ${school.location}</p>
      <p>Programs: ${school.programs}</p>
      <p>Mean Admission Score: ${school.meanAdmission}</p>
      <p>Standard Deviation: ${school.stdev}</p>
    `;

        // Add click event to each card to redirect to the school info page
        card.addEventListener('click', () => {
            // Save the selected school data in localStorage
            localStorage.setItem('selectedSchool', JSON.stringify(school));

            // Redirect to the info page
            window.location.href = 'school-info.html';
        });

        schoolCardsContainer.appendChild(card);
    });
}

displaySchoolCards(schools);

function filterSchools() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredSchools = schools.filter(school => school.name.toLowerCase().includes(searchInput));
    displaySchoolCards(filteredSchools);
}

