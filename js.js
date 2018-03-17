//reduce
var reduceExample = [4,2,3,4,5]
var reduceDisplay = document.getElementById('reduce')
reduceDisplay.innerHTML = reduceExample;

document.getElementById('getTotal').addEventListener('click', function() {
  reduceExample = reduceExample.reduce( //write code here);
  reduceDisplay.innerHTML = reduceExample;
})

//for extra bonus credit, start the accumulator off at a number like 40!

