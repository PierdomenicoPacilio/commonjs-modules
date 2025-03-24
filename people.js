const objName = require('./names.js');

const hobbiesArray = require('./hobbies.js');

const people = () => { return { fullName: objName('matteo', 'rossi'), hobbies: hobbiesArray('calcio', 'giardinaggio', 'lettura')}; };

console.log(people());