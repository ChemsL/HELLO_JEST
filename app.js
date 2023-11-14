function isPalindrom(word) {
  word = word.toLowerCase();

  const tableauCaracteres = word.split("");

  const tableauInverse = tableauCaracteres.reverse();

  const motInverse = tableauInverse.join("");

  if (word === motInverse) {
    return true;
  } else {
    return false;
  }
}
const forbiddenWords = [
  "nuls",
  "nul",
  "imbécile",
  "idiot",
  "idiots",
  "débile",
  "débiles",
];
function containForbiddenWords(message) {
  const msg = message.split(" ");
  let result = [];
  for (let index = 0; index < msg.length; index++) {
    const item = msg[index];

    if (forbiddenWords.includes(item)) {
      result.push(item);
    }
  }
  if (result.length > 0) {
    return true;
  }
  return false;
}

function changeForbiddenWords(msg) {
  const hasForbiddenWords = containForbiddenWords(msg);
  if (!hasForbiddenWords) {
    return msg;
  }
  const words = msg.split(" ");
  const result = word.map((w) => {
    if (forbiddenWords.includes(w)) {
      return "xxx";
    } else {
      return w;
    }
  });
  return result.join(' ') 
}

module.exports = {
  isPalindrom,
  containForbiddenWords,
  changeForbiddenWords,
};
