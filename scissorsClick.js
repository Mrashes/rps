function scissorsClick() {
    var test = getRandomArbitrary();
    if (test === "paper") {
        winner++;
        var node = document.getElementById('score');
		node.innerHTML = ("<p>wins: " + winner + "</p>" + "<p>losses: " + loser + "</p>" + "<p>ties: " + tie + "</p>");
		}
    else if (test === "rock") {
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