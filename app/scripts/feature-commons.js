var mult = function (a, b) {
  return a * b
}

module.exports = {
  add: function (a, b) {
    return a + b
  },
  pow: function (x) {
    return mult(x, x)
  }
}
