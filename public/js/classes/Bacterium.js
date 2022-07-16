class Bacterium {
  positionX;
  positionY;
  status;
  futureStatus;

  static createdBacteriums;

  constructor(x, y) {
    this.positionX = x;
    this.positionY = y;
  }

  isAlive() {
    return this.status;
  }

  kill() {
    if (this.status) {
      this.status = false;
    }

    return 1;
  }

  respawn() {
    if (!this.status) {
      this.status = true;
    }
    return 1;
  }

  askNeightbor() {
    return 1;
  }
}

module.exports = Bacterium;
