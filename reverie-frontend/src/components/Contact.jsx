import "../css/Contact.css";

const Contact = () => {
    return (
        <div id="contact">
                    <form id="contact-form" method="POST">
                        <input type="hidden" name="access_key" value="b9296971-0d96-417f-b48c-e3423dada929"/>
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

                        <div id="contact-result"></div>
                    </form>
                </div>
    );
};

export default Contact;