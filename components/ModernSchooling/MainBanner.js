import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="hero-banner-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="hero-banner-content">
                            <h1>We Take Learning to New Heights</h1>
                            <p>We believe everyone has the capacity to be creative. Rivguru is a place where people develop their own potential.</p>
                            
                            <Link href="/regist">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> Join For Free <span></span>
                                </a>
                            </Link>
                            <p/>
                            <p>Millions of people have used Rivguru to decide which online course to take.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="hero-banner-image">
                            <img src="/images/main-banner3.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-shape19">
                <img src="/images/banner-shape20.png" alt="image" />
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default MainBanner;