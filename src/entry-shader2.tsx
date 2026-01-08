import React from 'react'
import ReactDOM from 'react-dom/client'
import { DotScreenShader } from '../shaders/Shader 2/shader'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DotScreenShader />
    </React.StrictMode>
)
