document.addEventListener('DOMContentLoaded', () => {
    var playerClasses = ['red', 'blue'];
    var currentPlayer = 0;

    var fields = document.querySelectorAll('.board > div');

    function connectField (element) {
        element.addEventListener('click', function fieldClickHandler () {

            var playerClass = playerClasses[currentPlayer];

            element.classList.add(playerClass);
            currentPlayer = currentPlayer ? 0 : 1;


            element.removeEventListener('click', fieldClickHandler);
        })
    }

    fields.forEach(connectField);
})
