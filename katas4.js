const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function kata1() {
    // implemente aqui o código
    let novoElemento = document.createElement('div')
    novoElemento.textContent = JSON.stringify(gotCitiesCSV.split(' '))
    document.body.appendChild(novoElemento)
    return gotCitiesCSV
}

kata1();

function kata2() {
    let novoElemento = document.createElement('div')
    novoElemento.textContent = JSON.stringify(bestThing.split(' '))
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
    novoElemento.textContent = JSON.stringify(lotrCitiesArray.join())
    document.body.appendChild(novoElemento)

    return lotrCitiesArray
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

function kata8() {
    
    let novoElemento = document.createElement('div')
    let novo = lotrCitiesArray.splice(2,1)
    novoElemento.textContent = JSON.stringify(lotrCitiesArray)
    document.body.appendChild(novoElemento)

    return lotrCitiesArray

}

kata8()

function kata9() {
// const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
    let novoElemento = document.createElement('div')
    let socorro = lotrCitiesArray.splice(5,1)
    novoElemento.textContent = JSON.stringify(lotrCitiesArray)
    document.body.appendChild(novoElemento)

    return lotrCitiesArray

}

kata9()

function kata10() {
    // depois de 'Gondor'
    let novoElemento = document.createElement('div')
    let adicionaAi = lotrCitiesArray.splice(2,0,'Rohan')
    novoElemento.textContent = JSON.stringify(lotrCitiesArray)
    document.body.appendChild(novoElemento)

    return lotrCitiesArray
}

kata10()

function kata11() {
    
    let novoElemento = document.createElement('div')
    let mudaAi = lotrCitiesArray.splice(5,1,"Deadest Marshes")
    novoElemento.textContent = JSON.stringify(lotrCitiesArray)
    document.body.appendChild(novoElemento)

    return lotrCitiesArray
}

kata11()

function kata12() {
   let novoElemento = document.createElement('div')
   let novo = bestThing.slice(0,14)
   novoElemento.textContent = JSON.stringify(novo)
   document.body.appendChild(novoElemento)

   return bestThing

}

kata12()

function kata13() {
    let novoElemento = document.createElement('div')
    let novo = bestThing.slice(-12)
    novoElemento.textContent = JSON.stringify(novo)
    document.body.appendChild(novoElemento)

    return bestThing
}

kata13()

function kata14() {
    
    let novoElemento = document.createElement('div')
    let novo = bestThing.slice(22,38)
    novoElemento.textContent = JSON.stringify(novo)
    document.body.appendChild(novoElemento)

    return bestThing
}

kata14()

function kata15() {
 

    let novoElemento = document.createElement('div')
    let euDenovo = bestThing.substring(bestThing.length-12)
    novoElemento.textContent = JSON.stringify(euDenovo)
    document.body.appendChild(novoElemento)

    return bestThing

}

kata15()

function kata16() {
    // Escreva uma função que usa 'slice' para **retornar** uma string com os caracteres entre as posições 23 e 38 de 'bestThing'
    let novoElemento = document.createElement('div')
    let novoDenovoNe = bestThing.substring(22,38)
    novoElemento.textContent = JSON.stringify(novoDenovoNe)
    document.body.appendChild(novoElemento)

    return bestThing

}

kata16()

function kata17() {
    let novoElemento = document.createElement('div')
    let euDinovo = lotrCitiesArray.pop()
    novoElemento.textContent = JSON.stringify(lotrCitiesArray)
    document.body.appendChild(novoElemento)

    return lotrCitiesArray
}

kata17()

function kata18() {
    let novoElemento = document.createElement('div')
    let euDinovo = lotrCitiesArray.push("Harad")
    novoElemento.textContent = JSON.stringify(lotrCitiesArray)
    document.body.appendChild(novoElemento)

    return lotrCitiesArray
}

kata18()

function kata19() {
    let novoElemento = document.createElement('div')
    let euDinovo = lotrCitiesArray.shift()
    novoElemento.textContent = JSON.stringify(lotrCitiesArray)
    document.body.appendChild(novoElemento)

    return lotrCitiesArray
}

kata19()

function kata20() {
    let novoElemento = document.createElement('div')
    let euDinovo = lotrCitiesArray.unshift("Mordor")
    novoElemento.textContent = JSON.stringify(lotrCitiesArray)
    document.body.appendChild(novoElemento)

    return lotrCitiesArray
}

kata20()

function kataBonus1() {
    // //Escreva uma função que encontre e **retorne** o índice 'only' dentro do array 'bestThing'
    // const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
    let novoElemento = document.createElement('div')
    let novinha = bestThing.split(' ').indexOf('only')
    novoElemento.textContent = JSON.stringify(novinha)
    document.body.appendChild(novoElemento)

    return bestThing

}

kataBonus1()

function kataBonus2() {
    // //Escreva uma função que encontre e **retorne** o índice 'only' dentro do array 'bestThing'
    // const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
    let novoElemento = document.createElement('div')
    let novinhaDenovo = bestThing.split(' ').indexOf('bit')
    novoElemento.textContent = JSON.stringify(novinhaDenovo)
    document.body.appendChild(novoElemento)

    return bestThing

}

kataBonus2()

function kataBonus3() {
    // Escreva uma função que encontre e **retorne** um array de todas as cidades de 'gotCitiesCSV' que tiverem vogais duplicadas ('aa', 'ee', etc.)
// const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
//Mordor,Gondor,Beleriand,Mirkwood,Dead Marshes,Harad
    let novoElemento = document.createElement('div')
    novoElemento.textContent = JSON.stringify()
    document.body.appendChild(novoElemento)

    return bestThing

}

kataBonus3()

