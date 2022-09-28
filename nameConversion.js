let button = document.getElementById("convert-btn")
let values =  document.getElementById("text")
let camelCaseEl = document.getElementById('camel-case')
let pascalCaseEl = document.getElementById('pascal-case')
let snakeCaseEl =   document.getElementById('snake-case')
let screamingSnakeCaseEl = document.getElementById('screaming-snake-case')
let kebabCaseEl =  document.getElementById('kebab-case')
let screamingKebabCaseEl = document.getElementById('screaming-kebab-case')
function camelCase (){
    console.log(values.value)
let allValues = values.value.split(" ").filter((el)=> {return el !== " "})
let newText = allValues[0].toLowerCase()
for (value of allValues.slice(1)){
 newText = newText + value[0].toUpperCase() + value.slice(1)
}
camelCaseEl.textContent = newText
}

function pascalCase (){
let allValues = values.value.split(" ").filter((el)=> {return el !== " "})
let newText = allValues[0].toUpperCase()
for (value of allValues.slice(1)){
    newText = newText + value[0].toUpperCase()+value.slice(1)
}
pascalCaseEl.textContent = newText
}

function snakeCase (){

    let allValues = values.value.split(" ").filter((el)=> {return el !== " "})
    let newText = allValues[0].toLowerCase()
    for (value of allValues.slice(1)){
        newText = newText + "_"+ value
    }
    snakeCaseEl.textContent = newText
}


function screamingSnakeCase (){
    screamingSnakeCaseEl.textContent = values.value.split(" ").filter((el)=> {return el !== " "}).join("_").toUpperCase()
}

function kebabCase (){

    kebabCaseEl.textContent = values.value.split(" ").filter((el)=> {return el !== " "}).join("-").toLowerCase()
}

function screamingKebabCase (){
    screamingKebabCaseEl.textContent = values.value.split(" ").filter((el)=> {return el !== " "}).join("-").toUpperCase()
}

button.addEventListener('click', () => {
    camelCase ();
    pascalCase();
    snakeCase();
    screamingSnakeCase();
    kebabCase();
    screamingKebabCase();})