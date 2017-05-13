function getRandomArbitrary() {
  var number = Math.floor(Math.random() * (3 - 0)) + 0;
  if (number==0) {
    return comp = "rock";
  }
  else if (number==1){
    return comp = "scissors";
  }
  else {
    return comp = "paper";
  }
}