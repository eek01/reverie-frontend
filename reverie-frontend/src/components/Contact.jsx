import "../css/Contact.css";
import React from "react";
import { useState } from "react";

const Contact = () => {
    const [feedback, setFeedback] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "b9296971-0d96-417f-b48c-e3423dada929");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        setFeedback("Sending...");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());
            if (res.success) {
                setFeedback("Email Sent");
            } else {
                setFeedback("Error Sending email");
            }
    };

  return (
    <div id="contact">
        <form onSubmit={onSubmit}>
            <div className="contact-txt">
                           <label for="name">Name</label>
                             <input type="text" name="name" id="name" required/>
                         </div>
                         <div className="contact-txt">
                             <label for="email">Email</label>
                             <input type="email" name="email" id="email" required/>
                         </div>
                         <div className="contact-txt">
                             <label for="message">Message</label>
                             <textarea name="message" id="message" required></textarea>
                         </div>
            <button id="contact-btn" type="submit">Submit</button>
        </form>
        <p>{feedback}</p>
      </div>
  );
    // return (
    //     <div id="contact">
    //                 <form id="contact-form" method="POST">
    //                     <input type="hidden" name="access_key" value="b9296971-0d96-417f-b48c-e3423dada929"/>
    //                     <div className="contact-txt">
    //                         <label for="name">Name</label>
    //                         <input type="text" name="name" id="name" required/>
    //                     </div>
    //                     <div className="contact-txt">
    //                         <label for="email">Email</label>
    //                         <input type="email" name="email" id="email" required/>
    //                     </div>
    //                     <div className="contact-txt">
    //                         <label for="message">Message</label>
    //                         <textarea name="message" id="message" required></textarea>
    //                     </div>
    //                     <button id="contact-btn" type="submit">Submit</button>

    //                     <div id="contact-result"></div>
    //                 </form>
    //             </div>
    // );
};

export default Contact;