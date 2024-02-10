import React from 'react';

const Experiences = ({ Expriences }) => {
    return (
        <section className=" p-1">
            <div class="container mt-1">
                <div class="card border-0">
                    <div class="card-body">
                        <h5 class="card-title">{Expriences?.jobTitle}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{Expriences?.companyName}</h6>
                        <p class="card-text">{Expriences?.jobDescription}</p>
                        <p class="card-text"><small class="text-muted">{Expriences?.year}</small></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
