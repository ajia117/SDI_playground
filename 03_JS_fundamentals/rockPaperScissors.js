var rockPaperScissors = (n) => {
  // should be 3^n number of outcomes
  // start initial recursion on non-empty array
  // only recurse if n > 0
  if(n > 0) {
    return rockPaperScissorsGenerator([["rock"], ["paper"], ["scissors"]], n - 1) 
  } else {
    return [];
  }

  function rockPaperScissorsGenerator(outcomeArray, number) {
    // base case: iterated the total number of times
    if(number === 0) {
      return outcomeArray
    }

    // recursive case: add rock, paper, and scissors to each outcome
    let additionalOutcomes = []
    for(let outcome of outcomeArray) {
      let rockAdd = [...outcome]
      rockAdd.push("rock")
      additionalOutcomes.push(rockAdd)

      let paperAdd = [...outcome]
      paperAdd.push("paper")
      additionalOutcomes.push(paperAdd)

      let scissorsAdd = [...outcome]
      scissorsAdd.push("scissors")
      additionalOutcomes.push(scissorsAdd)
    }
    return rockPaperScissorsGenerator(additionalOutcomes, number-1)
  }
};