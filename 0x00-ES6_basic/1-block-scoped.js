export default function taskBlock(trueOrFalse) {
  const task = false; //const for bloack scope
  const task2 = true; //const for block scope

  if (trueOrFalse) {
    const task = true; //updating existing variable
    const task2 = false; // updating existing variable
  }

  return [task, task2];
}
