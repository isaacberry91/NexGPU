export default function Contact() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Contact Us</h1>
      <p>Need help? Email us directly or use the form below. We respond within 24 hours.</p>
      <form style={{ marginTop: '1rem' }}>
        <input type="text" placeholder="Your name" style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '100%' }} />
        <input type="email" placeholder="Your email" style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '100%' }} />
        <textarea placeholder="Message" style={{ display: 'block', padding: '0.5rem', width: '100%', height: '120px' }}></textarea>
        <button type="submit" style={{ marginTop: '1rem', padding: '0.6rem 1.2rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px' }}>Send Message</button>
      </form>
    </div>
  );
}