import React from 'react';

const Projects = () => {
    return (
        <section className="p-1">
            {/* <div class="container mt-5">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-project-diagram"></i> Project Details
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Project Name</h5> */}
            {/* <div class="project-info">
                            <i class="fas fa-calendar-alt"></i> <strong>Date:</strong> January 2023
                        </div>
                        <div class="project-info">
                            <i class="fas fa-user"></i> <strong>Author:</strong> John Doe
                        </div>
                        <div class="project-info">
                            <i class="fas fa-code"></i> <strong>Technology:</strong> React.js, Node.js, Bootstrap
                        </div> */}
            {/* <div class="project-info">
                            <i class="fas fa-info-circle"></i> <strong>Description:</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor erat non mi bibendum, id accumsan sapien tempus. Mauris euismod, nulla et convallis vehicula, neque sem laoreet lorem, nec volutpat orci justo id odio.</p>
                        </div>
                        <div class="project-info">
                            <i class="fas fa-link"></i> <strong>URL:</strong> <a href="#">Project Website</a>
                        </div>
                        <div class="project-info">
                            <i class="fas fa-code-branch"></i> <strong>GitHub:</strong> <a href="#">Project Repository</a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div class="container mt-5">
                <div class="card">
                    <img src="project-image.jpg" class="card-img-top" alt="Project Image" />
                    <div class="card-body">
                        <h5 class="card-title">Project Name</h5>
                        <p class="card-text">Description of the project goes here. This can be a brief overview of the project, its purpose, and key features.</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Technology Used:</strong> HTML, CSS, JavaScript</li>
                            <li class="list-group-item"><strong>Date:</strong> January 2023</li>
                            <li class="list-group-item"><strong>GitHub Repository:</strong> <a href="#">Project Repository</a></li>
                        </ul>
                        <a href="#" class="btn btn-primary mt-3">View Project</a>
                    </div>
                </div>
            </div> */}
            <div class="container mt-1">
                <div class="card border-0">
                    <div class="card-body">
                        <h5 class="card-title">Project Name</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Project Date: January 2023</h6>
                        <p class="card-text">Description of the project goes here. This can be a brief overview of the project, its purpose, and key features.</p>
                        <a href="#" class="card-link">View Project</a>
                        <a href="#" class="card-link">GitHub Repository</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
