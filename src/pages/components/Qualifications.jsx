import React from 'react';

const Qualifications = ({ Qualifications }) => {
    return (
        <div className="row">
            <div className="col-12">
                <section className="p-1">
                    <div class="container">
                        <div class="card border-0">
                            <div class="card-body">
                                <h5 class="card-title"><b>Degree</b> : {Qualifications?.degree}</h5>
                                <p class="card-text"><b>College Name</b> : {Qualifications?.collegeName}</p>
                                <p class="card-text"><b>Field Of Study</b> : {Qualifications?.field}</p>
                                <p class="card-text"><b>Date</b> : <small class="text-muted">{Qualifications?.year}</small></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Qualifications;
