document.addEventListener('DOMContentLoaded', () => {
    var playerClasses = {
        'playerA': 'red', 
        'playerB': 'blue'
    };
    var currentPlayer;
    // Define variable to hold how many empty fields we have left
	var emptyFields;

    initGame();

    function initGame() {
		var fields = document.querySelectorAll('.board > div');

        currentPlayer = 'playerA';
        // At the begining of the game we have 9 empty fields
		emptyFields = 9;
    	fields.forEach(field => field.addEventListener('click', fieldClickHandler));
	}

	function fieldClickHandler () {
        var playerClass = playerClasses[currentPlayer];
        this.classList.add(playerClass);

        // Decrese empty fields by 1
		emptyFields--;
        currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA';

        this.removeEventListener('click', fieldClickHandler);
        
        // Check if we have any empty fields left
        if(emptyFields === 0) {
			alert('End of the Game!');
		}
	}
});
