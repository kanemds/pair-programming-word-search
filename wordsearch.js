const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  const transposeLetters = transpose(letters);
  const horizontalJoin1 = transposeLetters.map(ls => ls.join(''));
  for (const l of horizontalJoin1) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};
// working with Liam and mentor

const transpose = function(matrix) {
  let resultArr = [];
  
  for (let i = 0; i < matrix[0].length; i++) {
    let rows = [];
    for (let j = 0; j < matrix.length; j++) {
      rows.push(matrix[j][i]);
    }
    resultArr.push(rows);
  }
  return resultArr;
};

module.exports = wordSearch;