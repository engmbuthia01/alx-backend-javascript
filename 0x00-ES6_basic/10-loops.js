export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    // Find the index of the current value to update the original array
    const index = array.indexOf(value);
    array[index] = appendString + value;
  }

  return array;
}

