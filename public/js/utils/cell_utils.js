import directionsConstants from '../constants/directions_constants';

const cellUtils = {
  getGrowth(neighborCells) {
    if (!neighborCells.get('n')) {
      return directionsConstants.N;
    }

    const rando = !!Math.round(Math.random());

    if (!neighborCells.get('ne') && !neighborCells.get('nw')) {
      if (rando) {
        return directionsConstants.NW;
      }

      return directionsConstants.NE;
    } else if (!neighborCells.get('ne')) {
      return directionsConstants.NE;
    } else if (!neighborCells.get('nw')) {
      return directionsConstants.NW;
    }

    if (!neighborCells.get('e') && !neighborCells.get('w')) {
      if (rando) {
        return directionsConstants.W;
      }

      return directionsConstants.E;
    } else if (!neighborCells.get('e')) {
      return directionsConstants.E;
    } else if (!neighborCells.get('w')) {
      return directionsConstants.W;
    }

    if (!neighborCells.get('se') && !neighborCells.get('sw')) {
      if (rando) {
        return directionsConstants.SW;
      }

      return directionsConstants.SE;
    } else if (!neighborCells.get('se')) {
      return directionsConstants.SE;
    } else if (!neighborCells.get('sw')) {
      return directionsConstants.SW;
    }

    if (!neighborCells.get('s')) {
      return directionsConstants.S;
    }

    // No growth if you made it down here!
    return null;
  },
};

export default cellUtils;
