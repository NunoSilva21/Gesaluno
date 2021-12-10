
function init(){
    getNavbar()
    getTipos()
}

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}

function getTipos(){
    const tipos = document.getElementById('tipo')
    fetch('http://localhost:3000/formdata')
    .then(res => res.json())
    .then(data => {
        for(let i=0; i<data.length; i++){
            const op = `<option value"${data[i].idtipo}">${data[i].designacao}</option>`
            tipos.innerHTML += op
        }
        
    })
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}

function getData(){
    preencherEspaço()
}


function preencherEspaço(){
    let nomeCompleto = document.getElementById('nome').value

    if (nomeCompleto == '') {
        alert ("Digita o seu nome...")
    }
        let morada = document.getElementById('morada_rua').value

        if (morada_rua == '') {
            alert ("Digita a sua rua..")
        }

            let morada_num = document.getElementById('morada_num').value

        if (morada_num == '') {
            alert ("Digita a morada_num..")
        }

            let dnasc = document.getElementById('dnasc').value

            if (dnasc == '') {
                alert ("Digita a sua dnasc..")
            }


            let telem = document.getElementById('telem').value

            if (telem == '') {
                alert ("Digita o seu telem..")
            }
            else{
                let i = 0
                for(i=0; i<telem.length; i++){
                    let c = telem.charAt(i)
                    console.log(c)
                    if(isNaN(c)){
                        console.log('número inválido')
                        break
                    }
                    
                }
            }
                if(isNaN(telemInt))
                    console.log ('não é numero')
                else
                    console.log('é um numero')
    
                
            let email = document.getElementById('email').value

            if (email == '') {
                alert ("Digita o seu email..")
            }

                let tipo = document.getElementById('tipo').value

                if (tipo == '') {
                    alert ("Digita o seu tipo..")
                }
                else
                    console.log(tipo)

                //criar objeto com os dados recolhidos no for.    
                let dadosutilizador = {
                    nomeutilizador : nome,
                    moradarua : morada_rua,
                    moradanumero : morada_num,
                    datanascimento : dnasc,
                    telemovel : telem,
                    email : email,
                    idtipo : tipo
                }

                //criar um JSON do objeto
                let jsonDados = JSON.stringify(dadosutilizador)
                

                //Preparar o pedido
                const options = {
                    method: 'POST',
                    header: {
                        'Content-type' : 'application/json'
                    },
                    body: jsonDados
                }

                fetch ('http://localhost:3000/utilizador', options)
                .then(res => res.json())
                .then(res => alert(res))
                .catch((err) => {
                    alert('Ocorreu um erro com o pedido...')
                })
}