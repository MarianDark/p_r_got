import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {


    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const login = (event)=>{
        event.preventDefault()

        const url = "node-vercel-9hwi.vercel.app/user/login" //Enlace a donde se hace la petición
        try {
            // Se hace peticion a la bbdd con los datos del login
            axios.post(url, {
                user, password
            })
            .then((response)=> sessionStorage.setItem("token", response.data.data.token))
                //Usamos la sesion del navegador para almacenar el token de forma temporal
                //La sesion del navegador se puede ver en inspecionar --> aplicación --> almacenamiento
        } catch (error) {
            setError(true)
            console.log(error);
        }
        
    }    

  return (
    <>
        <h2>Login</h2>
        <form onSubmit={login}>
            <input 
                type="text" 
                value={user} 
                onChange={(ev)=>{  
                    console.log("User",ev)
                    setUser(ev.target.value)}} 
                placeholder='Introduzca su correo electrónico' 
                required>
            </input>
            <input 
                type="text" 
                value={password} 
                onChange={(ev)=>{
                    console.log("Pass",ev)
                    setPassword(ev.target.value)}} 
                placeholder='Introduzca su contraseña' 
                required>
            </input>
            <button type='submit'>Login</button>    
            {error && <div className='errorDiv'>Ha ocurrido un error</div>}
        </form>
    </>
  )
}

export default LoginForm