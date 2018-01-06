class Board {
	constructor(selector) {
		this.board;
		this.selector = selector;
		this.element = document.querySelector(this.selector);
		this.playerA = new Player('Grześ', 'red');
		this.playerB = new Player('Natalia', 'blue');
		this.currentPlayer = this.playerA;
		this.init();
	}

	init() {
		this.board = [
			[{}, {}, {}],
			[{}, {}, {}],
			[{}, {}, {}],
		];
		this.element.innerHTML = '';
		for(let row of this.board) {
			for(let field of row) {
				const fieldElement = document.createElement('div');
				field.element = fieldElement;
				this.element.appendChild(fieldElement);
				// addEventListener() with options argument to invoke listener only once
				fieldElement.addEventListener('click', () => {
					this.fieldClick(field);
				}, {
					once: true
				});
			}
		}
		this.render()
	}

	fieldClick(field) {
		field.color = this.currentPlayer.color;
		this.currentPlayer = this.currentPlayer === this.playerA ? this.playerB : this.playerA;
		this.render();
		this.checkWinner();
	}

	checkWinner() {
		// Horizontal winning configurations
		var row1 = this.board[0][0].color + this.board[0][1].color + this.board[0][2].color;
		var row2 = this.board[1][0].color + this.board[1][1].color + this.board[1][2].color;
		var row3 = this.board[2][0].color + this.board[2][1].color + this.board[2][2].color;

		// Vertical winning configurations
		var column1 = this.board[0][0].color + this.board[1][0].color + this.board[2][0].color;
		var column2 = this.board[0][1].color + this.board[1][1].color + this.board[2][1].color;
		var column3 = this.board[0][2].color + this.board[1][2].color + this.board[2][2].color;

		// Diagonal winning configurations
		var diagonal1 = this.board[0][0].color + this.board[1][1].color + this.board[2][2].color;
		var diagonal2 = this.board[2][0].color + this.board[1][1].color + this.board[0][2].color;

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

		if (boardCheck.includes(`${this.playerA.color}${this.playerA.color}${this.playerA.color}`)) {
			this.gameOver(`${this.playerA.name} Wins!`);
			return;
		}

		if (boardCheck.includes(`${this.playerB.color}${this.playerB.color}${this.playerB.color}`)) {
			this.gameOver(`${this.playerB.name} Wins!`);
			return;
		}

		if(this.isGameOver()) {
			this.gameOver('Tie!');
			return;
		}
	}

	gameOver(message) {
		setTimeout(() => {
			alert(message);
			this.init();
		}, 100);
	}

	isGameOver() {
		for (let row of this.board) {
			for (let field of row) {
				if (!field.color) {
					return false;
				}
			}
		}
		return true;
	}

	render() {
		for (let row of this.board) {
			for (let field of row) {
				field.element.classList.add(field.color);
			}
		}
	}
}