const validatePassword = (password) => {
    let isValid = false;

    let up = 0;
    let lo = 0;
    let num = 0;
    let sp = 0;

    const errors = [];
    const suggestions = [];

    if (password.length < 8) {
        errors.push("Too short");
        suggestions.push("Use at least 8 characters");
    }

    // array method used
    [...password].map(char => {
        if (char >= "A" && char <= "Z") up++;
        else if (char >= "a" && char <= "z") lo++;
        else if (/\d/.test(char)) num++;
        else sp++;
    });

    // strict equality used everywhere
    if (up === 0) {
        errors.push("Need at least one uppercase letter");
        suggestions.push("Add uppercase letters");
    }

    if (lo === 0) {
        errors.push("Need at least one lowercase letter");
        suggestions.push("Add lowercase letters");
    }

    if (num === 0) {
        errors.push("Need at least one number");
        suggestions.push("Add numbers");
    }

    if (sp === 0) {
        errors.push("Need at least one special character");
        suggestions.push("Add special characters");
    }

    if (errors.length === 0) {
        isValid = true;
    }

    return {
        valid: isValid,
        errors,
        suggestions,
        message: `Password is ${isValid ? "valid" : "invalid"}`
    };
};

console.log(validatePassword("abc"));
console.log(validatePassword("MyP@ssw0rd!2024"));
