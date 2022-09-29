var array = []
var fim = document.getElementsByTagName('input')[2]
fim.addEventListener('click', finalizar)
function adicionar(){
    let numbertxt = document.getElementById('number')
    let select = document.getElementsByTagName('select')[0]
    let number = Number(numbertxt.value)
    var teste = verificar(number)
    if(teste==1){
        array.push(number)
        var obj = document.createElement('option')
        obj.text=`Valor ${number} adicionado`
        select.appendChild(obj)
    }
}
function verificar(vel){
    if (array.indexOf(vel)==-1){
        if(vel>100){
            window.alert("Esse numero e maior que 100")
            return 0
        }
        if(vel<1){
            window.alert("Esse numero e menor que 1")
            return 0
        }
        else{
            return 1
        }
    }else if(array.indexOf(vel)!=-1){
        window.alert('Esse numero ja foi adicionado')
        return 0
    }
}
function finalizar(){
    let saida = document.getElementsByTagName('div')[1]
    saida.parentNode.removeChild(saida)
    if(array.length!=0){
        var ps = [document.createElement('p'), document.createElement('p'),
                  document.createElement('p'), document.createElement('p'),
                  document.createElement('p')]
        var div = document.getElementById('div_1')
        var div2=document.createElement('div')
        div.appendChild(div2)
        for (let i=0;i<5;i++){
            div2.appendChild(ps[i])
            ps[i].style.color="white"
            ps[i].style.fontFamily="Arial"
            ps[i].style.marginLeft='30px'
            ps[i].innerHTML=""
        }
        div.style.height="450px"
        ps[0].innerHTML=`Ao todo temos ${array.length} numeros`
        ps[1].innerHTML=`O maior valor informado foi o ${maior()}`
        ps[2].innerHTML=`O menor valor informado foi o ${menor()}`
        ps[3].innerHTML=`A soma entre todos os numeros e de ${soma()} `
        ps[4].innerHTML=`A media entre todos os numeros e de ${media()}`
    }else{
        window.alert("Adicione ao menos um valor")
    }
}
function soma(){
    let somador=0
    for(let i=0;i<array.length;i++){
        somador+=array[i]
    }
    return somador
}
function media(){
    let contador=0
    for(let i=0;i<array.length;i++){   
        contador+=1
    }
    let computador = soma()/contador
    return computador
}
function menor(){
    let menor = array[0]
    for(let i = 0;i<array.length;i++){
        if(menor>array[i]){ 
            menor = array[i]
        }
    }
    return menor
}

function maior(){
    let maior = array[0]
    for(let i = 0;i<array.length;i++){
        if(maior<array[i]){ 
            maior = array[i]
        }
    }
    return maior
}