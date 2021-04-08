
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
    
    } else {
        arrBi[Number(oi.id)][i] = "R"
        verticalVictory(child, oi, i, arrBi)
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
