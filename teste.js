let touchColumn = ev.currentTarget.id
    let vai = document.getElementById(touchColumn);
    console.log(vai)

    
    let filho = document.createElement("div")
    filho.classList.add('ballRed')
    vai.appendChild(filho);
    console.log(ev)
    console.log(touchColumn);

    if(arr[0][5] === "B"){
        console.log("miau")
       
    } if (arr[1][5] === "R") {
        console.log("Katiau")
    }

     // for(let i = 0; i < 7; i++){
    //     // passar pelas coluns na cel baseada no ind;
    //     if(arr[i][ind] === "B"){
    //         console.log(arr[i][ind]);
    //     }
        
    // }