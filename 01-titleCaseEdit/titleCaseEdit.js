function titleCaseEdit(title) {
  // Insert code here;
  let result = ""
  result += title[0].toUpperCase()
  for (let i = 0; i < title.length - 1; i++) {
    if (title[i] === " ") {
      result += title[i+1].toUpperCase()
      continue;
    }
    result += title[i+1]
  }
  return result;
}

// Do not edit this line;
module.exports = titleCaseEdit;
