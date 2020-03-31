let string = 'some test string'; 

const some = "s";
const test = "ome test strin";
const strin = "g";

let one = `
    <h1>
        ${some.toUpperCase()}${test.toLowerCase()}${strin.toUpperCase()}
    </h1>
`;

document.body.innerHTML = one;

let two = string.indexOf('string');
console.log(two);

let three = string.lastIndexOf(' ');
console.log(three);

let four = string.slice(5, 9);
console.log(four);

let five = Math.PI.toFixed(2);
console.log(five);

let six = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(six);

let sixTwo = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(sixTwo);

let seven = Math.random().toFixed(2);
console.log(seven);

let eight = Math.random()*5+1;
console.log(eight);

let nines = 0.6 + 0.7;
let nine = nines.toFixed(1);
console.log(nine);

let tlph = {
    product: 'iPhone'
};
tlph.price = 1000;
tlph.currence = 'dollar';
tlph['details'] = {};
tlph['details'].model = '7';
tlph['details'].color = "black"
console.log(tlph);