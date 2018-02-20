module.exports = function(string) {
  if (!string) throw new Error("not null or undefined: arugment must defined");
  if (typeof string !== "string")
    throw new Error("must be string: argument must be of type string");
  function escapeChar(curr) {
    switch (curr) {
      case "\b": {
        curr = ":backspace:";
        return curr;
      }
      case "\f": {
        curr = ":formfeed:";
        return curr;
      }
      case "\n": {
        curr = ":newline:";
        return curr;
      }
      case "\r": {
        curr = ":carridgereturn:";
        return curr;
      }
      case "\t": {
        curr = ":tab:";
        return curr;
      }
      case "\v": {
        curr = ":verticaltab:";
        return curr;
      }
      case "\0": {
        curr = ":null:";
        return curr;
      }
      case "'": {
        curr = ":singlequote:";
        return curr;
      }
      case '"': {
        curr = ":doublequote:";
        return curr;
      }
      case "\\": {
        curr = ":backslash:";
        return curr;
      }
      default: {
        return curr;
      }
    }
  }
  return string
    .split("")
    .reduce((acc, curr) => {
      curr = escapeChar(curr);
      if (!acc.length && curr) return acc.concat([curr, 1]);
      if (curr === acc[acc.length - 2]) {
        acc[acc.length - 1] += 1;
        return acc;
      } else {
        return acc.concat(curr, 1);
      }
    }, [])
    .join("");
};
