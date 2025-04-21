export default function Register() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Register</h1>
      <input placeholder="Email" style={{ display: 'block', marginBottom: '1rem' }} />
      <input placeholder="Password" type="password" style={{ display: 'block', marginBottom: '1rem' }} />
      <button>Register</button>
    </div>
  );
}