import React from 'react';
import { Link } from 'react-router-dom';

Contact.propTypes = {
    
};

function Contact(props) {
    return (
        <div>

        <section className="tf-page-title style-2">    
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">

                        <ul className="breadcrumbs">
                            <li><Link to="/">Home</Link></li>
                            <li>Contact</li>
                        </ul>
                
                    </div>
                </div>
            </div>                    
        </section>
                
        <section className="tf-contact">
            <div className="tf-container">
                <div className="row ">
                    <div className="col-md-10">
                        <div className="tf-heading style-3">
                            <h4 className="heading">UBSEC HackFEST Registration</h4>
                            <p className="sub-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit. </p>
                        </div>
                        <form action="contact/contact-process.php" method="post" id="commentform"  className="comment-form">
                            <fieldset className="name">
                                <input type="text" id="name" placeholder="Your First Name" className="tb-my-input" name="name" tabIndex="2" aria-required="true" required="" />
                            </fieldset>    
                            <fieldset className="name">
                                <input type="text" id="name" placeholder="Your Last Name" className="tb-my-input" name="name" tabIndex="2" aria-required="true" required="" />
                            </fieldset> 
                            <fieldset className="email">
                                <input type="email" id="email" placeholder="Your Email Address" className="tb-my-input" name="email" tabIndex="2" aria-required="true" required="" />
                            </fieldset>
                            <div className="form-select" id="subject">
                                <select>
                                    <option value="1">Select subject</option>
                                    <option value="2">Select subject</option>
                                    <option value="3">Select subject</option>
                                </select>
                                <i className="icon-fl-down"></i>
                            </div>
                            <fieldset className="message">
                                <textarea id="message" name="message" rows="4" placeholder="Message" tabIndex="4" aria-required="true" required="" />
                            </fieldset>
                            <div className="btn-submit"><button className="tf-button" type="submit">Send message</button></div>
                        </form>
                        
                        
                    </div>
                </div>
            </div>
        </section>
            
        </div>
    );
}

export default Contact;