//import the countVowels.js
const countVowels = require('./countVowels.js');

//create a test suite "Count the number of vowels"
describe("Count the number of vowels", function(){

    //Testcase1: to test whether the input is of string type.
    test("Returns null when the input is not string", function(){
    expect(countVowels(123)).toBe(null);
    });

    //Testcase2: to test whether it returns the  number of vowels in the string.
    test("Returns the number of vowels in the string if the input contains vowels(a,e,i,o,u)", function(){
    expect(countVowels("Hello")).toBe(2);
    });

    //Testcase3: to test whether it returns 0 if there is no vowels in the string.
    test("Returns 0 if the input does not contains vowels(a,e,i,o,u)", function(){
    expect(countVowels("hl")).toBe(0);
    });

});

/* output:
> practice-redgreenrefactor-diviyaiswariya-k@1.0.0 test
> jest

 PASS  ./countVowels.test.js
  Count the number of vowels
    ✓ Returns null when the input is not string (1 ms)
    ✓ Returns the number of vowels in the string if the input contains vowels(a,e,i,o,u)
    ✓ Returns 0 if the input does not contains vowels(a,e,i,o,u)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.168 s, estimated 1 s
Ran all test suites.
*/