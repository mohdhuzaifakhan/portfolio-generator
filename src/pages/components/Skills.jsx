import React from 'react';

const Skills = ({ Skills }) => {
    return (
        <section className="p-1">
            <div class="container mt-1">
                <div class="card border-0">
                    <div class="card-body">
                        <h5 class="card-title">Skills</h5>
                        <ul class="list-group list-group-flush">
                            {/* <li class="list-group-item">HTML</li>
                            <li class="list-group-item">CSS</li>
                            <li class="list-group-item">JavaScript</li>
                            <li class="list-group-item">React.js</li>
                            <li class="list-group-item">Node.js</li>
                            <li class="list-group-item">Bootstrap</li> */}
                            {
                                Skills?.map((item) => {
                                    return <li class="list-group-item">{item}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
