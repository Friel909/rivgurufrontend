import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
// import Footer from '../components/_App/Footer';
import Link from 'next/link';

const CoursesList01 = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Courses" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Courses" 
            />  

            <div className="courses-area ptb-100 bg-f5f7fa">
                <div className="container">
                    <div className="edemy-grid-sorting row align-items-center">
                        <div className="col-lg-8 col-md-6 result-count">
                            <p>We found <span className="count">12</span> courses available for you</p>
                        </div>

                        <div className="col-lg-4 col-md-6 ordering">
                            <div className="select-box">
                                <select className="form-control">
                                    <option>Sort By</option>
                                    <option>Popularity</option>
                                    <option>Latest</option>
                                    <option>Price: low to high</option>
                                    <option>Price: high to low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small1.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav">
                                                <i className="flaticon-heart"></i>
                                            </a>
                                            <span className="price">$0</span>
                                            <h3>
                                                <Link href="#">
                                                    <a>Competitive Strategy and Organization</a>
                                                </Link>
                                            </h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 0 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 14 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small2.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav">
                                                <i className="flaticon-heart"></i>
                                            </a>
                                            <span className="price">$20</span>
                                            <h3>
                                                <Link href="#">
                                                    <a>Antiquities Trafficking and Art Crime</a>
                                                </Link>
                                            </h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 10 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 51 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small3.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav">
                                                <i className="flaticon-heart"></i>
                                            </a>
                                            <span className="price">$5.50</span>
                                            <h3>
                                                <Link href="#">
                                                    <a>Using Creative Problem Solving</a>
                                                </Link>
                                            </h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 10 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 20 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small4.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$79</span>
                                            <h3>
                                                <Link href="#">
                                                    <a>Inside Opera: Why Does It Matter?</a>
                                                </Link>
                                            </h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 10 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 30 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small5.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$5.50</span>
                                            <h3><a href="#">The Power of Podcast for Storytelling</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 10 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 0 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small6.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$89</span>
                                            <h3><a href="#">Fashion and Luxury Fashion in a Changing</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 10 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 0 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small7.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$39</span>
                                            <h3><a href="#">Sustainability Understanding Luxury</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 10 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 0 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small8.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$3.20</span>
                                            <h3><a href="#">Fundamentals of Music Theory Learn</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 0 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 3 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small9.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$1.99</span>
                                            <h3><a href="#">Music Making People with Other</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 10 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 50 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small10.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$5.50</span>
                                            <h3><a href="#">Luxury Fashion in a Changing World</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 10 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 0 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small1.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$3.20</span>
                                            <h3><a href="#">Buddhism and Modern Psychology</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 21 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 3 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small12.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$1.99</span>
                                            <h3><a href="#">People Making Music with Other</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 10 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 50 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small12.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$1.00</span>
                                            <h3><a href="#">Digital Marketing</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 23 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 83 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small12.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$1.00</span>
                                            <h3><a href="#">SQL Training: Basics</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 66 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 55 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="prev page-numbers">
                                    <i className='bx bx-chevrons-left'></i>
                                </a>
                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className='bx bx-chevrons-right'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default CoursesList01;