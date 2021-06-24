import React from 'react';
import Link from 'next/link';

const FeaturedCourses = () => {
    return (
        <div className="boxes-area boxes-style-two bg-f5f7fa">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-box-item">
                            <div className="image">
                                <img src="/images/boxes-img1.png" alt="image" />
                            </div>
                            <h3>Learn anything</h3>
                            <p>Whether you want to develop as a professional or discover a new hobby, there's an online course.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-box-item">
                            <div className="image">
                                <img src="/images/boxes-img2.png" alt="image" />
                            </div>
                            <h3>Flexible learning</h3>
                            <p>Get a custom learning plan tailor to fit your busy life. Learn at your own pace and reach your goal.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-box-item">
                            <div className="image">
                                <img src="/images/boxes-img3.png" alt="image" />
                            </div>
                            <h3>Learn with experts</h3>
                            <p>Meet exparts from top university and cultural institutions, who'll share their experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses;