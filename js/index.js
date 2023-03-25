let numeroAleatorio;
let numerosPalpite = []
let numerosTentativas = 0
let tentativasMaximas = 9

const iniciarJogo = () =>{
    numeroAleatorio = Math.floor(Math.random() * 100 + 1)
}

const resetarJogo = () =>{
    window.location.reload()
}

const comparaNumero = () =>{
    const resultado = document.querySelector('.resultado-app')
    const numeroJogador = Number(document.getElementById('entrada-numero').value)
    numerosPalpite.push(` ${numeroJogador}`)
    imprimePalpites()

    if(numeroJogador >= 1 && numeroJogador <= 100){
        if(numerosTentativas < tentativasMaximas){
            if(numeroJogador == numeroAleatorio){
                resultado.innerHTML = `<h3>Parabéns, número correto!!</h3>`
                numerosTentativas++ 
                imprimeTentativas()
                document.getElementById('entrada-numero').setAttribute('Readonly', 'Readonly')
            }else if(numeroJogador > numeroAleatorio){
                resultado.innerHTML = `<h3>Seu número é muito alto!</h3>`        
                document.getElementById('entrada-numero').value = ''
                numerosTentativas++
                imprimeTentativas()
            }else{        
                resultado.innerHTML = `<h3>Seu número é muito baixo!</h3>`    
                document.getElementById('entrada-numero').value = '' 
                numerosTentativas++
                imprimeTentativas()
            }
        }else{                
            resultado.innerHTML = `<h3>Você perdeu, número certo: ${numeroAleatorio}</h3>`   
            numerosTentativas++
            imprimeTentativas()
            document.getElementById('entrada-numero').setAttribute('Readonly', 'Readonly')
        }
    }else{
        resultado.innerHTML = `<h3>Insira somente números de 1 até 100!</h3>`
    }
}

const imprimeTentativas = () =>{
    document.getElementById('numero-tentativas').innerHTML = `${numerosTentativas}`
}

const imprimePalpites = ()  =>{
    document.getElementById('palpites-tentativas').innerHTML = `${numerosPalpite} `
}