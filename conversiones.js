function empty(){
    document.getElementById("numero").value = ''
    document.getElementById("resultado").value = ''
}
function calculate(){

    var transformando = parseFloat(document.getElementById("numero").value)
    var transformado

    var deSegundos = document.getElementById("deSegundos")
    var deMinutos = document.getElementById("deMinutos")
    var deHoras = document.getElementById("deHoras")
    var deDias = document.getElementById("deDias")
    var deSemanas = document.getElementById("deSemanas")
    var deMeses = document.getElementById("deMeses")
    var deAnos = document.getElementById("deAnos")

    var aSegundos = document.getElementById("aSegundos")
    var aMinutos = document.getElementById("aMinutos")
    var aHoras = document.getElementById("aHoras")
    var aDias = document.getElementById("aDias")
    var aSemanas = document.getElementById("aSemanas")
    var aMeses = document.getElementById("aMeses")
    var aAnos = document.getElementById("aAnos")
    // ------------------------deSegundos-------------------------- //
    if(deSegundos.checked == true && aSegundos.checked == true ){
        transformado = transformando
    }else if(deSegundos.checked == true && aMinutos.checked == true){
        transformado = transformando/60
    }else if(deSegundos.checked == true && aHoras.checked == true){
        transformado = transformando/3600
    }else if(deSegundos.checked == true && aDias.checked == true){
        transformado = transformando /86400
    }else if(deSegundos.checked == true && aSemanas.checked == true){
        transformado = transformando /604800
    }else if(deSegundos.checked == true && aMeses.checked == true){
            transformado = transformando /2592000
    }else if(deSegundos.checked == true && aAnos.checked == true){
        transformado = transformando/31104000
    }
    // ------------------------deMinutos-------------------------- //
    else if(deMinutos.checked == true && aSegundos.checked == true ){
        transformado = transformando*60
    }else if(deMinutos.checked == true && aMinutos.checked == true){
        transformado = transformando
    }else if(deMinutos.checked == true && aHoras.checked == true){
        transformado = transformando/60
    }else if(deMinutos.checked == true && aDias.checked == true){
        transformado = transformando /1440
    }else if(deMinutos.checked == true && aSemanas.checked == true){
        transformado = transformando /10080
    }else if(deMinutos.checked == true && aMeses.checked == true){
            transformado = transformando /43200
    }else if(deMinutos.checked == true && aAnos.checked == true){
        transformado = transformando/518400
    }
    // ------------------------deHoras-------------------------- //
    else if(deHoras.checked == true && aSegundos.checked == true ){
        transformado = transformando*3600
    }else if(deHoras.checked == true && aMinutos.checked == true){
        transformado = transformando*60
    }else if(deHoras.checked == true && aHoras.checked == true){
        transformado = transformando
    }else if(deHoras.checked == true && aDias.checked == true){
        transformado = transformando /24
    }else if(deHoras.checked == true && aSemanas.checked == true){
        transformado = transformando /168
    }else if(deHoras.checked == true && aMeses.checked == true){
            transformado = transformando /720
    }else if(deHoras.checked == true && aAnos.checked == true){
        transformado = transformando/8640
    }
    // ------------------------deDias-------------------------- //
    else if(deDias.checked == true && aSegundos.checked == true ){
        transformado = transformando*86400
    }else if(deDias.checked == true && aMinutos.checked == true){
        transformado = transformando*1440
    }else if(deDias.checked == true && aHoras.checked == true){
        transformado = transformando*24
    }else if(deDias.checked == true && aDias.checked == true){
        transformado = transformando
    }else if(deDias.checked == true && aSemanas.checked == true){
        transformado = transformando /7
    }else if(deDias.checked == true && aMeses.checked == true){
            transformado = transformando /30
    }else if(deDias.checked == true && aAnos.checked == true){
        transformado = transformando/365
    }
    // ------------------------deMeses-------------------------- //
    else if(deMeses.checked == true && aSegundos.checked == true ){
        transformado = transformando*2592000
    }else if(deMeses.checked == true && aMinutos.checked == true){
        transformado = transformando*43200
    }else if(deMeses.checked == true && aHoras.checked == true){
        transformado = transformando*720
    }else if(deMeses.checked == true && aDias.checked == true){
        transformado = transformando*30
    }else if(deMeses.checked == true && aSemanas.checked == true){
        transformado = transformando*4
    }else if(deMeses.checked == true && aMeses.checked == true){
            transformado = transformando
    }else if(deMeses.checked == true && aAnos.checked == true){
        transformado = transformando*12
    }
    // ------------------------deAnos-------------------------- //
    else if(deAnos.checked == true && aSegundos.checked == true ){
        transformado = transformando*31104000
    }else if(deAnos.checked == true && aMinutos.checked == true){
        transformado = transformando*518400
    }else if(deAnos.checked == true && aHoras.checked == true){
        transformado = transformando*8640
    }else if(deAnos.checked == true && aDias.checked == true){
        transformado = transformando*365
    }else if(deAnos.checked == true && aSemanas.checked == true){
        transformado = transformando*52
    }else if(deAnos.checked == true && aMeses.checked == true){
            transformado = transformando*12
    }else if(deAnos.checked == true && aAnos.checked == true){
        transformado = transformando
    }
    document.getElementById("resultado").value = transformado
}