
let map =   
    ["      ",
    "      ",
    "      ",
    "      ",
    "      ",
    "      ",
    "      ",
    ];

function boardBuild(arr){
    let board = document.getElementById("board");

    for(let i = 0; i < arr.length; i++) {
        let coluna = document.createElement("div");
        coluna.classList.add("columns");
        coluna.id = "Column" + (i + 1);
        board.appendChild(coluna);
        

        let celulas = arr[i];
        let pegaColuna = document.getElementsByClassName("columns")[i];
        for(let x = 0; x < celulas.length; x++) {
            let createCel = document.createElement("div");
            createCel.classList.add("celulas");
            createCel.id = `C${i + 1}L${x + 1}`;
            pegaColuna.appendChild(createCel);
            // createCel.innerText = `${i + 1},${x + 1}`;
        }
    }
    
}

boardBuild(map)

let counter = 0;
let celId;
let getCel;
let childsCel;
let actualColumn;
let actualCel;

function game(ev){
    
    counter++;

    let filho = document.createElement('div')
    let columnSelected = ev.target.parentNode.id;
    
    actualColumn =  document.getElementById(columnSelected)
    
    for(let i = 0; i <= 5; i++){

        actualCel = actualColumn.getElementsByClassName("celulas")[i];
        console.log(actualCel);

        if (actualCel.childElementCount === 0) {
            
            if (counter % 2 === 0) {

                actualCel.appendChild(filho);
                filho.classList.add('ballRed');

            } else {

                actualCel.appendChild(filho);
                filho.classList.add('ballBlack');

            }
        }
    }

}

document.addEventListener("click", game);

function victory(){
// 4 bolinhas vertical
// " horizontal
// diagonal
// Eduardo
}
victory()

function drawn(){
// quando todas as células forem preenchidas
}
drawn()