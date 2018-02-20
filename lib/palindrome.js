module.exports = function(string) {
  if (!string) throw new Error("arugment must be defined");
  if (typeof string !== "string")
    throw new Error("must be string: argument must be of type string");

  return (
    string
      .replace(/\s/g, "")
      .replace(/\W/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("") ===
    string
      .replace(/\s/g, "")
      .replace(/\W/g, "")
      .toLowerCase()
  );
};
