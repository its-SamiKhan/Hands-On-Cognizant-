import React from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick} style={{ padding: '6px 12px', fontSize: '14px', cursor: 'pointer' }}>
      Login
    </button>
  );
}

export default LoginButton;
