import React from 'react';

const Projects = ({ Projects }) => {
    return (
        <section className="p-1">
            <div class="container mt-1">
                <div class="card border-0">
                    <div class="card-body">
                        <h5 class="card-title">{Projects?.projectTitle}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Project Date: {Projects?.year}</h6>
                        <p class="card-text">{Projects?.projectDescription}</p>
                        <a href={Projects?.liveLink} class="card-link">View Project</a>
                        <a href={Projects?.githubLink} class="card-link">GitHub Repository</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
