import React from 'react';

const Introduction = ({ Personal_Info }) => {
    return (
        <section className="bg-white p-1">
            <div class="container mt-1">
                <div class="card border-0">
                    <div class="card-body">
                        <h5 class="card-title">{Personal_Info?.name}</h5>
                        <div class="card-text">
                            <ul class="list-unstyled">
                                <li><i class="fas fa-envelope mr-2"></i><span class="ml-1">{Personal_Info?.email}</span></li>
                                <li><i class="fas fa-phone mr-2"></i><span class="ml-1">{Personal_Info?.phone}</span></li>
                                <li><i class="fas fa-map-marker-alt mr-2"></i><span class="ml-1">Aligarh</span></li>
                                <li><i class="fas fa-map-marker-alt mr-2"></i><span class="ml-1"><a href={Personal_Info?.githubLink}>Github link</a></span></li>
                                <li><i class="fas fa-map-marker-alt mr-2"></i><span class="ml-1"><a href={Personal_Info?.linkedin}>LinkedIn link</a></span></li>
                                <li><i class="fas fa-map-marker-alt mr-2"></i><span class="ml-1"><a href={Personal_Info?.othersLinks}>Other link</a></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
