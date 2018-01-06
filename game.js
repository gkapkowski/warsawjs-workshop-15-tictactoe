document.addEventListener('DOMContentLoaded', () => {
    var playerClasses = ['red', 'blue'];
    var currentPlayer = 0;
	var filledFields = 0;

    var fields = document.querySelectorAll('.board > div');
    console.log(typeof fields, fields)

    function connectField (element) {
        element.addEventListener('click', function fieldClickHandler () {
            var playerClass = playerClasses[currentPlayer];

            element.classList.add(playerClass);

            filledFields++;
            currentPlayer = currentPlayer ? 0 : 1;

            element.removeEventListener('click', fieldClickHandler);

            // game over ?
			if(isGameOver()) {
				alert('Koniec gry');
			}
        });

    }

    function isGameOver() {
		return filledFields === 9;
	}

    fields.forEach(connectField);
})
