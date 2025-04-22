export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#f0f4f8', padding: '2rem' }}>
      <header style={{ backgroundColor: '#0a0f3c', color: 'white', padding: '2rem', borderRadius: '8px' }}>
        <h1 style={{ fontSize: '2.5rem' }}>NexGPU</h1>
        <p style={{ fontSize: '1.125rem', marginTop: '1rem' }}>Rent powerful cloud GPUs and compute systems by the hour.</p>
        <button style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>Browse Listings</button>
      </header>
    </div>
  );
}