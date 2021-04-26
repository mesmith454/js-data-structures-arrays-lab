// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

const destructivelyAppendDriver = name => drivers.push(name);

const destructivelyPrependDriver = name => drivers.unshift(name);

const destructivelyRemoveLastDriver = name => drivers.pop();

const destructivelyRemoveFirstDriver = name => drivers.shift();

const appendDriver = name => [...drivers, name];

const prependDriver = name => [name, ...drivers];

const removeLastDriver = () => drivers.slice(0, -1);

const removeFirstDriver = () => drivers.slice(1);
