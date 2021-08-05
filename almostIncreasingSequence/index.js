// Given a sequence of integers as an array,
// determine whether it is possible to obtained a strictly
// increasing sequence by removing no more than one element from the array.

const shouldNotPossible = [1, 3, 2, 1];
const shouldPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isIncreasingSequence = (sequence) => {
	let changingCounter = 0;

  sequence.forEach((currentNumber, index) => {
    if (index > 0 && currentNumber < sequence[index - 1]) {
      changingCounter++;
    }
  })

	return changingCounter <= 1;
};

console.log(isIncreasingSequence(shouldNotPossible));
console.log(isIncreasingSequence(shouldPossible));
