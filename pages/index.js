export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <h2>NexGPU</h2>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a> | <a href="/dashboard">Dashboard</a> | <a href="/checkout">Checkout</a> | <a href="/contact">Contact</a>
        </nav>
      </header>
      <section style={{ padding: '2rem', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
        <h1>Welcome to NexGPU</h1>
        <p>Enterprise-grade GPU, CPU, and cloud compute rentals — rent by the hour, deploy in seconds.</p>
        <button style={{ marginTop: '1rem', padding: '0.7rem 1.5rem', fontSize: '1rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
          Explore Listings
        </button>
      </section>
    </div>
  );
}