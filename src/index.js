module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = [];
  const allBrackets = [];
  const equalBrackets = [];
  let resultArray = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
    allBrackets.push(bracketsConfig[i][0]);
    allBrackets.push(bracketsConfig[i][1]);
    if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
      equalBrackets.push(bracketsConfig[i][0]);
    }
  }
  // проверка на четность скобок
  if (str.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let previous = resultArray[resultArray.length - 1];

    if (openBrackets.indexOf(current) != -1 && equalBrackets.length === 0) {
      resultArray.push(current);
    } else if (
      current === allBrackets[allBrackets.indexOf(previous) + 1] &&
      equalBrackets.length !== 0
    ) {
      resultArray.pop();
    } else if (
      openBrackets.indexOf(current) != -1 &&
      equalBrackets.length !== 0
    ) {
      resultArray.push(current);
    } else if (
      current === allBrackets[allBrackets.indexOf(previous) + 1] &&
      equalBrackets.length === 0
    ) {
      resultArray.pop();
    }
  }
  if (resultArray.length === 0) {
    return true;
  }
  return false;
};
