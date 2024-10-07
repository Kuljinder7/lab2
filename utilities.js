// 1. Welcome Message Function: Accepts firstName, lastName, and companyName
export function printWelcomeMessage(firstName, lastName, companyName) {
    console.log(`Welcome ${firstName} ${lastName} to ${companyName}! We are delighted to have you with us.`);
}

// 2. Unit Conversion Function: Convert kilometers to miles 
export function convertDistance(kilometers) {
    // 1 kilometer is approximately equal to 0.621371 miles
    const miles = kilometers * 0.621371; //conversion factor
    // Check if the input 'kilometers' is a valid number and not negative
    // If it is not a number or is less than zero, throw an error
    if (isNaN(kilometers) || kilometers < 0) {
        throw new Error("Error: The distance entered is invalid.");
    }
    // Return the converted distance rounded to two decimal places
    // Using .toFixed(2) ensures the output is formatted as a string with two decimal places
    return miles.toFixed(2);
}

// 3. Math Function: Factorial of a number 
export function calculateFactorial(number) {
    // Check if the input 'number' is negative
    // Factorial is not defined for negative numbers so throw an error
    if (number < 0) {
        throw new Error("Number must be non-negative");
    }
    //  Base case: If 'number' is 0 or 1, return 1
    // The factorial of 0 and 1 is defined to be 1
    if (number === 0 || number === 1) return 1;
    // Recursive case: call 'calculateFactorial' with (number - 1)
    // Multiply the current 'number' by the factorial of (number - 1)
    // This continues until it reaches the base case
    return number * calculateFactorial(number - 1);
}

// 4.  Random Password Generator with customizable length
export function generateRandomPassword(length) {
    // Defining a string containing all possible characters for the password
    // This includes uppercase letters, lowercase letters, numbers, and special characters
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!';
    // Initializing an empty string to hold the generated password
    let password = '';
    // Loop 'length' times to construct the password
    // This loop will iterate from 0 to 'length - 1' (inclusive),
    //  executing 'length' times to generate the desired number of characters for the password.
    for (let i = 0; i < length; i++) {
        //Generate a random index to select a character from 'chars'
        // Math.random() generates a number between 0 (inclusive) and 1 (exclusive)
        // Multiplying by chars.length gives a number within the range of valid indices
        // Math.floor() rounds down to the nearest whole number to ensure it's a valid index
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    // Return the generated password
    return password;
}

