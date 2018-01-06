document.addEventListener('DOMContentLoaded', () => {
    var playerClasses = ['red', 'blue'];
    var currentPlayer = 0;
	var filledFields = 0;

    var fields = document.querySelectorAll('.board > div');

    function connectField(element) {
        element.addEventListener('click', function fieldClickHandler () {
            var playerClass = playerClasses[currentPlayer];

            element.classList.add(playerClass);

            filledFields++;
            currentPlayer = currentPlayer ? 0 : 1;

            element.removeEventListener('click', fieldClickHandler);

            fields = document.querySelectorAll('.board > div');

            redBoard = '';
            fields.forEach(element => {
                redBoard+= element.classList.contains('red') ? 'R' : '-';
            });

            console.log(redBoard);

            switch (redBoard) {
                case 'RRR------':
                case '---RRR---':
                case '------RRR':
                case 'R--R--R--':
                case '-R--R--R-':
                case '--R--R--R':
                case 'R---R---R':
                case '--R-R-R--':
                    alert('Red win!');
                    resetGame();
                    break;
            }

            blueBoard = '';
            fields.forEach(element => {
                blueBoard+= element.classList.contains('blue') ? 'B' : '-';
            });

            console.log(blueBoard);

            switch (blueBoard) {
                case 'BBB------':
                case '---BBB---':
                case '------BBB':
                case 'B--B--B--':
                case '-B--B--B-':
                case '--B--B--B':
                case 'B---B---B':
                case '--B-B-B--':
                    alert('Blue win!');
					resetGame();
                    break;
            }

            // game over ?
			if(filledFields === 9) {
				alert('Tie');
				resetGame();
			}
        });

    }

    function resetGame() {
		fields.forEach(field => {
			field.removeAttribute('class');
			connectField(field);
		});
		counter = 0;
	}

    fields.forEach(connectField);
})
