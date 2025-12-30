const conversions = [
    {
        type: 1,
        convert: (temp) => (temp * 9 / 5) + 32,
        label: "Celsius to Fahrenheit"
    },
    {
        type: 2,
        convert: (temp) => (temp - 32) * 5 / 9,
        label: "Fahrenheit to Celsius"
    }
];

const choice = Number(
    prompt(`Choose one:
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius`)
);

const selected = conversions.find(c => c.type === choice);

if (selected) {
    const temp = Number(prompt(`Enter temperature value:`));
    const result = selected.convert(temp);

    console.log(`${selected.label}: ${result}`);
} else {
    console.log(`Invalid choice`);
}
