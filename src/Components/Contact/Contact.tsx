import React from 'react';
import contactStyle from "../../assets/Styles/Contact.module.css";

const Contact = () => {
    return (
        <div className={contactStyle.container}>
            <h1>Contact Us</h1>
            <div className={contactStyle.inputForm}>
                <input type="text" name="text1" placeholder="First Name" />
                <input type="text" name="text2" placeholder="Last Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="number" name="phone" placeholder="Phone" />
            </div>
            <div className={contactStyle.addressForm}>
                <textarea name="textarea" rows={10} className={contactStyle.message}>Type Your Message Here</textarea>
                <input type="submit" defaultValue="Submit" className={contactStyle.submitbtn} />
            </div>
        </div>
    );
};

export default Contact;