require('../css/home.scss');

import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    const ctx = this.canvas.getContext('2d');

    ctx.fillStyle = 'mediumseagreen';

    ctx.fillRect(50, 50, 1, 1);
  }

  render() {
    return (
      <div className="home">
        <canvas width="100px" height="100px" ref={(c) => { this.canvas = c; }}>
        </canvas>
      </div>
    );
  }
}

export default Home;
