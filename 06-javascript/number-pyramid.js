const n = 5;
let t = "1";

const generatePattern = () => {
    Array.from({ length: n }).map((_, i) => {
        let row = "";

        Array.from({ length: n }).map((_, j) => {
            if (j === n - i - 1) {
                const x = Number(t) * Number(t);
                row += `${x}`;
                t += "1";
            } else {
                row += " ";
            }
        });

        console.log(row);
    });
};

generatePattern();
