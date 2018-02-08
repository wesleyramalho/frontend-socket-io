import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor() {
    super()
    this.state = {
      endpoint: 'localhost:4001',
      color: 'white'
    };
  }

  send = () => {
    const socket = socketIOClient(this.state.endpoint)

    //event, arg
    socket.emit('change color', this.state.color)
  }

  setColor = (color) => {
    this.setState({color})
  }

  render() {
    const socket = socketIOClient(this.state.endpoint);

    socket.on('change color', (color) => {
      document.body.style.backgroundColor = color
    })

    return (
      <div
        style={{ textAlign: 'center' }}
      >
        <button onClick={() => this.send()}>
          Change color
        </button>
        <button onClick={() => this.setColor('blue')}>
          Blue
        </button>
        <button onClick={() => this.setColor('yellow')}>
          Yellow
        </button>

      </div>
    )
  }

}

export default App