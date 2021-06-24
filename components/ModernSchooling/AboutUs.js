import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-area bg-f5f7fa ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image text-center">
                            <img src="/images/about-img10.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span className="sub-title">About Us</span>
                            <h2>Our List of Innovative Services</h2>
                            <p>Personalized career enhancement program for your success.</p>

                            <ul className="features-list">
                                <li><span><i className="flaticon-experience"></i> Mentorship</span></li>
                                <li><span><i className="flaticon-time-left"></i> Career Counselling</span></li>
                                <li><span><i className="flaticon-tutorials"></i> Self-Study</span></li>
                                <li><span><i className="flaticon-self-growth"></i> Live Webinars</span></li>
                                <li><span><i className="flaticon-play"></i> Podcasts/Videos</span></li>
                                <li><span><i className="flaticon-people"></i> Industry Experts</span></li>
                            </ul>

                            <Link href="/profile-authentication">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> Register for The Free Courses <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;