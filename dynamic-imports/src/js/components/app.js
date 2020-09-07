import React, { useState } from 'react'
import data from './data.json' 
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'
import '../../css/sass/sass.scss'

console.log(data)
function App() {
    const [loaderList, setLoaderList] = useState([])
    async function handleClick() {
        setLoaderList(data.loaders)
        const { alerta } = await import('./alert.js')
        alerta('omg este módulo ha cargado dinámicamente')
    }
    return (
        <div>
            <p className="post-css">esto es POSTCSS</p>
            <p className="sass">esto es SASS</p>
            Que linda aplicación hecha en React.js
            <p>
                <video src={video} width={360} controls poster={logo}></video>
                <img src={logo} alt="logo-platzi" width={40}/>
            </p>
            <ul>
                {
                loaderList.map(item => <Loader {...item} key={item.id}/>)
                }
            </ul>
            <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
        </div>
    )
}

export default App