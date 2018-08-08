module.exports = function npmtest(string) {
  if (typeof string !== "string") throw new TypeError("This test expects a string!");
  console.log("With thanks to Dolly");
  return string.replace(/\s/g, "");
};