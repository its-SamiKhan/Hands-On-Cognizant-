import React from 'react';

function LogoutButton(props) {
  return (
    <button onClick={props.onClick} style={{ padding: '6px 12px', fontSize: '14px', cursor: 'pointer' }}>
      Logout
    </button>
  );
}

export default LogoutButton;
