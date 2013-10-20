var gameModule = (function ($) {
	var player = 'me',
		board = [-1, -1, -1, -1, -1, -1, -1, -1],
		m = [-9, -9, -9, -9, -9, -9, -9, -9, -9];

	function changePlayer() {
		if (player === 'me') player = 'you';
		else player = 'me';
	}

	function changeStatus(idx) {
		m[idx] = (player === "me" ? 0 : 1);

		board[0] = m[0] + m[3] + m[6];  // right column 
		board[1] = m[1] + m[4] + m[7];  // middle column
		board[2] = m[2] + m[5] + m[8];  // left column
		board[3] = m[6] + m[7] + m[8];  // bottom row
		board[4] = m[3] + m[4] + m[5];  // middle row
		board[5] = m[0] + m[1] + m[2];  // top row
		board[6] = m[0] + m[4] + m[8];  //right-top to left-bottom
		board[7] = m[2] + m[4] + m[6];  //left-top to right-bottom

		for (var i = 0; i < board.length; i++) {
			if (board[i] === 0 || board[i] === 3) alert(player + " wins");
		}

		console.log(m);		
	}

	$.fn.playRound = function () {
		this.on('click', function(){
			var me = $(this),
				index = me.data('grid-no');

			if (player === 'me') {
				me.html("O");
			} else {
				me.html("X");
			}

			changeStatus(index);
			changePlayer();
		})
	}
})($);