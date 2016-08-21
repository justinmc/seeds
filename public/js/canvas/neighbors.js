import { Map } from 'immutable';

function Neighbors(n, ne, e, se, s, sw, w, nw) {
  return Map({
    n,
    ne,
    e,
    se,
    s,
    sw,
    w,
    nw,
  });
}

export default Neighbors;
