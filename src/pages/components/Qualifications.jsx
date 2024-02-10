import React from 'react';

const Qualifications = ({ Qualifications }) => {
    return (
        <section className="p-1">
            <div class="container mt-1">
                <div class="card border-0">
                    <div class="card-body">
                        <h5 class="card-title">{Qualifications?.degree}</h5>
                        <p class="card-text">{Qualifications?.collegeName}</p>
                        <p class="card-text">{Qualifications?.field}</p>
                        <p class="card-text"><small class="text-muted">{Qualifications?.year}</small></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualifications;
