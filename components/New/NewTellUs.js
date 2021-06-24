import React, { useState }  from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl';
import Link from 'next/link';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    category: "",
    subject: "",
    text: ""
};

const AboutUs = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log(contact)
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, category, curcompany, phone, subject, text } = contact;
            const payload = { name, email, category, curcompany, phone, subject, text };
            await axios.post(url, payload);
            console.log(url);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="about-area bg-fffaf3 ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">#FreeCourse</span>
                    <h2>Join Us To Enjoy The Free Courses</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <div className="image">
                                <img src="/images/about-img7.png" alt="image" />
                                <img src="/images/about-img8.png" alt="image" />
                            </div>

                            <div className="shape17">
                                <img src="/images/shape16.png" alt="image" />
                            </div>
                            <div className="shape18">
                                <img src="/images/shape17.png" alt="image" />
                            </div>
                            <div className="shape19">
                                <img src="/images/shape18.png" alt="image" />
                            </div>
                            <div className="shape20">
                                <img src="/images/shape19.png" alt="image" />
                            </div>
                            <div className="shape21">
                                <img src="/images/shape20.png" alt="image" />
                            </div>
                            <div className="shape22">
                                <img src="/images/shape21.png" alt="image" />
                            </div>
                            <div className="shape23">
                                <img src="/images/shape22.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="contact-form">
                            <h2>Ready to Get Started?</h2>
                            <p>Your email address will not be published. Required fields are marked *</p>

                            <form id="TellUs" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Your Name" 
                                                value={contact.name}
                                                onChange={handleChange}
                                                ref={register({ required: true })}
                                            />
                                            <div className='invalid-feedback' style={{display: 'block'}}>
                                                {errors.name && 'Name is required.'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="email" 
                                                placeholder="Your email address" 
                                                value={contact.email}
                                                onChange={handleChange}
                                                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                            />
                                            <div className='invalid-feedback' style={{display: 'block'}}>
                                                {errors.email && 'Email is required.'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="curcompany" 
                                                placeholder="Current Company (Optional)" 
                                                value={contact.category}
                                                onChange={handleChange}
                                                ref={register({ required: true })}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="phone" 
                                                placeholder="Phone" 
                                                value={contact.category}
                                                onChange={handleChange}
                                                ref={register({ required: true })}
                                            />
                                            <div className='invalid-feedback' style={{display: 'block'}}>
                                                {errors.category && 'phone is required.'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="category" 
                                                placeholder="Category" 
                                                value={contact.category}
                                                onChange={handleChange}
                                                ref={register({ required: true })}
                                            />
                                            <div className='invalid-feedback' style={{display: 'block'}}>
                                                {errors.category && 'category is required.'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                placeholder="Your Subject" 
                                                value={contact.subject}
                                                onChange={handleChange}
                                                ref={register({ required: true })}
                                            />
                                            <div className='invalid-feedback' style={{display: 'block'}}>
                                                {errors.subject && 'Subject is required.'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea 
                                                name="text" 
                                                cols="30" 
                                                rows="5" 
                                                placeholder="Write your message..." 
                                                value={contact.text}
                                                onChange={handleChange}
                                                ref={register({ required: true })}
                                            />
                                            <div className='invalid-feedback' style={{display: 'block'}}>
                                                {errors.text && 'Text body is required.'}
                                            </div>
                                        </div>
                                    </div>
                
                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit" className="default-btn"> Register for The Free Courses </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;