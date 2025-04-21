export default function Checkout() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Checkout</h1>
      <p>You're about to rent a powerful cloud system. Please review your details and confirm payment:</p>
      <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f9f9f9', border: '1px solid #ccc' }}>
        <p><strong>Product:</strong> NVIDIA A100 GPU</p>
        <p><strong>Price:</strong> $2.45/hr</p>
        <button style={{ marginTop: '1rem', padding: '0.6rem 1.2rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>Confirm & Pay</button>
      </div>
    </div>
  );
}