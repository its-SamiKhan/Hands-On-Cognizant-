import React from 'react';

function UserGreeting() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
      <h1>Welcome back</h1>
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', width: '300px', backgroundColor: '#f9f9f9', textAlign: 'left' }}>
        <h3 style={{ marginTop: 0 }}>Book your flight ticket</h3>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Destination:</label>
          <input type="text" placeholder="Enter city" style={{ padding: '6px', width: '90%', border: '1px solid #ccc' }} />
        </div>
        <button onClick={() => alert('Ticket booked successfully!')} style={{ padding: '6px 12px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
          Book Now
        </button>
      </div>
    </div>
  );
}

function GuestGreeting() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
      <h1>Please sign up.</h1>
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', width: '300px', backgroundColor: '#f9f9f9', textAlign: 'left' }}>
        <h3 style={{ marginTop: 0 }}>Available Flights (Browsing Mode)</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Flight A101 - Delhi to Mumbai (10:00 AM)</li>
          <li>Flight B202 - Bangalore to Chennai (02:00 PM)</li>
          <li>Flight C303 - Kolkata to Hyderabad (06:00 PM)</li>
        </ul>
        <p style={{ color: 'red', fontSize: '12px', margin: 0 }}>* Please login to book flight tickets.</p>
      </div>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Greeting;
