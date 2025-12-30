const questions = [
    { question: "What is 5 + 3?", answer: 8 },
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What is the colour of sky?", answer: "blue" }
];

// arrow function used
const askQuestions = () => {
    return questions.reduce((score, q) => {
        const userAnswer = prompt(q.question);

        // strict equality used
        if (typeof q.answer === "number") {
            return userAnswer !== null && Number(userAnswer) === q.answer
                ? score + 1
                : score;
        } else {
            return userAnswer !== null && userAnswer.toLowerCase() === q.answer
                ? score + 1
                : score;
        }
    }, 0);
};

const score = askQuestions();

// template literal used
console.log(`Your score is: ${score}`);
