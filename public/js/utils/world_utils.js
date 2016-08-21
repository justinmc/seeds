import { Map } from 'immutable';
import Neighbors from '../canvas/neighbors';
import Vector from '../canvas/vector';
import directionsConstants from '../constants/directions_constants';

const worldUtils = {
  getNeighbors(cells, cell) {
    const neighborLocations = worldUtils.getNeighborLocations(cell.get('vector'));
    let neighbors = Neighbors();

    cells.forEach((cellI) => {
      const vector = cellI.get('vector');

      if (worldUtils.compareVectors(vector, neighborLocations.get('n'))) {
        neighbors = neighbors.set('n', vector);
      } else if (worldUtils.compareVectors(vector, neighborLocations.get('ne'))) {
        neighbors = neighbors.set('ne', vector);
      } else if (worldUtils.compareVectors(vector, neighborLocations.get('e'))) {
        neighbors = neighbors.set('e', vector);
      } else if (worldUtils.compareVectors(vector, neighborLocations.get('se'))) {
        neighbors = neighbors.set('se', vector);
      } else if (worldUtils.compareVectors(vector, neighborLocations.get('s'))) {
        neighbors = neighbors.set('s', vector);
      } else if (worldUtils.compareVectors(vector, neighborLocations.get('sw'))) {
        neighbors = neighbors.set('sw', vector);
      } else if (worldUtils.compareVectors(vector, neighborLocations.get('w'))) {
        neighbors = neighbors.set('w', vector);
      } else if (worldUtils.compareVectors(vector, neighborLocations.get('nw'))) {
        neighbors = neighbors.set('nw', vector);
      }
    });

    return neighbors;
  },

  /**
   * Doesn't consider the size of the world (going off the map)
   */
  getNeighborLocations(vector) {
    return Map({
      n: worldUtils.getVectorInDirection(vector, directionsConstants.N),
      ne: worldUtils.getVectorInDirection(vector, directionsConstants.NE),
      e: worldUtils.getVectorInDirection(vector, directionsConstants.E),
      se: worldUtils.getVectorInDirection(vector, directionsConstants.SE),
      s: worldUtils.getVectorInDirection(vector, directionsConstants.S),
      sw: worldUtils.getVectorInDirection(vector, directionsConstants.SW),
      w: worldUtils.getVectorInDirection(vector, directionsConstants.W),
      nw: worldUtils.getVectorInDirection(vector, directionsConstants.NW),
    });
  },

  compareVectors(vector1, vector2) {
    return vector1.get('x') === vector2.get('x') &&
           vector1.get('y') === vector2.get('y');
  },

  getVectorInDirection(vector, direction) {
    if (direction === directionsConstants.N) {
      return Vector(vector.get('x'), vector.get('y') - 1);
    } else if (direction === directionsConstants.NE) {
      return Vector(vector.get('x') + 1, vector.get('y') - 1);
    } else if (direction === directionsConstants.E) {
      return Vector(vector.get('x') + 1, vector.get('y'));
    } else if (direction === directionsConstants.SE) {
      return Vector(vector.get('x') + 1, vector.get('y') + 1);
    } else if (direction === directionsConstants.S) {
      return Vector(vector.get('x'), vector.get('y') + 1);
    } else if (direction === directionsConstants.SW) {
      return Vector(vector.get('x') - 1, vector.get('y') + 1);
    } else if (direction === directionsConstants.W) {
      return Vector(vector.get('x') - 1, vector.get('y'));
    } else if (direction === directionsConstants.NW) {
      return Vector(vector.get('x') - 1, vector.get('y') - 1);
    }

    throw new Error('Bad direction');
  },
};

export default worldUtils;
