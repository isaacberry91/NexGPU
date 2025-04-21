export default function Checkout() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Checkout</h1>
      <p>Your GPU is ready to deploy. Proceed with payment.</p>
      <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Pay with Stripe</button>
    </div>
  );
}