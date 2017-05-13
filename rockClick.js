function rockClick() {
  var test = getRandomArbitrary();
  if (test === "scissors") {
      winner++;
      var node = document.getElementById('score');
	  node.innerHTML = ("<p>wins: " + winner + "</p>" + "<p>losses: " + loser + "</p>" + "<p>ties: " + tie + "</p>");
    }
  else if (test === "paper") {
      loser++;
      var node = document.getElementById('score');
	  node.innerHTML = ("<p>wins: " + winner + "</p>" + "<p>losses: " + loser + "</p>" + "<p>ties: " + tie + "</p>");
    }
  else {
      tie++;
      var node = document.getElementById('score');
	  node.innerHTML = ("<p>wins: " + winner + "</p>" + "<p>losses: " + loser + "</p>" + "<p>ties: " + tie + "</p>");
    }
}