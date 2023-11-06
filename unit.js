// UNIT TEST
    // A function called "multiplication" that returns the prodcut of two input integers
        // Expect multiplication(5,5) to be a number
        // Expect multiplication(5,5) to be equal to 25
        // Expect multiplication(0,5) to be equal to 0
        // Expect multiplication('x',5) to be an error

function multiplication(x,y) { 
        try{
            if ( typeof x !== 'number' || typeof y !== 'number'){
            throw new Error('an error has occurred');
        }
        return x * y;
    }catch (error){
        throw error;
    }
};

// im honestly not to sure the purpose of "describe" but it was
// one of the few examples i could understand about unit testing

describe('function multiplication',() => {
    it('shoud return a number when given two valid inputs', () => {
        const result = multiplication(5,5);
        expect(typeof result).toBe('number');
    });
    it('shoud return the correct value of the product of two numbers', () => {
        const result = multiplication(5,5);
        expect(result).toBe('25');
    });
    it('shoud return 0 when one of the inputs is 0', () => {
        const result = multiplication(0,5);
        expect(result).toBe('0');
    });
    it('shoud send an error for any input that is not a number', () => {
        expect(() => multiplication('x', 5)).toThrowError('One or more input is not numerical');
    });
})

    // A function called "concatOdds" that returns a single array that only contains the odd numbers, in ascending order, from both of the arrays
        // Expect concatOdds to be an array
        // Expect concatOdds to return only odd numbers
        // Expect concatOdds to give out an error when inputs are invalid
        // Expect concatOdds to return numbers in ascending order

function concatOdds(arr1, arr2) {
    // exclamtion marks used below are supposed to negate the result of the variable
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      throw new Error('One or more inputs is not an array');
    }
    const oddNumbers = arr1
      .concat(arr2)
      .filter((num) => typeof num === 'number' && num % 2 !== 0)
      .sort((a, b) => a - b);
    return oddNumbers;
}
    try {
        const result = concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]);
        console.log('Result:', result);
      } catch (error) {
        console.error('An error occurred:', error.message);
}
  
describe('concatOdds function', () => {
    it('should return an array with only odd numbers that are ascending order', () => {
      const result = concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]);
      expect(result).toEqual([-1, 1, 3, 9, 15]);
    });
  
    it('should throw an error for non-array input', () => {
      expect(() => concatOdds('this is not an array', [1, 2, 3])).toThrowError('Both inputs must be arrays! >:(');
    });
  });

// FUNCTIONAL TEST
    //A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user      
        // When a user clicks 'checkout' they will be asked to sign-in/make an account/ or continue as guest
        // When a user attempts to login but enters incorrect information, they should be shown an error and prompt displaying 'incorrect email or password' will appear
        // When a user logins their previously saved account info will auto-fill when logged in
        // When a user continues as guest and fill in any innvalid info they will be shown an error