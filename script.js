
let map =   
    ["nha  p",
    "ba    ",
    "      ",
    "      ",
    "      ",
    "      ",
    "ok    "
    ];

function boardBuild(arr){
    let board = document.getElementById("board");

    for(let i = 0; i < arr.length; i++) {
        let coluna = document.createElement("div");
        coluna.classList.add("columns");
        coluna.innerText = "Oi"
        coluna.id = "column" + (i + 1);
        board.appendChild(coluna);
        

        let celulas = arr[i];
        let pegaColuna = document.getElementsByClassName("columns")[i];
        for(let x = 0; x < celulas.length; x++) {
            let createCel = document.createElement("div");
            createCel.id = `C${i + 1}L${x+1}`
            createCel.classList.add("celulas");
            pegaColuna.appendChild(createCel);
        }
    }
    
}


    boardBuild(map)


let column1= document.getElementById("column1");
let column2 = document.getElementById("column2");
let column3 = document.getElementById("column3");
let column4 = document.getElementById("column4");
let column5= document.getElementById("column5");
let column6= document.getElementById("column6");
let column7= document.getElementById("column7");
// da para fazer uma função só de atribuição de Id, mas achei desnecessário

let spreadMap;
let actualCel;
let celId;
let childsCel;

let getCel;
function game(ev){
    let filho =document.createElement('div')
    filho.classList.add('ballRed')
    let touchColumn = ev.currentTarget.id;
    let cel = ev.target
    console.log(cel)
    cel.appendChild(filho)
  


    for(let i = 5; i >= 0; i--){
     actualCel =  document.getElementById(touchColumn).getElementsByClassName("celulas")[i];
    
        celId = actualCel.id;
        console.log(celId)
        getCel = document.getElementById(celId);
        childsCel = getCel.childElementCount;
        console.log(childsCel)

        // if(childsCel === 0){
        //     count++;
        //     if(count% 2 === 0){

        //     } else {

        //     }
        // }
       
    }

    // selecionar a coluna clicada
    // fazer um for i--  que comece pelo 6
    // conferir a partir do último filho se ele tem filho
    // se não tiver, coloca a bolinha nele
    // se tiver, vai para o proximo filho da coluna(divizinha)
   
    // let cel = document.getElementById('C1L6')
    // let celChild = cel.childElementCount

    // if(celChild !== 0){
    //     celChild.appendChild(ball)
    // }
    
    
}
column1.addEventListener("click", game, victory, drawn);
column2.addEventListener("click", game, victory, drawn);
column3.addEventListener("click", game, victory, drawn);
column4.addEventListener("click", game, victory, drawn);
column5.addEventListener("click", game, victory, drawn);
column6.addEventListener("click", game, victory, drawn);
column7.addEventListener("click", game, victory, drawn);

function victory(){
// 4 bolinhas vertical
// " horizontal
// diagonal
// Eduardo
}
victory()

function drawn(){
// quando todas as células forem preenchidas
// conferir 
}
drawn()

 // receber os handlers de click usando o ev currentTarget da column

    // contador de frequência : Carlos
  
    // usar o contador de frequencia para saber se a jogada é do R ou do B

    // spread de cada string
    // conferir o item com o indice baseado na coluna clicada
    // fazer um arr com todo primeiro item dos arr que foram gerados
    // fazer um for com i-- para conferir a partir do ultimo item se tem ball ou nao
    // counter acionado só quando bolinha é colocada