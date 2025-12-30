const swapNumbers = (a, b) => {
    [a, b] = [a, b].reduce(
        ([x, y]) => [y, x]
    );

    console.log(`x = ${a}`);
    console.log(`y = ${b}`);
};

let x = 5;
let y = 10;

swapNumbers(x, y);
