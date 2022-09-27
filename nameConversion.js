let button = document.getElementById("convert-btn")
let values =  document.getElementById("text")
button.addEventListener('click', () => {camelCase ();
pascalCase();
snakeCase();
screamingSnakeCase();
kebabCase();
screamingKebabCase();})



function camelCase (){
  console.log(values)
let allValues = values.value.split(" ").filter((el)=> {return el !== " "})
let newText = allValues[0].toLowerCase()
for (value of allValues.slice(1)){
 newText = newText + value[0].toUpperCase() + value.slice(1)
}
document.getElementById('camel-case').innerText = newText
}

function pascalCase (){
let allValues = values.value.split(" ").filter((el)=> {return el !== " "})
let newText = allValues[0].toUpperCase()
for (value of allValues.slice(1)){
    newText = newText + value[0].toUpperCase()+value.slice(1)
}
document.getElementById('pascal-case').innerText = newText
}

function snakeCase (){

    let allValues = values.value.split(" ").filter((el)=> {return el !== " "})
    let newText = allValues[0].toLowerCase()
    for (value of allValues.slice(1)){
        newText = newText + "_"+ value
    }
    document.getElementById('snake-case').innerText = newText
}


function screamingSnakeCase (){
    let allValues = values.value.split(" ").filter((el)=> {return el !== " "})
    let newText = allValues[0].toUpperCase()
    for (value of allValues.slice(1)){
        newText = newText + "_"+ value.toUpperCase()
    }
    document.getElementById('screaming-snake-case').innerText = newText
}

function kebabCase (){

    let allValues = values.value.split(" ").filter((el)=> {return el !== " "})
    let newText = allValues[0].toLowerCase()
    for (value of allValues.slice(1)){
        newText = newText + "-"+ value.toLowerCase()
    }
    document.getElementById('kebab-case').innerText = newText
}

function screamingKebabCase (){
    let allValues = values.value.split(" ").filter((el)=> {return el !== " "})
    let newText = allValues[0].toUpperCase()
    for (value of allValues.slice(1)){
        newText = newText + "-"+ value.toUpperCase()
    }
    document.getElementById('screaming-kebab-case').innerText = newText
}