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
    novoElemento.textContent = JSON.stringify(gotCitiesCSV.replace(/,/g, ';'))
    document.body.appendChild(novoElemento)

    return gotCitiesCSV
}

kata3()

function kata4() {
    let novoElemento = document.createElement('div')
    novoElemento.textContent = JSON.stringify(gotCitiesCSV.split(' '))
    document.body.appendChild(novoElemento)

    return gotCitiesCSV
}

kata4()

function kata5() {
    /* Escreva uma função que **retorna** um array com as 5 primeiras cidades de 'lotrCitiesArray'. Lembre-se de também **adicionar os resultados à página*.*/
    let novoElemento = document.createElement('div')
    let nova = []
        for(let i = 0; i < lotrCitiesArray.length-3; i++){
        nova.push(lotrCitiesArray[i])
    }
    novoElemento.textContent = JSON.stringify(nova)
    document.body.appendChild(novoElemento)

    return lotrCitiesArray
}

kata5()

function kata6() {
   
    let novoElemento = document.createElement('div')
    let novaDenovo = []

    for(let i = 3; i < lotrCitiesArray.length; i++){
        novaDenovo.push(lotrCitiesArray[i])
    }
    novoElemento.textContent = JSON.stringify(novaDenovo)
    document.body.appendChild(novoElemento)

    return lotrCitiesArray
}

kata6()

function kata7() {
    let novoElemento = document.createElement('div')
    let novaSouEuDenovo = []

    for(let i = 2; i < lotrCitiesArray.length-3;i++){
        novaSouEuDenovo.push(lotrCitiesArray[i])
    }

    novoElemento.textContent = JSON.stringify(novaSouEuDenovo)
    document.body.appendChild(novoElemento)

    return lotrCitiesArray
}

kata7()


