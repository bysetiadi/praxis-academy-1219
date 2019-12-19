const repeat = (string) => `${string} ${string}`;
function shout(string) {
  return `${string.toUpperCase()}!`;
}

module.exports = { shout };