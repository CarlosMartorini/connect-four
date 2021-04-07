
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

        }
    
    }
    
}
boardBuild(map);


let counter = 0;
let actualColumn;
let actualCel;
let columnSelected;
let filho;


let column1 = document.getElementById("Column1");
let column2 = document.getElementById("Column2");
let column3 = document.getElementById("Column3");
let column4 = document.getElementById("Column4");
let column5 = document.getElementById("Column5");
let column6 = document.getElementById("Column6");
let column7 = document.getElementById("Column7");


function game(ev){
    
    filho = document.createElement('div');
    columnSelected =ev.currentTarget.id;

    actualColumn =  document.getElementById(columnSelected)
    if(actualCel = actualColumn.getElementsByClassName("celulas")[0].childElementCount !== 0){
        return;
    }
    counter++;

    for(let i = 0; i <= 5; i++){
        

        actualCel = actualColumn.getElementsByClassName("celulas")[i];
       console.log(actualCel)
        
        
        if(actualCel.childElementCount !== 0 ){
            return;
        }  

        if (actualCel.childElementCount === 0) {
            console.log(counter)
            if (counter % 2 === 0) {
                actualCel.appendChild(filho);
                filho.classList.add('ballRed');
                console.log(counter)
                
                
            } else {
                
                actualCel.appendChild(filho);
                filho.classList.add('ballBlack');
                console.log(counter)
               
               

            }
            
        }
    
    }
    // chama vitoria
   
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


// function drawn(){
//     let countCol = 0;
//     for (let i = 0; i < 7; i++) {
//         let idCel = `C${i + 1}L1`;
//         let cel = document.getElementById(idCel);
//         if(cel.hasChildNodes(true)) {
//             countCol++
//         }
//     }
//     console.log(countCol)
//     if(countCol === 7) {
//         return true
        
//     }
    
// }

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