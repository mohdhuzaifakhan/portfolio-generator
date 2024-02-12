import React from 'react';

const Introduction = ({ Personal_Info }) => {
    return (
        <section className="bg-white p-1">
            <div class="container mt-1">
                <div class="card border-0">
                    <div class="card-body">
                        <div class="card-text">
                            <div className="row justify-content-between">
                                <div className="col-lg-5 col-md-10">
                                    <i class="fas fa-envelope mr-2"></i><span class="ml-1">{Personal_Info?.email} xyz@gmail.com</span>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <i class="fab fa-github mr-2"></i><span class="ml-1"><a href={Personal_Info?.githubLink}>Github link</a></span>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <i class="fas fa-phone mr-2"></i><span class="ml-1">{Personal_Info?.phone}</span>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <i class="fab fa-linkedin mr-2"></i><span class="ml-1"><a href={Personal_Info?.linkedin}>LinkedIn link</a></span>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <i class="fas fa-map-marker-alt mr-2"></i><span class="ml-1">Aligarh</span>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <i class="fas mr-2">&#xf3c5;</i><span class="ml-1"><a href={Personal_Info?.othersLinks || "#"}>Other link</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
