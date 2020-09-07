import '../css/index.css'
import React from 'react'
import { render } from 'react-dom' 
import App from './components/app'

render(<App />, document.getElementById('container'))


//text()

// if (module.hot) {
//     module.hot.accept('./text.js', function(){
//         console.log('he recargado en caliente')
//         text()
//     })
// }