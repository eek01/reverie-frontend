import "../css/Impact.css";
import Contact from "../components/Contact";
import nonprofit from "../images/impact-images/nonprofit.jpg";
import impactImg from "../images/impact-images/impact-bg.jpg";
import habitat4humanity from "../images/impact-images/habitat4humanity.jpg";
import natureCons from "../images/impact-images/natureCons.jpg";
import treesForTheFuture from "../images/impact-images/treesForTheFuture.jpg";
import charity from "../images/impact-images/350.jpg";

const Impact = () => {
    return (
        <main>
            <div id="impact-title">
                <div id="overlay"></div>
                <img src={impactImg}/>
                <div id="impact-title-txt">
                    <h1>Our Impact</h1>
                    <h2>We aim to use the resources we have to aid, empower, and inspire the community.</h2>
                </div>
            </div>
            <div id="volunteer">
                <div id="volunteer-width" className="columns">
                    <div id="volunteer-frame" className="two">
                        <iframe src="https://www.youtube.com/embed/4HwElAD1Aj8?si=Bhn4LJa0ul-S_kkz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div id="volunteer-txt" className="one">
                        <h1>Volunteer Work</h1>
                        <h5>Supporting local communities by providing opportunities that enable employees and business partners to give back to their communities through paid volunteer time and donation match program.</h5>
                        <h5>Every employee of ReverieDaydream is awarded paid volunteer hours per year for volunteer activities. Employees can choose the organization(s) they want to support individually, as well as participate in annual volunteer days organized by each office around the world.</h5>
                    </div>

                </div>
            </div>
            <div id="nonprofit" className="columns">
                <div className="one">
                    <img src={nonprofit}/>
                </div>
                <div id="nonprofit-txt" className="one">
                    <h1>We give 5% of every order to a nonprofit to support the community</h1>
                </div>
            </div>
            <div id="nonprofit-highlights">
                <h1>Nonprofits</h1>
                    <button id="main-quick-shop-left">&lt;</button>

                    <div id="main-quick-shop-imgs">
                        <section className="quick-shop-section columns">
                            <div className="main-quick-shop-width">
                                <div className="container">
                                    <img src={habitat4humanity} alt=""/>
                                    <div className="nonprofit-txt-block">
                                        <h3>Habitat for Humanity</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="main-quick-shop-width">
                                <div className="container">
                                    <img src={natureCons} alt="Image of man modeling a blue windbreaker"/>
                                    <div className="nonprofit-txt-block">
                                        <h3>The Nature Conservancy</h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="quick-shop-section hidden">
                            <div className="main-quick-shop-width">
                                <div className="container">
                                    <img src={treesForTheFuture} alt="Image of a leg wearing a white sandal"/>
                                    <div className="nonprofit-txt-block">
                                        <h3>Trees for the Future</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="main-quick-shop-width">
                                <div className="container">
                                    <img src={charity} alt="Zoomed image of a woman leaning over to tie her tennis show"/>
                                    <div className="nonprofit-txt-block">
                                        <h3>350</h3>
                                    </div>
                                </div>
                            </div>    
                        </section>
                    </div>
                    <button id="main-quick-shop-right">&gt;</button>
            </div>
            <div id="contact-section">
                <div id="contact-section-width" className="columns">
                    <div id="contact-section-txt" className="one">
                        <h1>Get in touch</h1>
                        <h3>We'd like to hear from you!</h3>
                        <p>Whether you have an inquirey, something not up to standard with your order, or just want to say hi, please use the contact form!</p>
                    </div>
                    <div className="one">
                        <Contact />
                    </div>
                </div>
            </div>
        </main>
    );  
};

export default Impact;