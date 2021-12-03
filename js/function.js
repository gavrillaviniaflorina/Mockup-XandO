let matrix = ["", "", "", "", "", "", "", "", ""];
let player = "O";
let status = true;


function handleCellClicked(index, player) {
    matrix[index] = player;

}

function switchPlayer() {
    if (player == "O") {
        player = "X";
    } else {
        player = "O";
    }
}



function checkWin() {
    if (matrix[0] == matrix[1] && matrix[0] == matrix[2]) {
        return matrix[0];
    }

    if (matrix[0] == matrix[4] && matrix[0] == matrix[8]) {
        return matrix[0];
    }

    if (matrix[0] == matrix[3] && matrix[0] == matrix[6]) {
        return matrix[0];
    }

    if (matrix[1] == matrix[4] && matrix[1] == matrix[7]) {
        return matrix[1];
    }

    if (matrix[2] == matrix[4] && matrix[2] == matrix[6]) {
        return matrix[2];
    }

    if (matrix[2] == matrix[5] && matrix[2] == matrix[8]) {
        return matrix[2];
    }

    if (matrix[3] == matrix[4] && matrix[3] == matrix[5]) {
        return matrix[3];
    }

    if (matrix[6] == matrix[7] && matrix[6] == matrix[8]) {
        return matrix[6];
    }


    return -1;

}


function setHome() {


    let container = document.querySelector('.container');


    container.innerHTML = `
     
    <main class="start">
    <h1>BINE ATI VENIT!</h1>
    <button class="joaca">JOACA!</button>
</main>
    `



    let btn = document.querySelector(".joaca");


    btn.addEventListener("click", () => {

        setPlay();


    })





}

function setPlay() {
    matrix = ["", "", "", "", "", "", "", "", ""];
    player = "O";

    let container = document.querySelector('.container');
    container.innerHTML = `
    <main>
    <section class="game">

        <div class="0" ></div>
        <div class="1" ></div>
        <div class="2"></div>
        <div class="3" ></div>
        <div class="4"></div>
        <div class="5" ></div>
        <div class="6"></div>
        <div class="7" ></div>
        <div class="8" ></div>
    </section>

   
</main>
    
    `;

    let game = document.querySelector(".game");


    game.addEventListener('click', (e) => {
        let cell = e.target;

        var cellIndex = cell.getAttribute('class');
        console.log(cellIndex);


        if (cell.tagName == "DIV") {
            handleCellClicked(cellIndex, player);
            createUpdate();
            switchPlayer();


            let decision = decideWInner();
            if (decision != -1) {
                setWinner(decision);
            }

        }





    })




}


function seeMatrix() {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }

}

function createUpdate() {
    let game = document.querySelector(".game");

    let div = "";
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i] != " ") {
            div += `<div class="${i}">  ${matrix[i]}  </div> `;
        } else {
            div += `<div class="${i}"> </div> `
        }
    }


    game.innerHTML = div;
}

function decideWInner() {
    if (checkWin() == "X") {
        return `Player 2`;
    } else if (checkWin() == "O") {
        return `Player 1`;
    } else if (fullMatrix() == true && checkWin() == -1) {
        return `Deuce`;
    }
    return -1;

}

function fullMatrix() {

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i] == "") {
            return false;
        }

    }
    return true;
}

function setWinner(winner) {
    let container = document.querySelector('.container');

    if (winner != "Deuce") {
        container.innerHTML = `   <main class="final">
    <h1>${winner} won!</h1>
    <button class="joaca">Play again!</button>
</main>;`
    } else {
        container.innerHTML = `   <main class="final">
    <h1>${winner}</h1>
    <button class="joaca">Play again!</button>
</main>;`
    }


    let restart = document.querySelector(".joaca");


    restart.addEventListener('click', (e) => {

        setPlay();
    });
}