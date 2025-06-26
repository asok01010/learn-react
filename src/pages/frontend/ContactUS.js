const ContactUs = () => {
  return (
    <div className="container">
      <div class="contact-us">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
        <form class="contact-form" action="/submit-contact" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
