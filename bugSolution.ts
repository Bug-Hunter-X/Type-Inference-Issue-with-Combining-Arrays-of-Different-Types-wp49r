function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

//Explicitly specify the type
const combinedArray: (string | number)[] = combineArrays(arr1, arr2); 
console.log(combinedArray); // Works correctly without type errors

const arr3 = [1,2,3];
const arr4 = [4,5,6];
const combinedArray2: number[] = combineArrays<number>(arr3, arr4); // Works correctly without type errors
console.log(combinedArray2);