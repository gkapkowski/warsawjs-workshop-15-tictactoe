document.addEventListener('DOMContentLoaded', function() {
    
    initGame();

    function initGame() {
		var fields = document.querySelectorAll('.board > div');

		fields.forEach(field => field.addEventListener('click', fieldClickHandler));
	}

	function fieldClickHandler () {
        // Add class `red` to cliecked element
        // `this` keyword here represents cliecked element (it may represent other things elesewhere)
		this.classList.add('red');
	}
});


/*
    Concepts:
    - this - special keyword representing different things depeding on context
    - classList - how to oprate on element classes
*/