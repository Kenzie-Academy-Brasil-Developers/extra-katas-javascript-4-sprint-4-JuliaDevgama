const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function kata1() {
    // implemente aqui o código
    let novoElemento = document.createElement('div')
    novoElemento.textContent = JSON.stringify(gotCitiesCSV)
    document.body.appendChild(novoElemento)
    return gotCitiesCSV
}

kata1();

function kata2() {
    let novoElemento = document.createElement('div')
    novoElemento.textContent = JSON.stringify(bestThing)
    document.body.appendChild(novoElemento)

    return bestThing
}

kata2()

function kata3() {
    let novoElemento = document.createElement('div')
    // novoElemento.textContent = JSON.stringify(gotCitiesCSV)
    // document.body.appendChild(novoElemento)
    let matrix = gotCitiesCSV.split(' ')
    console.log(matrix.join())
   //return gotCitiesCSV
}

kata3()

function kata4() {
    let novoElemento = document.createElement('div')
    novoElemento.textContent = JSON.stringify()
    document.body.appendChild(novoElemento)

   
}

kata4()
