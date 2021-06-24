import React from 'react';
import Link from 'next/link';

const DistanceLearning = () => {
    return (
        <div className="overview-area ptb-100">
            <div className="container">
                <div className="overview-box">
                    <div className="overview-content">
                        <h2>Find the right learning path for you</h2>
                        <p>Match your goals to our programs, explore your options and map out your path to success.</p>

                        <Link href="#">
                            <a className="default-btn">
                                <i className="flaticon-user"></i> Get Started Now <span></span>
                            </a>
                        </Link>
                    </div>

                    <div className="overview-image">
                        <img src="/images/overview-img1.png" alt="image" />
                    </div>
                </div>

                
            </div>

            <div className="shape2">
                <img src="/images/shape2.png" alt="image" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.png" alt="image" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.png" alt="image" />
            </div>
            <div className="shape9">
                <img src="/images/shape8.svg" alt="image" />
            </div>
        </div>
    )
}

export default DistanceLearning;