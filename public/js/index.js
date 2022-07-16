const Celd = require("./classes/Celd");
const Bacterium = require("./classes/Bacterium");

const celd = new Celd(0, 0);

const bacterium = new Bacterium(celd.positionX, celd.positionY);

console.log(bacterium);
