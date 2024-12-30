import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div id="contact" className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Get in Touch Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <p className="mb-2">
            SF NO-430,431
            SP. VADUGAPALAYAM
            SENJERI PUTHUR
            SULUR TALUK
            COIMBATORE
            TAMILNADU
            641671

            </p>
            <p className="mb-2">
              Email:{" "}
              <a href="kavinprasath.govindasamy15@gmail.com" className="text-blue-500 hover:underline">
              kavinprasath.govindasamy15@gmail.com 
              </a>
            </p>
            <p className="mb-2">
              Phone:{" "}
              <a href="tel:+1234567890" className="text-blue-500 hover:underline">
                +1 234 567 890
              </a>
            </p>
          </div>

          {/* Contact Form Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-white text-gray-800"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-white text-gray-800"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-white text-gray-800"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
