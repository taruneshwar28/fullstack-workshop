const findPrimes = (limit) => {
    const numbers = Array.from({ length: limit - 1 }, (_, i) => i + 2);

    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return numbers.filter(isPrime);
};

console.log(`Prime numbers up to 30: ${findPrimes(30)}`);
