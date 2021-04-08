
let map =   
    [
    "      ",
    "      ",
    "      ",
    "      ",
    "      ",
    "      ",
    "      ",
    ];

    let arrBi =[
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
    ];
       
function boardBuild(arr){
    let board = document.getElementById("board");

    for(let i = 0; i < arr.length; i++) {
        let coluna = document.createElement("div");
        coluna.classList.add("columns");
        coluna.id = i ;
        board.appendChild(coluna);
        

        let celulas = arr[i];
        let pegaColuna = document.getElementsByClassName("columns")[i];
        for(let x = 0; x < celulas.length; x++) {
            let createCel = document.createElement("div");
            createCel.classList.add("celulas");
            createCel.classList.add(`celulas${x}`)
            createCel.id = `C${i + 1}L${x + 1}`;
            pegaColuna.appendChild(createCel);
            
        }
    
    }
    
}
boardBuild(map);


let counter = 0;

let actualColumn;
let actualCel;
let columnSelected;
let filho;
let idCelu;
let lala;
let soma;
let columnPosition;
let numCel;
let child;

let column1 = document.getElementById("0");
let column2 = document.getElementById("1");
let column3 = document.getElementById("2");
let column4 = document.getElementById("3");
let column5 = document.getElementById("4");
let column6 = document.getElementById("5");
let column7 = document.getElementById("6");


function game(ev){
    
    filho = document.createElement('div');
    columnSelected =ev.currentTarget.id;
   
    columnPosition = parseInt(columnSelected);
   
    actualColumn =  document.getElementById(columnSelected)
    if(actualCel = actualColumn.getElementsByClassName("celulas")[0].childElementCount !== 0){
        return;
    }
    counter++;

    redblackCount(actualColumn)

   
    let oi = ev.currentTarget;
    console.log(oi);
    
    for(let i =0; i < oi.children.length; i++){
        
        if(oi.children[i].childElementCount > 0){
            child = oi.children[i].children;
            console.log(child)
            redBlack(child,oi,i)
            
           

        } else {
            continue;
        }
        
        
    }

    winDiagonalCondition();

    drawn()
    
   
}

column1.addEventListener("click", game)
column2.addEventListener("click", game)
column3.addEventListener("click", game)
column4.addEventListener("click", game)
column5.addEventListener("click", game)
column6.addEventListener("click", game)
column7.addEventListener("click", game)



function victory(){

}
victory()

function verticalVictory(child, oi, i, arrBi){
    if(arrBi[Number(oi.id)][i - 1] === arrBi[Number(oi.id)][i] && 
    arrBi[Number(oi.id)][i - 2] === arrBi[Number(oi.id)][i] &&
    arrBi[Number(oi.id)][i - 3] === arrBi[Number(oi.id)][i] 
    ){
        console.log("miau")
    } 
   
}

function horizonVictory(child, oi, i, arrBi){
    let primeiroindex = Number(oi.id);
    // if(arrBi[primeiroindex - 1][i] === arrBi[Number(oi.id)][i] && 
    // arrBi[primeiroindex - 2][i] === arrBi[Number(oi.id)][i] &&
    // arrBi[primeiroindex - 3][i] === arrBi[Number(oi.id)][i] 
    // ){
    //     console.log("gain")
    // }
    if (primeiroindex === 0){
        if(arrBi[primeiroindex][i] === arrBi[primeiroindex+1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+2][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+3][i])
        {
            console.log("gain");
        }
    }if (primeiroindex === 1){
        if((arrBi[primeiroindex][i] === arrBi[primeiroindex-1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+2][i])
        ||
        (arrBi[primeiroindex][i] === arrBi[primeiroindex+1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+2][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+3][i])
        ){
            console.log("gain");
        }
    }if (primeiroindex === 2){
        if((arrBi[primeiroindex][i] === arrBi[primeiroindex+1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-2][i]) 
        ||
        (arrBi[primeiroindex][i] === arrBi[primeiroindex-1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+2][i])
        ||
        (arrBi[primeiroindex][i] === arrBi[primeiroindex+1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+2][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+3][i])
        ){
            console.log("gain");
        }
    }if (primeiroindex === 3){
        if((arrBi[primeiroindex][i] === arrBi[primeiroindex-1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-2][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-3][i]) 
        ||
        (arrBi[primeiroindex][i] === arrBi[primeiroindex+1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-2][i]) 
        ||
        (arrBi[primeiroindex][i] === arrBi[primeiroindex-1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+2][i]) 
        ||
        (arrBi[primeiroindex][i] === arrBi[primeiroindex+1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+2][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+3][i])
        ){
            console.log("gain");
        }
    }if (primeiroindex === 4){
        if((arrBi[primeiroindex][i] === arrBi[primeiroindex-1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-2][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+1][i]) 
        ||
        (arrBi[primeiroindex][i] === arrBi[primeiroindex-1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex+2][i])
        ||
        (arrBi[primeiroindex][i] === arrBi[primeiroindex-1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-2][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-3][i])
        ){
            console.log("gain");
        }
    }if (primeiroindex === 5){
        if((arrBi[primeiroindex][i] === arrBi[primeiroindex+1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-2][i]) 
        ||
        (arrBi[primeiroindex][i] === arrBi[primeiroindex-1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-2][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-3][i])
        ){
            console.log("gain");
        }
    }if (primeiroindex === 6){
        if(arrBi[primeiroindex][i] === arrBi[primeiroindex-1][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-2][i] &&
        arrBi[primeiroindex][i] === arrBi[primeiroindex-3][i])
        {
            console.log("gain");
        }
    }
}

// percorrer todas as colunas so que na mesma posicao do elemento

function redblackCount(actualColumn){
    for(let i = 0; i <= 5; i++){
        

        actualCel = actualColumn.children[i]
        if(actualCel.childElementCount !== 0 ){
            return;
        }  

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

function redBlack(child,oi,i){
    let color;
    if(child[0].classList.value === "ballBlack"){
        arrBi[Number(oi.id)][i] = "B";
        verticalVictory(child, oi, i, arrBi)
        horizonVictory(child, oi, i, arrBi)
    
    } else {
        arrBi[Number(oi.id)][i] = "R"
        verticalVictory(child, oi, i, arrBi)
        horizonVictory(child, oi, i, arrBi)
    }
}

const createMap = () => {
    let getBoard = document.getElementById('board');
    let map = [];
    for (let i = 0; i < 7; i++) {
        map.push([]);
        for (let j = 0; j < 6; j++) {
            map[i].push(getBoard.children[i].children[j]);
        }
    }
    return map;
}
createMap();

function drawn(){
    let countCol = 0;
    for (let i = 0; i < 7; i++) {
        let idCel = `C${i + 1}L1`;
        let cel = document.getElementById(idCel);
        if(cel.hasChildNodes(true)) {
            countCol++
        }
    }
   
    if(countCol === 7) {
        return true
        
    }
}

/*********************************
 *  CONDIÇÃO DE VITÓRIA DIAGONAL *
 *********************************/

 let getVictory = document.getElementById('victory');

 const black = "B";
 const red = "R";

 const winDiagonalCondition = () => {
     diagonalUpRight();
     diagonalUpLeft();
 }

 const upRight = (letter) => {
    for (let i = 0; i < arrBi.length; i++) {
        for (let j = 0; j < arrBi[i].length; j++) {
            if (arrBi[i][j] === letter && 
            (i + 1) < 7 && (j - 1) > -1 &&
            arrBi[i + 1][j - 1] === letter &&
            (i + 2) < 7 && (j - 2) > -1 &&
            arrBi[i + 2][j - 2] === letter &&
            (i + 3) < 7 && (j - 3) > -1 &&
            arrBi[i + 3][j - 3] === letter) {
                return true;
            }
        }
    }
 }
 
 const diagonalUpRight = () => {
 
    if (upRight(black)) {

        console.log("VENCEDOR BLACK UP RIGHT!");

        getVictory.classList.remove('hidden');


    } else if (upRight(red)) {
    
        console.log("VENCEDOR RED UP RIGHT!");
        
        getVictory.classList.remove('hidden');

    }
 }

 const upLeft = (letter) => {
    for (let i = 0; i < arrBi.length; i++) {
        for (let j = 0; j < arrBi[i].length; j++) {
            if (arrBi[i][j] === letter && 
            (i - 1) > -1 && (j - 1) > -1 &&
            arrBi[i - 1][j - 1] === letter &&
            (i - 2) > -1 && (j - 2) > -1 &&
            arrBi[i - 2][j - 2] === letter &&
            (i - 3) > -1 && (j - 3) > -1 &&
            arrBi[i - 3][j - 3] === letter) {
                return true;
            }
        }
    }
 }
 
 const diagonalUpLeft = () => {
 
    if (upLeft(black)) {

        console.log("VENCEDOR BLACK UP LEFT!"); 
        
        getVictory.classList.remove('hidden');

    } else if (upLeft(red)) {
    
        console.log("VENCEDOR RED UP LEFT!");    
        
        getVictory.classList.remove('hidden');

    }   
 }