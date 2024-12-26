import Swal from "sweetalert2";
import "./Contact.css";
import { BiSend } from "react-icons/bi";

function Contact() {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e3866185-855a-4329-809f-6186fd674888");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          Swal.fire({
            title : "Success!" ,
            text : "Message sent successfully",
            icon : "success"
          })
        }
      };

  return (
    <div className="Contact" id="Contact">
      <h2 className="Contact__h2">Contact</h2>
      <p className="Contact__p">I am currently available for freelance work</p>
      <h3 className="Contact__h3">Send Me A Message</h3>
      <form onSubmit={onSubmit} className="Contact__Form">
        <div className="Contact__Form__INformation__Input">
          <input type="text" name="name" id="" placeholder="Enter Your Name" required />
          <input type="email" name="email" id="" placeholder="Enter Your Email" required />
        </div>
        <textarea
          name="message"
          id=""
          placeholder="Enter Your Message"
          className="Contact__Textarea"
          required
        ></textarea>
        <button type="submit" className="Contact__Submit__Button">
          <span className="Contact__Submit__Button__Name">Send Message</span>
          <BiSend className="Contact__Submit__Button__Icon" />
        </button>
      </form>
    </div>
  );
}

export default Contact;
