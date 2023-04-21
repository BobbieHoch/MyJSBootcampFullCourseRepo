let board = document.getElementById('board');

board.addEventListener('click', clickSquare);

createGrid(5);

function createGrid(gridSize){
    for(let x = 0; x < gridSize; x++){
        let row = document.createElement('div');
        row.style.display = "flex";
        for(let y = 0; y < gridSize; y++){
            let divTile = document.createElement('div');
            divTile.style.border = "solid";
            divTile.style.borderWidth = "2px";
            divTile.style.width = "50px";
            divTile.style.height = "50px";
            row.appendChild(divTile);
        }
        board.appendChild(row);
    }
}

function clickSquare(){
    
}