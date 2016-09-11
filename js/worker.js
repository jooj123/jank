onmessage = function(e) {
  var numbers = [];
  for (var i=0; i < 1000000; i++) {
    numbers.push(Math.floor(Math.random() * 50000) + 1);
  }

  numbers.sort(function sortNumber(a, b) {
    return a - b;
  });

  postMessage(numbers);
};