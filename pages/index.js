// import React from 'react'
// import MainBanner from '@/components/Index/MainBanner'
// import Features from '@/components/Index/Features'
// import TopCourses from '@/components/Index/TopCourses'
// import About from '@/components/Index/About'
// import Testimonials from '@/components/Index/Testimonials'
// import Instance from '@/components/Index/Instance'
// import Partner from '@/components/Index/Partner'
// import Ad from '@/components/Index/Ad'
// import Funfacts from '@/components/Index/Funfacts'
// import Blog from '@/components/Index/Blog'
// import EdemyPremium from '@/components/Index/EdemyPremium'
// import axios from 'axios'
// import baseUrl from '@/utils/baseUrl'

// const Index = ({ courses }) => {
//     // console.log(courses)
//     return (
//         <React.Fragment>
//             <MainBanner />
//             <Features />
//             <TopCourses courses={courses} />
//             <About />
//             <Testimonials />
//             <Instance />
//             <Partner />
//             <Ad />
//             <Funfacts />
//             <Blog />
//             <EdemyPremium />
//         </React.Fragment>
//     )
// }
import React from 'react';
import Head from 'next/head'
// import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/ModernSchooling/MainBanner'; 
import FeaturedCourses from '../components/ModernSchooling/FeaturedCourses';
import AboutUs from '../components/ModernSchooling/AboutUs';
import Courses from '../components/ModernSchooling/Courses';
import FeedbackSlider from '../components/ModernSchooling/FeedbackSlider';
import TopCategories from '../components/ModernSchooling/TopCategories';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import DistanceLearning from '../components/ModernSchooling/DistanceLearning';
import UpcomingEvents from '../components/ModernSchooling/UpcomingEvents';
import SubscribeForm from '../components/ModernSchooling/SubscribeForm';
import Partner from '../components/ModernSchooling/Partner';
import TellUs from '../components/New/NewTellUs';
// import Footer from '../components/_App/Footer';

const Index = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Rivguru - Your Career Partner</title>
            </Head>
            {/* <Navbar /> */}
            <MainBanner />
            <FeaturedCourses />
            <AboutUs />
            <TellUs />
            <DistanceLearning />
            <TopCategories />
            <FunFactsTwo />
            <Courses />
            <FeedbackSlider />
            <UpcomingEvents />
            <SubscribeForm />
            <Partner />
            {/* <Footer /> */}
        </React.Fragment>
    )
}


export default Index