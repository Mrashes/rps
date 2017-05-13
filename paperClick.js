function paperClick() {
    var test = getRandomArbitrary();
    if (test === "rock") {
        winner++;
        var node = document.getElementById('score');
		node.innerHTML = ("<p>wins: " + winner + "</p>" + "<p>losses: " + loser + "</p>" + "<p>ties: " + tie + "</p>");
    }
    else if (test === "scissors") {
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