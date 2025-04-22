export default function Login() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '2rem' }}>
      <h1>Login</h1>
      <input placeholder="Email" style={{ display: 'block', marginBottom: '1rem' }} />
      <input type="password" placeholder="Password" style={{ display: 'block', marginBottom: '1rem' }} />
      <button>Login</button>
    </div>
  );
}