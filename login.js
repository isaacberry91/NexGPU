export default function Login() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Login</h1>
      <input placeholder="Email" style={{ display: 'block', marginBottom: '1rem' }} />
      <input placeholder="Password" type="password" style={{ display: 'block', marginBottom: '1rem' }} />
      <button>Login</button>
    </div>
  );
}