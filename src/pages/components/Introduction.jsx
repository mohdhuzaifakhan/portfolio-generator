import React from 'react';

const Introduction = () => {
    return (
        <section className="bg-white p-1">
            <div class="container mt-1">
                <div class="card border-0">
                    <div class="card-body">
                        <h5 class="card-title">John Doe</h5>
                        <div class="card-text">
                            <ul class="list-unstyled">
                                <li><i class="fas fa-envelope mr-2"></i><span class="ml-1">johndoe@example.com</span></li>
                                <li><i class="fas fa-phone mr-2"></i><span class="ml-1">+1234567890</span></li>
                                <li><i class="fas fa-map-marker-alt mr-2"></i><span class="ml-1">123 Main Street, City, Country</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
