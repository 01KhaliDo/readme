const projects = [
    {
        title: "Webbchatt",
        description:
            "Realtidsbaserad webbchatt med privata meddelanden, skrivindikatorer och notifikationer.",
        tech: ["Node.js", "Socket.io", "JavaScript"],
        live: "https://webchatt-n93e.onrender.com",
        github: "https://github.com/01khalido/chatt"
    },
    {
        title: "RKD Travels",
        description:
            "Resebokningsplattform med sökning, bokning och användarhantering.",
        tech: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "AWS"],
        live: "",
        github: "https://github.com/01khalido/rkd-travels"
    },
    {
        title: "Face Recognition",
        description:
            "Ett system som använder webbkamera för att detektera och känna igen ansikten samt tränar automatiskt om modellen när ny data läggs till.",
        tech: ["Python", "OpenCV", "NumPy", "Haar Cascade", "LBPH Face Recognizer"],
        live: "",
        github: "https://github.com/01khalido/Face-recognition-system"
    }
];

const projectsContainer = document.querySelector(".projects-grid");

projects.forEach(project => {
    projectsContainer.innerHTML += `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>

            <ul class="tech-list">
                ${project.tech.map(tech => `<li>${tech}</li>`).join("")}
            </ul>

            <div class="project-links">
                ${project.live ? `<a href="${project.live}" target="_blank">Live demo</a>` : ""}
                <a href="${project.github}" target="_blank">GitHub</a>
            </div>
        </div>
    `;
});
