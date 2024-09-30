export default function taskBlock(trueOrFalse) {
  let task = false; //const for bloack scope
  let task2 = true; //const for block scope

  if (trueOrFalse) {
    task = true; //updating existing variable
    task2 = false; // updating existing variable
  }

  return [task, task2];
}
