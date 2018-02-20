module.exports = function(start, end, jumpLength) {
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    typeof jumpLength !== "number"
  )
    throw new Error("invalid arguments: arguments must be numbers");
  if (end - start < 0)
    throw new Error("the end must be greater than the start");
  if (jumpLength <= 0) throw new Error("the jumplength must be above 0");
  return Math.ceil(((end - start) / jumpLength).toFixed(6));
};
