import React from 'react';
// import Navbar from '../components/_App/Navbar';
import Head from "next/head";
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
// import Footer from '../components/_App/Footer';

const CoursesGrid03 = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Rivguru - Your Career Partner</title>
            </Head>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Webinars" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Webinars" 
            />  

            <div className="courses-area courses-section pt-100 pb-70">
                <div className="container">
                    <div className="edemy-grid-sorting row align-items-center">
                        <div className="col-lg-8 col-md-6 result-count">
                            <p>We found <span className="count">12</span> Webinars available for you</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box bg-color">
                                <div className="courses-image">
                                    <Link href="/single-courses-1">
                                        <a className="d-block image">
                                            <img src="/images/webinars/webinar1.jpg" alt="image" />
                                        </a>
                                    </Link>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$0</div>
                                </div>
                                <div className="courses-content">
                                    <p>19th April 2021 | 14.00 WIB</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box bg-color">
                                <div className="courses-image">
                                    <Link href="/single-courses-1">
                                        <a className="d-block image">
                                            <img src="/images/webinars/webinar2.jpg" alt="image" />
                                        </a>
                                    </Link>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$0</div>
                                </div>
                                <div className="courses-content">
                                    
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Mengenal Industri 5.0 Future Career Opportunity Artificial Intelligence</a>
                                        </Link>
                                    </h3>

                                    <p>16th April 2021 | 11.30 AM</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box bg-color">
                                <div className="courses-image">
                                    <Link href="/single-courses-1">
                                        <a className="d-block image">
                                            <img src="/images/webinars/webinar3.jpg" alt="image" />
                                        </a>
                                    </Link>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$0</div>
                                </div>
                                <div className="courses-content">
                                    
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Improve Your Communication and Soft skills</a>
                                        </Link>
                                    </h3>
 
                                    <p>15th April 2021 | 14.00 WIB</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box bg-color">
                                <div className="courses-image">
                                    <Link href="/single-courses-1">
                                        <a className="d-block image">
                                            <img src="/images/webinars/webinar4.jpg" alt="image" />
                                        </a>
                                    </Link>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$0</div>
                                </div>
                                <div className="courses-content">
                                    
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Introduction SQL For Data Analyst</a>
                                        </Link>
                                    </h3>

                                    <p>3rd February 2021 | 14.00 WIB</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box bg-color">
                                <div className="courses-image">
                                    <Link href="/single-courses-1">
                                        <a className="d-block image">
                                            <img src="/images/webinars/webinarart1.jpg" alt="image" />
                                        </a>
                                    </Link>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$0</div>
                                </div>
                                <div className="courses-content">
                                    
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Financial Modeling in Excel</a>
                                        </Link>
                                    </h3>

                                    <p>23 April 2021 | 8.30 PM</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box bg-color">
                                <div className="courses-image">
                                    <Link href="/single-courses-1">
                                        <a className="d-block image">
                                            <img src="/images/webinars/webinarart2.jpg" alt="image" />
                                        </a>
                                    </Link>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$0</div>
                                </div>
                                <div className="courses-content">
                                    
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Artificial Intelligence</a>
                                        </Link>
                                    </h3>

                                    <p>6th May 2021 | 11.30 AM</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box bg-color">
                                <div className="courses-image">
                                    <Link href="/single-courses-1">
                                        <a className="d-block image">
                                            <img src="/images/webinars/webinarart3.jpg" alt="image" />
                                        </a>
                                    </Link>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$0</div>
                                </div>
                                <div className="courses-content">
                                    
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Improve Your Communication</a>
                                        </Link>
                                    </h3>

                                    <p>7th November 2020 | 14.00 WIB</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box bg-color">
                                <div className="courses-image">
                                    <Link href="/single-courses-1">
                                        <a className="d-block image">
                                            <img src="/images/webinars/webinarart4.png" alt="image" />
                                        </a>
                                    </Link>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$0</div>
                                </div>
                                <div className="courses-content">
                                    
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>SQL For Data Analyst</a>
                                        </Link>
                                    </h3>

                                    <p>3rd December 2020 | 14.00 WIB</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box bg-color">
                                <div className="courses-image">
                                    <Link href="/single-courses-1">
                                        <a className="d-block image">
                                            <img src="/images/webinars/webinarart1.jpg" alt="image" />
                                        </a>
                                    </Link>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$0</div>
                                </div>
                                <div className="courses-content">
                                    
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Private Banking Course</a>
                                        </Link>
                                    </h3>

                                    <p>19th April 2021 | 14.00 WIB</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
     
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default CoursesGrid03;