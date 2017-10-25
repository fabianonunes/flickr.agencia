define(function () {
  var mult = function (a, b) {
    return a * b
  }

  return {
    add: function (a, b) {
      return a + b
    },
    pow: function (x) {
      return mult(x, x)
    }
  }
})

