import React from 'react'
import "./Contact.css"
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fb3e6d0d-6e11-472b-a79d-e9fd47e910d2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
    <div className='xero'>
        <p>
            Contact Us
        </p>
        <h1>
            Get in Touch
        </h1>

    </div>
    <div className='contact'>
        <div className="contact-col">
            <h3>
                Send us a message <img src="https://tse2.mm.bing.net/th?id=OIP.hRPpdhBGWKVh61cf1yVNqQHaHa&pid=Api&P=0&h=180" alt="" />
            </h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us.</p>
            <ul>
                <li><img src="https://tse3.mm.bing.net/th?id=OIP.uxi9u-9Dey1QUY21qCkslAHaFS&pid=Api&P=0&h=180" alt="" />ce220004044@iiti.ac.in</li>
                <li><img src="https://tse4.mm.bing.net/th?id=OIP.8I12UdciB49oSXip40s22gHaHa&pid=Api&P=0&h=180" alt="" />+91 6396597024</li>
                <li><img src="https://tse2.mm.bing.net/th?id=OIP.TwiP7UaTKhwIVq5-axxqCgHaJI&pid=Api&P=0&h=180" alt="" />APJ Hostel, IIT Indore,<br />Khandwa Road,Madhya Pradesh </li>
            </ul>
        </div>
        <div className="contact-col extra" >
            <form onSubmit={onSubmit}>
                <label >Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label >Your Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
                <label >Enter Your Message</label>
                <textarea name="Message" id=""  rows="6" placeholder='Enter Your Message...' required></textarea>
                <button type='submit' className=' newera'>Submit Now <img src="https://www.clipartbest.com/cliparts/7Ta/6eR/7Ta6eRqLc.png" alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
    </>
  )
}

export default Contact
