
export default function About() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>About NexGPU</h1>
        <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '2rem' }}>
          NexGPU is on a mission to democratize access to powerful cloud compute. We offer on-demand GPU and server rentals
          by the hour — helping developers, researchers, and businesses build without limits.
        </p>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>What Sets Us Apart</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#374151' }}>
            <li>🚀 Launch GPU & CPU systems in under 60 seconds</li>
            <li>📈 Transparent pricing, billed only for what you use</li>
            <li>🌍 Global server infrastructure for low latency</li>
            <li>🔐 Secure payments powered by Stripe</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
