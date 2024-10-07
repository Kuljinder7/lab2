// Importing functions from utilities.js using ES module syntax
import { printWelcomeMessage, convertDistance, calculateFactorial, generateRandomPassword } from './utilities.js';

// 1. Call the greeting function
try {
    printWelcomeMessage('Kuljinder', 'DKaur', 'Reliance ltd.');
} catch (error) {
    console.error("Error in generating function:", error.message);
}

// 2. Call the conversion function (Kilometers to Miles)
try {
    const kilometers = 20;
    // This function takes a distance in kilometers and returns the equivalent distance in miles
    const miles = convertDistance(kilometers);
    // Log the result to the console, showing both the input in kilometers and the output in miles
    console.log(`${kilometers} km is equal to ${miles} miles.`);
    // it Catch block to handle any errors thrown by the 'convertDistance' function
// If the function throws an error , this block will capture and log the error
} catch (error) {
    console.error("Error in converting distance function:", error.message);
}

// 3. Call the factorial function
// Using try block to handle potential errors in the factorial calculation
try {
    const number = 5;
     // Call the 'calculateFactorial' function, which returns the factorial of the given number
    // The function uses a mathematical approach to compute the factorial of 'number'
    const factorial = calculateFactorial(number);
    // Log the result to the console, showing both the input number and its factorial
    console.log(`The factorial of ${number} is: ${factorial}`);
} catch (error) {
    console.error("Error in factorial function:", error.message);
}

// 4. Call the advanced function (Random Password Generator)
try {
    // Call the 'generateRandomPassword' function to generate a random password
    // The function takes a length parameter, in this case 7
    const password = generateRandomPassword(7);
    console.log(`Generated random password: ${password}`);
} catch (error) {
    console.error("Error in generating password function:", error.message);
}

