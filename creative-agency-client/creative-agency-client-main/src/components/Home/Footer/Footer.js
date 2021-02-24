import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="brand-bg" id="contact">
            <div className="container mx-auto p-5 order-root row footer-root">
                <div className="col-md-6">
                    <div className="left-box">
                        <h2 className="pt-3">Let us handle your project, professionally.</h2>
                        <p><small>Wih well written codes, we build amazing apps for all platforms, mobile and web apps in general.</small></p>
                    </div>
                </div>
                <div className="col-md-6">
                    <form>
                        <input type="email" className="form-control mb-2" name="email" placeholder="your email address"/>
                        <input type="text" className="form-control mb-2" name="name" placeholder="Your name / company's name"/>
                        <textarea name="message" className="form-control mb-2" rows="10" placeholder="Your message"/>
                        <input type="submit" value="Send" className="btn landing-dark-btn px-4"/>
                    </form>
                </div>
            </div>
                <p className="text-center m-0"><small>copyright Orange labs {new Date().getFullYear()}</small></p>
        </div>
    );
};

export default Footer;