import React from 'react';

const Achievements = ({ Achievements }) => {
    return (
        <>
            {
                Achievements?.map((item) => {
                    return (
                        <div className="col-12">
                            <section className="p-1">
                                <div class="container">
                                    <div class="card border-0">
                                        <div class="card-body">
                                            <h5 class="card-title">{item?.title}</h5>
                                            <p class="card-text">{item?.description}</p>
                                            <p class="card-text"><small class="text-muted">Recipient: John Doe</small></p>
                                            <p class="card-text"><small class="text-muted">Date: {item?.date}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Achievements;
