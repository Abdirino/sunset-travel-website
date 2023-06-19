import "./ContactFormStyle.css";
import ContactImg from "../images/ContactIMG.jpg";

function ContactForm() {
  return (
    <>
      <div className="form-container">
        <div className="formDetails">
          <div className="c-img">
            <img src={ContactImg} alt="" />
          </div>
          <div className="c-details">
            <div className="detail">
              <h2>Paris Office</h2>
              <p>198 West 21th Street</p>
              <p>New York NY 10010</p>
              <p>Phone: +88 (0) 101 0000 000</p>
              <p>Email: goldenSunset@qode.com</p>
            </div>
          </div>
        </div>
        <form>
          <h1>Message Us!</h1>
          <input placeholder="Name*" />
          <input placeholder="Email*" />
          <input placeholder="Subject" />
          <textarea placeholder="Message*" rows="4"></textarea>
          <button>Send</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
