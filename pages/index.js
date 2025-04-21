export default function Home() {
  const cards = [
    { gpu: "NVIDIA A100", ram: "48 GB", region: "Asia", price: "$2.45/hr" },
    { gpu: "RTX 4090", ram: "24 GB", region: "US", price: "$1.98/hr" },
    { gpu: "AMD Ryzen 9", ram: "64 GB", region: "EU", price: "$0.82/hr" }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <h2>NexGPU</h2>
        <nav>
          <a href="/" style={{ margin: '0 1rem', color: 'white' }}>Home</a>
          <a href="/about" style={{ margin: '0 1rem', color: 'white' }}>About</a>
          <a href="/dashboard" style={{ margin: '0 1rem', color: 'white' }}>Dashboard</a>
          <a href="/checkout" style={{ margin: '0 1rem', color: 'white' }}>Checkout</a>
          <a href="/contact" style={{ margin: '0 1rem', color: 'white' }}>Contact</a>
        </nav>
      </header>
      <h1 style={{ fontSize: '2.5rem' }}>Welcome to NexGPU</h1>
      <p>Rent the best GPUs & cloud systems by the hour</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        {cards.map((card, i) => (
          <div key={i} style={{ background: 'white', color: '#333', padding: '1rem', borderRadius: '8px', width: '250px' }}>
            <h3>{card.gpu}</h3>
            <p><strong>RAM:</strong> {card.ram}</p>
            <p><strong>Region:</strong> {card.region}</p>
            <p><strong>Price:</strong> {card.price}</p>
            <button style={{ backgroundColor: '#0070f3', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', marginTop: '0.5rem' }}>Rent Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}