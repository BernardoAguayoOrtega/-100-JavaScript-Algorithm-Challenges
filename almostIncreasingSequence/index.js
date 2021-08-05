// Given a sequence of integers as an array, 
// determine whether it is possible to obtained a strictly 
// increasing sequence by removing no more than one element from the array.

const shouldNotPossible = [1,3,2,1]
const shouldPossible = [1,2,3,4,5,6,7,8,9,10]

const isIncreasingSequence = (sequence) => {
  const isConsecutive = sequence.filter((currentNumber, index) => (currentNumber + 1) !== sequence[index - 1])
  if(isConsecutive.length === 0){
    return true
  } 
  console.log(isConsecutive.length)
  return false
}

console.log(isIncreasingSequence(shouldNotPossible))
console.log(isIncreasingSequence(shouldPossible))
