import "./Contact.css";
import themePattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
import callIcon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5663c68c-7cd1-4ef6-a624-a2d1d4400519");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      alert(res.message);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            send me a message about anything that you want on. You can contact
            anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailIcon} alt="" />
              <p>toyinoyelade21@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={callIcon} alt="" />
              <p>+234 809 615 9025</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
