import "./ContactFormStyle.css";

function ContactForm() {
  return (
    <>
      <div className="form-container">
        <div className="formDetails"></div>
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
