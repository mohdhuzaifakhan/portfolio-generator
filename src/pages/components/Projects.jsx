import React from 'react';

const Projects = ({ Projects }) => {
    return (
        <div className="row">
            <div className="col-12">
                <section className="p-1">
                    <div class="container-fluid">
                        <div class="card border-0">
                            <div class="card-body">
                                <h5 class="card-title"><b>Project Title</b> : {Projects?.projectTitle}</h5>
                                <h6 class="card-subtitle mb-2 text-muted"><b>Date</b> : {Projects?.year}</h6>
                                <p class="card-text"><b>Project Description</b> : {Projects?.projectDescription}</p>
                                <a href={Projects?.liveLink} class="card-link">View Project</a>
                                <a href={Projects?.githubLink} class="card-link">GitHub Repository</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Projects;
