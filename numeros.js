function primo(x){
    if(x <= 0){
        return false
    }else{
        for (var i = 2; i < x; i++){
            if(x % i == 0 ){
                return false
            }
        }
    }
    return true

}

function ejecutar(){
    var num = [0,0,0,0]
    var texto = ""
    var cont = [0,0]
    var cont1 = [0,0,0]

    num = [parseInt(document.getElementById("numero1").value), parseInt(document.getElementById("numero2").value),
        parseInt(document.getElementById("numero3").value), parseInt(document.getElementById("numero4").value)]
        for (var i = 0; i < num.length; i++){
            for(var j = 0; j < num.length; j++){
                if(j == i){
                    continue
                }else{
                    if(num[j] == num[i]){
                        document.getElementById("resultado").value = "Debe ingresar cuatro numeros diferentes!"
                        return

                    }
                }
            }

        }
        for(var i = 0; i < num.length; i++){
            if (num[i]%2==0){
                cont[0]++
            }
            else{
                cont[1]++
            }
        }
    texto = texto + "Numeros pares (y multiplos de dos): " + cont[0]+"\n"
    texto = texto + "Numeros impares: " + cont[1]+"\n"

    cont = [0,0]
    // var band = false
    for(var i = 0; i < num.length; i++){
        //band = false
        if(primo(num[i]) == false){
            cont[1]++
        }else{
            cont[0]++
        }
        // for(var j = 2; j < num[i]; j++){
        //     if (num[i] <= 0){
        //         cont[1]++
        //         band = true
        //         break
        //     }
        //     else if (num[i]%j==0){
        //         cont[1]++
        //         band = true
        //         break
        //     }
        // }
        // if(band == false){
        //     cont[0]++
        // }

    }

    texto = texto + "Numeros primos: "+cont[0]+"\n"
    texto = texto + "Numeros compuestos (no primos): "+cont[1]+"\n"

    for(var i = 0; i < num.length; i++){
        if(num[i] > 0){
            cont1[0]++
        }else if(num[i]<0){
            cont1[1]++
        }else{
            cont1[2]++
        }
    }

    texto = texto + "Numeros positivos:"+cont1[0]+"\n"
    texto = texto + "Numeros negativos:"+cont1[1]+"\n"
    texto = texto + "Numeros neutros:"+cont1[2]+"\n"
    document.getElementById("resultado").value = texto
}



