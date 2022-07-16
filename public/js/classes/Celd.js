class Celd {
  positionX;

  positionY;

  full;

  constructor(x, y) {
    this.positionX = x;
    this.positionY = y;
  }

  isFull() {
    if (this.full) {
      return true;
    }
    return false;
  }
}

module.exports = Celd;
