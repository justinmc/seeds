require('../css/home.scss');

import React from 'react';
import Cell from './canvas/cell';
import Vector from './canvas/vector';
import cellUtils from './utils/cell_utils';
import worldUtils from './utils/world_utils';

class Home extends React.Component {
  componentDidMount() {
    this.cells = [];
    this.cells.push(Cell(Vector(50, 99)));
    this.renderCanvas();
  }

  onClick() {
    this.renderCanvas();
  }

  renderCanvas() {
    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = 'mediumseagreen';

    // Grow cells
    for (let i = 0, length = this.cells.length; i < length; i++) {
      const cell = this.cells[i];
      const neighborCells = worldUtils.getNeighbors(this.cells, cell);
      const growthDirection = cellUtils.getGrowth(neighborCells);

      if (growthDirection) {
        const growthVector = worldUtils.getVectorInDirection(cell.get('vector'), growthDirection);

        // Make sure it's on the board!
        if (growthVector.get('x') > 0 && growthVector.get('x') < this.canvas.width &&
            growthVector.get('y') > 0 && growthVector.get('y') < this.canvas.width) {
          this.cells.push(Cell(growthVector));
        }
      }
    }

    // Render cells
    this.cells.forEach((cell) => {
      const vector = cell.get('vector');
      ctx.fillRect(vector.get('x'), vector.get('y'), 1, 1);
    });
  }

  render() {
    return (
      <div className="home">
        <canvas
          width="100px"
          height="100px"
          ref={(c) => { this.canvas = c; }}
          onClick={this.onClick.bind(this)}
        >
        </canvas>
      </div>
    );
  }
}

export default Home;
