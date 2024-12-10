# Type Inference Issue with Combining Arrays of Different Types

This code demonstrates a type inference issue in TypeScript when combining arrays of different types using the spread syntax. The compiler correctly identifies the union type, but this can lead to type errors if the combined array is later assigned to a variable with a more specific type.

## Bug

The `combineArrays` function aims to concatenate two arrays of any type. However, when called with arrays of different types (numbers and strings in this example), the resulting array's type is inferred as a union type (`string | number`). This prevents assignment to an array with a single, more specific type.

## Solution

The solution is to explicitly specify the type parameter `T` when calling `combineArrays`.  This will resolve the ambiguity in the type inference.