export default function Register() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '2rem' }}>
      <h1>Register</h1>
      <input placeholder="Email" style={{ display: 'block', marginBottom: '1rem' }} />
      <input type="password" placeholder="Password" style={{ display: 'block', marginBottom: '1rem' }} />
      <button>Sign Up</button>
    </div>
  );
}