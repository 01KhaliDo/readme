const projects = [
    {
        title: { sv: "Webbchatt", en: "Web Chat" },
        description: {
            sv: "Realtidsbaserad webbchatt med privata meddelanden, skrivindikatorer och notifikationer.",
            en: "Real-time web chat with private messaging, typing indicators, and notifications."
        },
        tech: ["Node.js", "Socket.io", "JavaScript"],
        live: "https://webchatt-n93e.onrender.com",
        github: "https://github.com/01khalido/chatt"
    },
    {
        title: { sv: "RKD Travels", en: "RKD Travels" },
        description: {
            sv: "Resebokningsplattform med sökning, bokning och användarhantering.",
            en: "Travel booking platform with search, booking, and user management."
        },
        tech: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "AWS"],
        live: "",
        github: "https://github.com/01khalido/rkd-travels"
    },
    {
        title: { sv: "Face Recognition", en: "Face Recognition" },
        description: {
            sv: "Ett system som använder webbkamera för att detektera och känna igen ansikten samt tränar automatiskt om modellen när ny data läggs till.",
            en: "A system using webcam for face detection and recognition, automatically retraining the model when new data is added."
        },
        tech: ["Python", "OpenCV", "NumPy", "Haar Cascade", "LBPH Face Recognizer"],
        live: "",
        github: "https://github.com/01khalido/Face-recognition-system"
    }
];

const projectsContainer = document.querySelector(".projects-grid");

function renderProjects(lang = 'sv') {
    projectsContainer.innerHTML = "";
    projects.forEach(project => {
        const title = project.title[lang] || project.title.sv;
        const description = project.description[lang] || project.description.sv;
        const liveText = translations[lang].project_link_live;
        const githubText = translations[lang].project_link_github;

        projectsContainer.innerHTML += `
        <div class="project-card">
            <h3>${title}</h3>
            <p>${description}</p>

            <ul class="tech-list">
                ${project.tech.map(tech => `<li>${tech}</li>`).join("")}
            </ul>

            <div class="project-links">
                ${project.live ? `<a href="${project.live}" target="_blank">${liveText}</a>` : ""}
                <a href="${project.github}" target="_blank">${githubText}</a>
            </div>
        </div>
    `;
    });
}

// Initial render handled by main script or default here
// renderProjects('sv'); 

