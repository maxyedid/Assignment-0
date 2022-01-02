function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let resultingSet = new Set()
  for (let i = 0; i < args.length; i++) {
    for (let element of args[i]) {
      resultingSet.add(element)
    }
  }
  return resultingSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
