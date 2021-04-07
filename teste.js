let touchColumn = ev.currentTarget.id
    let vai = document.getElementById(touchColumn);
    console.log(vai)

    
    let filho = document.createElement("div")
    filho.classList.add('ballRed')
    vai.appendChild(filho);
    console.log(ev)
    console.log(touchColumn);