// What will be the result for these expressions?
// 1. 5 > 4
// 2. "apple" > "pineapple"
// 3. "2" > "12"
// 4. undefined == null
// 5. undefined === null
// 6. null == "\n0\n"
// 7. null === +"\n0\n"
ans

// 2. Results of Expressions
// 5 > 4
// Result: true

// Explanation: 5 is greater than 4.
// "apple" > "pineapple"
// Result: false

// Explanation: String comparison is done lexicographically, and "a" comes before "p".
// "2" > "12"
// Result: true

// Explanation: In lexicographic comparison, "2" is greater than "1".
// undefined == null
// Result: true

// Explanation: undefined and null are equal in non-strict comparison.
// undefined === null
// Result: false

// Explanation: In strict comparison, undefined and null are considered different types.
// null == "\n0\n"
// Result: false

// Explanation: null is only loosely equal to undefined, not to any other value.
// null === +"\n0\n"
// Result: false

// Explanation: In strict comparison, null is different from the number 0.