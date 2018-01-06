document.addEventListener('DOMContentLoaded', () => {
    var playerClasses = {
        'playerA': 'red', 
        'playerB': 'blue'
    };
    var currentPlayer;
	
    initGame();

    function initGame() {
		var fields = document.querySelectorAll('.board > div');

		currentPlayer = 'playerA';
		fields.forEach(field => field.addEventListener('click', fieldClickHandler));
	}

	function fieldClickHandler () {
        var playerClass = playerClasses[currentPlayer];
        this.classList.add(playerClass);

        currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA';

        // Remove click handler from clicked element so that
        // noone canmodify it further
		this.removeEventListener('click', fieldClickHandler);
	}
});
