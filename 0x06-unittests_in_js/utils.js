const Utils = {
  calculateNumber(type, a, b) {
    let ans;
    if (type === 'SUM') {
      ans = Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
      ans = Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
      if (Math.abs(Math.round(b)) === 0) {
        ans = 'Error';
      } else {
        ans = Math.round(a) / Math.round(b);
      }
    }
    return ans;
  },
};

module.exports = Utils;
