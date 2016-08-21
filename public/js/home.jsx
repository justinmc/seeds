require('../css/home.scss');

import React from 'react';
import Cell from './canvas/cell';
import Vector from './canvas/vector';

class Home extends React.Component {
  componentDidMount() {
    const ctx = this.canvas.getContext('2d');
    ctx.fillStyle = 'mediumseagreen';

    const cells = [];
    cells.push(Cell(Vector(50, 50)));
    cells.push(Cell(Vector(25, 25)));

    cells.forEach((cell) => {
      const vector = cell.get('vector');
      ctx.fillRect(vector.get('x'), vector.get('y'), 1, 1);
    });
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
