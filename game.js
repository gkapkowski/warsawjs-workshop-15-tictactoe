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
		fields.forEach(field => field.removeAttribute('class'));
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
		var fields = document.querySelectorAll('.board > div');

		// Horizontal winning configurations
		var row1 = fields[0].className + fields[1].className + fields[2].className;
		var row2 = fields[3].className + fields[4].className + fields[5].className;
		var row3 = fields[6].className + fields[7].className + fields[8].className;

		// Vertical winning configurations
		var column1 = fields[0].className + fields[3].className + fields[6].className;
		var column2 = fields[1].className + fields[4].className + fields[7].className;
		var column3 = fields[2].className + fields[5].className + fields[8].className;

		// Diagonal winning configurations
		var diagonal1 = fields[0].className + fields[4].className + fields[8].className;
		var diagonal2 = fields[6].className + fields[4].className + fields[2].className;

		var boardCheck = [
			row1,
			row2,
			row3,
			column1,
			column2,
			column3,
			diagonal1,
			diagonal2
		];

		if (boardCheck.includes('redredred')) {
			setTimeout(() => {
				alert("Red Wins!");
				initGame();
			}, 100);
		}

		if (boardCheck.includes('blueblueblue')) {
			setTimeout(() => {
				alert("Blue Wins!");
				initGame();
			}, 100);
		}

		if(emptyFields === 0) {
            setTimeout(() => {
                alert('Tie');
                initGame();
            }, 100);
		}
	}
});
