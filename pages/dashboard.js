export default function Dashboard() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Dashboard</h1>
      <h3>Active Rentals</h3>
      <div style={{ padding: '1rem', border: '1px solid #ccc', marginBottom: '1rem' }}>
        <p><strong>GPU:</strong> RTX 4090</p>
        <p><strong>Time Remaining:</strong> 1h 32m</p>
        <button style={{ marginTop: '0.5rem', padding: '0.5rem 1rem' }}>Extend</button>
      </div>
      <h3>Account</h3>
      <p>Email: user@nexgpu.com</p>
    </div>
  );
}