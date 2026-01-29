const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "PHP", level: 75 },
    { name: "C++ / C#.NET", level: 70 },
    { name: "MySQL", level: 70 },
    { name: "Git", level: 85 },
    { name: "Jira", level: 60 },
    { name: "Agile / Scrum", level: 80 }
];

const skillsContainer = document.querySelector(".skills-grid");

skills.forEach(skill => {
    skillsContainer.innerHTML += `
        <div class="skill">
            <span>${skill.name}</span>
            <div class="bar">
                <div class="fill" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `;
});