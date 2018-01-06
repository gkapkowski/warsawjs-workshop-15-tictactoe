document.addEventListener('DOMContentLoaded', () => {
    // Each player has his own class
    // 0 - red
    // 1 - blue
    var playerClasses = {
        'playerA': 'red', 
        'playerB': 'blue'
    };
    var currentPlayer;
	
    initGame();

    function initGame() {
		var fields = document.querySelectorAll('.board > div');

        // Set current player to 0 (red player)
		currentPlayer = 'playerA';
		fields.forEach(field => field.addEventListener('click', fieldClickHandler));
	}

	function fieldClickHandler () {
        // Get player class name
        var playerClass = playerClasses[currentPlayer];
        // Set current player class on clicked field
        this.classList.add(playerClass);
        
        // Switch players
        // if 0 switch to 1
        // if 1 switch to 0
		currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA';
	}
});
