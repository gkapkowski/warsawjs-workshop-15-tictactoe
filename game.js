document.addEventListener('DOMContentLoaded', function() {
    var playerClasses = {
        'playerA': 'red', 
        'playerB': 'blue'
    };
    var currentPlayer;
	var emptyFields;

    initGame();

    function initGame() {
		var fields = document.querySelectorAll('.board > div');

		currentPlayer = 'playerA';
		emptyFields = 9;
    	fields.forEach(field => field.addEventListener('click', fieldClickHandler));
	}

	function fieldClickHandler () {
        var playerClass = playerClasses[currentPlayer];
        this.classList.add(playerClass);

		emptyFields--;
        currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA';

		this.removeEventListener('click', fieldClickHandler);

		checkWinner();
	}

	function  checkWinner() {
        // Get all fields from .board
        var fields = document.querySelectorAll('.board > div');
        
        
        /*
        
            +---+---+---+
            | 0 | 1 | 2 |
            +---+---+---+
            | 3 | 4 | 5 |
            +---+---+---+
            | 6 | 7 | 8 |
            +---+---+---+
            
        */

		// Horizontal win configurations 012, 345, 678
		var row1 = fields[0].className + fields[1].className + fields[2].className;
		var row2 = fields[3].className + fields[4].className + fields[5].className;
		var row3 = fields[6].className + fields[7].className + fields[8].className;

		// Vertical win configurations 036, 147, 258
		var column1 = fields[0].className + fields[3].className + fields[6].className;
		var column2 = fields[1].className + fields[4].className + fields[7].className;
		var column3 = fields[2].className + fields[5].className + fields[8].className;

		// Diagonal win configurations 048, 246
		var diagonal1 = fields[0].className + fields[4].className + fields[8].className;
		var diagonal2 = fields[6].className + fields[4].className + fields[2].className;

        // Check if any of win configuration is redredred (red wins)
		if (row1 === 'redredred' ||
			row2 === 'redredred' ||
			row3 === 'redredred' ||
			column1 === 'redredred' ||
			column2 === 'redredred' ||
			column3 === 'redredred' ||
			diagonal1 === 'redredred' ||
			diagonal2 === 'redredred') {
            alert("Red Wins!");
            return;
		}

        // Check f any of win configurations is blueblueblue (blue wins)
		if (row1 === 'blueblueblue' ||
			row2 === 'blueblueblue' ||
			row3 === 'blueblueblue' ||
			column1 === 'blueblueblue' ||
			column2 === 'blueblueblue' ||
			column3 === 'blueblueblue' ||
			diagonal1 === 'blueblueblue' ||
			diagonal2 === 'blueblueblue') {
            alert("Blue Wins!");
            return;
		}

        // If we get this far without anyone winning check is the game has ended
		if(emptyFields === 0) {
            // No winners
            alert('Tie');
            return;
		}
	}
});
