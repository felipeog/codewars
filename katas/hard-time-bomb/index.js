const findWire = (bomb) => {
  for (let i = 0; i < 10; i++) {
    if (global["boom" + i]) {
      return bomb.cutTheWire(global["boom" + i]);
    }
  }
};

module.exports = findWire;
