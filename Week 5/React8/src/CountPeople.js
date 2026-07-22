import React from 'react';

class CountPeople extends React.Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
      c: 0
    };
    this.updateEntry = this.updateEntry.bind(this);
    this.updateExit = this.updateExit.bind(this);
  }

  updateEntry() {
    this.setState((prevState, props) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  }

  updateExit() {
    this.setState((prevState, props) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', marginTop: '60px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={this.updateEntry} 
            style={{ 
              backgroundColor: '#90ee90', 
              border: '1px solid green', 
              color: 'green',
              padding: '6px 12px', 
              marginRight: '12px', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Login
          </button>
          <span style={{ fontSize: '18px' }}>{this.state.entrycount} People Entered!!!</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={this.updateExit} 
            style={{ 
              backgroundColor: '#90ee90', 
              border: '1px solid green', 
              color: 'green',
              padding: '6px 12px', 
              marginRight: '12px', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Exit
          </button>
          <span style={{ fontSize: '18px' }}>{this.state.exitcount} People Left!!!</span>
        </div>
      </div>
    );
  }
}

export default CountPeople;
