document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    let width = 10;
    let bombAmount = 20;
    let squares = [];

    // Creates board for Minesweeper game.
    function createBoard() {
        // Randomly places bombs in the grid. Gets the shuffled game array.
        const bombsArray = Array(bombAmount).fill("bomb");
        const emptyArray = Array(width * width - bombAmount).fill("valid");
        const gameArray = emptyArray.concat(bombsArray);
        console.log(gameArray);
        const shuffledArray = gameArray.sort(() => Math.random() -0.5);

        for (let i = 0; i < width * width; i++) {
            const square = document.createElement("div");
            square.setAttribute("id", i);
            square.classList.add(shuffledArray[i]);
            grid.appendChild(square);
            squares.push(square);

            // Clicking on board.
            square.addEventListener("click", function(event) {
                click(square);
            });
        }

        // Displays numbers to indicate bombs for the neighboring eight squares.
        for (let i = 0; i < squares.length; i++) {
            let total = 0;
            const isLeftEdge = (i % width === 0);
            const isRightEdge = (i === width -1);

            if (squares[i].classList.contains("valid")) {
                if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains("bomb")) total++;
                if (i > 9 && !isRightEdge && squares[i + 1 - width].classList.contains("bomb")) total++;
                if (i > 10 && squares[i - width].classList.contains("bomb")) total++;
                if (i > 11 && !isLeftEdge && squares[i - 1 - width].classList.contains("bomb")) total++;
                if (i < 98 && !isRightEdge && squares[i + 1].classList.contains("bomb")) total++;
                if (i < 90 && !isLeftEdge && squares[i - 1 + width].classList.contains("bomb")) total++;
                if (i < 88 && !isRightEdge && squares[i + 1 + width].classList.contains("bomb")) total++;
                if (i < 89 && squares[i +width].classList.contains("bomb")) total++;
                squares[i].setAttribute("data", total);
            }
    }
    }
    createBoard();

    // Defining the parameters of the "click" function.
    function click(square) {
        if (square.classList.contains("bomb")) {
            alert("Game Over!");
        };
    }

});