import axios from "axios";
import { useState } from "react";

const Complaint = () => {
  const [send, setSend] = useState({
    SparePart: "",
    Quantity: "",
    Description: "",
    BranchName: "",
    Status: "pending",
  });
  const handleChange = (e) => {
    setSend({ ...send, [e.target.name]: e.target.value });
  };

  const postSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/postdata", { send })
      .then((res) => {
        setSend(res.data);
      })
      .catch((err) => console.log(err));
    alert("Complaint Raised Sucessfully");
  };

  return (
    <div className=".form">
      <div className="wrapper">
        <div className="contact-form-box">
          <div className="pesan-text"> Service RequestForm</div>
          <form name="contact-form" onSubmit={postSubmit}>
            <input
              id="ContactForm1_contact-form-name"
              name="SparePart"
              placeholder="SparePart"
              size="30"
              type="text"
              onChange={handleChange}
              required
            />
            <input
              id="ContactForm1_contact-form-email"
              name="Quantity"
              placeholder="Quantity"
              size="30"
              type="number"
              onChange={handleChange}
              required
            />
            <input
              id="ContactForm1_contact-form-email"
              name="BranchName"
              placeholder="Enter Branch No"
              size="30"
              type="number"
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <textarea
              cols="25"
              id="ContactForm1_contact-form-email-message"
              name="Description"
              placeholder="Description"
              rows="5"
              onChange={handleChange}
              required
            ></textarea>
            <br />
            <input
              id="ContactForm1_contact-form-submit"
              type="submit"
              value="Send"
            />
            <br />
            <div>
              <br />
              <br />
              <div id="ContactForm1_contact-form-error-message"></div>
              <div id="ContactForm1_contact-form-success-message"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
