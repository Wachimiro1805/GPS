let campousuarioN = document.getElementById('nombreU')
let campousuario = document.getElementById('usuario')
let campopassword = document.getElementById('password')
let boton = document.getElementById('botonregistrar')
let body = document.getElementById('body')

async function postHTTP( )
    {
        let body = new FormData()
        body.append( 'Nusuario', campousuarioN.value ) 
        body.append( 'usuario', campousuario.value ) 
        body.append( 'password', campopassword.value )

        try{
            let respuesta = await fetch ( 'http://localhost:3000/registroLogin' , 
                { 
                    method: 'POST' ,
                    body: body
                }
            )
            if( respuesta.ok ) // HTTP OK
            {   
                let datosServidor = await respuesta.json()
                //console.log(datosServidor)
                return {
                    mensaje: datosServidor.msg,
                    error:datosServidor.error
                
                }
            }
            else {  // HTTP ERROR
                return {
                    mensaje: 'Error, verifique su conexión y vuelva a intentar',
                    error:true
                }
            }
        }
        catch(ERROR) { return {
            mensaje: ERROR.message,
            error:true
        }}
    }

    function alerta(msg){
        let divAlerta = document.createElement('div')
        let divContenido = document.createElement('div')
        let divHeader = document.createElement('div')
        let titulo = document.createElement('label')
        let mensaje = document.createElement('div')
        let x = document.createElement('div')
    
        titulo.innerText = "Aviso"
        titulo.classList.add( "labelTitulo" )
    
        mensaje.innerText = msg
        mensaje.classList.add( "labelMensaje" )
    
        x.innerText = "X"
        x.classList.add( "labelX" )
        x.onclick = () => {
            body.removeChild(divAlerta)
        }
    
    
        divHeader.classList.add( "divHeader" )
        divContenido.classList.add( "divContenido" )
        divAlerta.classList.add( "modalAlerta" )
    
        divHeader.appendChild(titulo)
        divHeader.appendChild(x)
        divContenido.appendChild(divHeader)
        divContenido.appendChild(mensaje)
        divAlerta.appendChild(divContenido)
    
        body.appendChild(divAlerta)
    }

    boton.onclick = async () => {
        let mensaje = await postHTTP()
        console.log('Respuesta')
        console.log(mensaje)
        if (mensaje.error) {
            alerta(mensaje.mensaje)
        }
        else{
            campousuarioN.value = ''
            campousuario.value = ''
            campopassword.value = ''
            alerta(mensaje.mensaje)
        }
    }