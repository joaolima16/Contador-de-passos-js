function verifica(){
var inicio = document.getElementById("inicio-contagem");
var fim = document.getElementById("fim-contagem");
var passos = document.getElementById("quant-passos");
var res = document.querySelector("div#res")

    if(inicio.value.length==0 || fim.value.length ==0 || passos.value.length ==0){
        console.log("funcionou")
        window.alert("Dados incorretos Tente novamente")
    }
    else{
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passos.value);
    if(i<f){  
            for(var cont = i; cont<f; cont+= p){
            res.innerHTML += ` ${cont} \u{1F449}`
    }
    }
    else{
        for(var cont = i;cont>f;cont-= p){
            res.innerHTML += `${cont}\u{1F449}`
        }
        res.innerHTML = "Contagem finalizada"
    }
    
}
}
