
let map =   
    ["       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    ];

function boardBuild(arr){
    let board = document.getElementById("board");

    for(let i = 0; i < arr.length; i++) {
        let coluna = document.createElement("div");
        coluna.classList.add("columns");
        board.appendChild(coluna);

        let celulas = arr[i];
        let pegaColuna = document.getElementsByClassName("columns")[i];
        for(let x = 0; x < celulas.length; x++) {
            let createCel = document.createElement("div");
            createCel.classList.add("celulas");
            pegaColuna.appendChild(createCel);
        }
    }
    
}

boardBuild(map)

function game(ev){
    // Carlos e Manu
    // receber os handlers de click (feature handlers de click)
    // contador de frequência
    // ev target e ev current target (clicar na coluna)
    // usar o contador de frequencia para saber se a jogada é do R ou do B
    // handlerclique(victory)
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