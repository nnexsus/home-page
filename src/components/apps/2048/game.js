import { Grid, Wrapper } from "./2048.styles";

const Game = () => {

        var board;
        var score = 0;
        var rows = 4;
        var columns = 4;

        document.addEventListener("keyup", (e) => {
            if (e.code === "Enter") {
                setup();
                console.log("test1")
            }
        })
        
        function setup() {
            setGame();
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < columns; c++) {
                    if (!document.querySelector("#board").hasChildNodes()) {
                        console.log(document.querySelector("#board").hasChildNodes().toString())
                        let tile = document.createElement("div");
                        tile.id = r.toString() + "-" + c.toString();
                        let num = board[r][c];
                        updateTile(tile, num);
                    }
                }
            }
            score = 0;
            document.getElementById("score").innerText = score;
            //document.getElementById("overScreen").style.display = "none";
        }
        
        function rstBoard() {
            board = [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        }

        function setGame() {
            board = [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < columns; c++) {
                    let tile = document.createElement("div");
                    tile.id = r.toString() + "-" + c.toString();
                    let num = board[r][c];
                    updateTile(tile, num);
                    document.getElementById("board").append(tile);
                }
            }
            
            setTwo();
            setTwo();
        
        }
        
        function updateTile(tile, num) {
            tile.innerText = "";
            tile.classList.value = "";
            tile.classList.add("tile");
            if (num > 0) {
                tile.innerText = num.toString();
                if (num <= 4096) {
                    tile.classList.add("x" + num.toString());
                } else {
                    tile.classList.add("x8192");
                }                
            }
        }


        document.addEventListener("keyup", (e) => {
            if (e.code === "ArrowLeft") {
                slideLeft();
                setTwo()
            } else if (e.code === "ArrowRight") {
                slideRight(); 
                setTwo()
            } else if (e.code === "ArrowUp") {
                slideUp(); 
                setTwo()
            } else if (e.code === "ArrowDown") {
                slideDown(); 
                setTwo()
            } else if (e.code === "KeyR") {
                rstBoard()
                slideLeft()
                setTwo()
                setTwo()
                score = 0;
                document.getElementById("score").innerText = score;
                document.getElementById("overScreen").style.display = "none";
            }
            document.getElementById("score").innerText = score;
        })

        function filterZero(row){
            return row.filter(num => num != 0);
        }
        
        function slide(row) {
            row = filterZero(row);
            for (let i = 0; i < row.length - 1; i++){
                if (row[i] == row[i + 1]) {
                    row[i] *= 2;
                    row[i + 1] = 0;
                    score += row[i];
                }
            }
            row = filterZero(row); 

            while (row.length < columns) {
                row.push(0);
            }
            return row;
        }
        

        function slideLeft() {
            for (let r = 0; r < rows; r++) {
                let row = board[r];
                row = slide(row);
                board[r] = row;
                for (let c = 0; c < columns; c++){
                    let tile = document.getElementById(r.toString() + "-" + c.toString());
                    let num = board[r][c];
                    updateTile(tile, num);
                }
            }
        }

        function slideRight() {
            for (let r = 0; r < rows; r++) {
                let row = board[r];
                row.reverse();
                row = slide(row);
                row.reverse();
                board[r] = row;

                for (let c = 0; c < columns; c++) {
                    let tile = document.getElementById(r.toString() + "-" + c.toString())
                    let num = board[r][c]
                    updateTile(tile, num) 
            }
        }
    }

        function slideUp() {
            for (let c = 0; c < columns; c++) {
                let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
                row = slide(row);

                    for (let r = 0; r < rows; r++) {
                        board[r][c] = row[r];
                        let tile = document.getElementById(r.toString() + "-" + c.toString())
                        let num = board[r][c]
                        updateTile(tile, num) 
                }
            }
        }

        function slideDown() {
            for (let c = 0; c < columns; c++) {
                let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
                row.reverse();
                row = slide(row);
                row.reverse();

                    for (let r = 0; r < rows; r++) {
                        board[r][c] = row[r];
                        let tile = document.getElementById(r.toString() + "-" + c.toString())
                        let num = board[r][c]
                        updateTile(tile, num) 
                }
            }
        }

        function setTwo() {
            if (!hasEmptyTile()) {
                return;
            }
            let found = false;
            while (!found) {
                //find random row and column to place a 2 in
                let r = Math.floor(Math.random() * rows);
                let c = Math.floor(Math.random() * columns);
                if (board[r][c] == 0) {
                    board[r][c] = 2;
                    let tile = document.getElementById(r.toString() + "-" + c.toString());
                    tile.innerText = "2";
                    tile.classList.add("x2");
                    found = true;
                }
            }
        }

        function hasEmptyTile() {
            let count = 0;
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < columns; c++) {
                    if (board[r][c] == 0) { //at least one zero in the board
                        return true;
                    }
                }
            }
            /* if (checkIfDied() === true) {
                document.getElementById("overScreen").style.display = "flex";
                console.log("death")
            } */
            return false;
        }

        function checkIfDied() {
            for (let r = 0; r < rows; r++) {
                let row = board[r];
                for (let i = 0; i < row.length - 1; i++){
                    if (row[i] == row[i + 1]) {
                        return false;
                    }
                }
            }
            for (let c = 0; c < columns; c++) {
                let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
                console.log(row)
                    for (let rw = 0; rw < rows; rw++) {
                        if (row[rw] === row[rw + 1]) {
                            return false;
                        }
                }
            }
            
            return true;
        }



    return (
    <Wrapper className="twofourGame">
        <p>Hit enter to start a game.</p>
        <div className="scoreContainer">
            <h1>Score: </h1>
            <span id="score">0</span>
        </div>

        <div id="results"></div>

        <Grid id="board">

        </Grid>
        <p>Press 'R' to reset. </p>
    </Wrapper>
    )
}

export default Game;