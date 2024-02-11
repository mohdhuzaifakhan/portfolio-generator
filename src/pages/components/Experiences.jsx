import React from 'react';

const Experiences = ({ Expriences }) => {
    return (
        <div className="row">
            <div className="col-12">
                <section className=" p-1">
                    <div class="container">
                        <div class="card border-0">
                            <div class="card-body">
                                <h5 class="card-title"><b>Job Title</b> : {Expriences?.jobTitle}</h5>
                                <h6 class="card-subtitle mb-2 text-muted"><b>Company Name</b> : {Expriences?.companyName}</h6>
                                <p class="card-text"><b>Description</b> : {Expriences?.jobDescription}</p>
                                <p class="card-text"><b>Date</b> : <small class="text-muted">{Expriences?.year}</small></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Experiences;
