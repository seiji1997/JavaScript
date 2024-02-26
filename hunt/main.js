let boardSize = 5;
let playerPos = generatePosition(boardSize);
let watermelonPos = generatePosition(boardSize);

function generatePosition(size) {
    return {
        x: Math.floor(Math.random() * size),
        y: Math.floor(Math.random() * size)
    };
}

function calcDistance(pos1, pos2) {
    let diffX = pos1.x - pos2.x;
    let diffY = pos1.y - pos2.y;
    return Math.sqrt(diffX ** 2 + diffY ** 2);
}

function movePlayer(direction) {
    if (direction === 'n' && playerPos.y > 0) {
        playerPos.y--;
    } else if (direction === 's' && playerPos.y < boardSize - 1) {
        playerPos.y++;
    } else if (direction === 'w' && playerPos.x > 0) {
        playerPos.x--;
    } else if (direction === 'e' && playerPos.x < boardSize - 1) {
        playerPos.x++;
    }

    updateGame();
}

function updateGame() {
    let distance = calcDistance(playerPos, watermelonPos);
    document.getElementById('info').textContent = 'Distance to watermelon: ' + distance.toFixed(2);

    let playerElement = document.getElementById('player');
    playerElement.style.left = playerPos.x * 60 + 'px'; // Assuming each cell is 60px wide
    playerElement.style.top = playerPos.y * 60 + 'px'; // Assuming each cell is 60px tall

    if (playerPos.x === watermelonPos.x && playerPos.y === watermelonPos.y) {
        alert('Watermelon split!');
        playerPos = generatePosition(boardSize);
        watermelonPos = generatePosition(boardSize);
        updateGame();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let gameBoard = document.getElementById('game-board');
    gameBoard.style.width = boardSize * 60 + 'px'; // Assuming each cell is 60px wide
    gameBoard.style.height = boardSize * 60 + 'px'; // Assuming each cell is 60px tall

    let watermelonElement = document.createElement('div');
    watermelonElement.id = 'watermelon';
    gameBoard.appendChild(watermelonElement);

    let playerElement = document.createElement('div');
    playerElement.id = 'player';
    gameBoard.appendChild(playerElement);

    updateGame();
});
