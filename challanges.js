// first

let chaiArray = ['black tea', 'green tea', 'chai', 'oolong tea'];
let selectedTeas = [];

for (let i = 0; i < chaiArray.length; i++) {
  if (chaiArray[i] === 'chai') {
    break;
  }
  selectedTeas.push(chaiArray[i]);
}

console.log(selectedTeas);
