const buttons = [
    { id: "btn1", value: -1 },
    { id: "btn2", value: 1 },
    { id: "btn3", value: 1 },
    { id: "btn4", value: 5 },
    { id: "btn5", value: 10 }
];

const resetBtn = document.getElementById("reset");
const h1 = document.querySelector("h1");

let count = 0;

// reusable function (arrow function)
const updateUI = () => {
    h1.innerText = `${count}`; // template literal used
    h1.style.color = count > 0 ? "green" : "black";
};

// array method used (map)
buttons.map(btn => {
    const button = document.getElementById(btn.id);
    button.addEventListener("click", () => {
        count += btn.value;
        if (count < 0) count = 0;
        updateUI();
    });
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateUI();
});
