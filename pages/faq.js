import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
// import SubscribeForm from '../components/ModernSchooling/SubscribeForm';
// import Footer from '../components/_App/Footer';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SubscribeForm from '../components/Common/SubscribeForm';

resetIdCounter();

const Faq = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Frequently Asked Questions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ's" 
            />  

            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="tab faq-accordion-tab">
                        <div className="about-image mb-4 pb-4">
                            <img src="/images/courses/courses1.jpg" alt="image" />
                        </div>
                        <Tabs>
                            <TabPanel>
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem  uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Whats is Rivguru Learning?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Rivguru is an online experiential learning platform where you can access online educational videos, live webinars, career talks, career guidance, and one-to-one training, mentorship to boost your skills.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How much time do I need to devote to your program?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Generally, you need to spend less than 10-15 minutes daily to see the impactful change in you.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How you help in achieving the goals?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You have to send us the mail with your interest in "Rivguru Experiential Program" with your resume, and then we will guide you about our learning solutions.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How much we have to pay? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>We have made this program free for six months, and you don't have to pay anything to us. Register soon and see the difference.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How you help in achieving the goals?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Apart from videos, we help you to prepare for one to one basis for potential interviews like working on case studies, mock interviews, resume improvements, preparing for various stages on the interview process.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do we register for the webinar?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You have to just go on the webinar page and register for the first time, and then you can use the same login for future reference.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    I don't have any experience can I apply? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Yes, anyone can apply for our programs, there are no experience or age limits.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    I cannot find my topics on the Rivguru? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Please feel free to send us a mail at info@rivguru.com with your interest topics, and we will get some exciting videos on our platform.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What Is Your Success Rate? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Rivguru has a very high success rate; we are committed to helping you to achieve your dreams and become successful professionals.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>

            <SubscribeForm />
     
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Faq;