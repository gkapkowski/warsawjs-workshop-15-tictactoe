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

            //3 Poziome
            var row1 = fields[0].className + fields[1].className + fields[2].className;
            var row2 = fields[3].className + fields[4].className + fields[5].className;
            var row3 = fields[6].className + fields[7].className + fields[8].className;

            //3 Pionowe
            var column1 = fields[0].className + fields[3].className + fields[6].className;
            var column2 = fields[1].className + fields[4].className + fields[7].className;
            var column3 = fields[2].className + fields[5].className + fields[8].className;

            //2 Skosy
            var digonal1 = fields[0].className + fields[4].className + fields[8].className;
            var digonal2 = fields[6].className + fields[4].className + fields[2].className;
            
            if (row1 === 'redredred' ||
                row2 === 'redredred' ||
                row3 === 'redredred' ||
                column1 === 'redredred' ||
                column2 === 'redredred' ||
                column3 === 'redredred' ||
                digonal1 === 'redredred' ||
                digonal2 === 'redredred') {
                    alert("Red Win!");
                    resetGame();
                }

            if (row1 === 'blueblueblue' ||
                row2 === 'blueblueblue' ||
                row3 === 'blueblueblue' ||
                column1 === 'blueblueblue' ||
                column2 === 'blueblueblue' ||
                column3 === 'blueblueblue' ||
                digonal1 === 'blueblueblue' ||
                digonal2 === 'blueblueblue') {
                    alert("Blue Win!");
                    resetGame();
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
        filledFields = 0;
        currentPlayer = 0;
	}

    fields.forEach(connectField);
})
