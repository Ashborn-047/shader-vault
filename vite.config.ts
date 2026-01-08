import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    base: '/shader-vault/',
    plugins: [react()],
    resolve: {
        alias: {
            'react': path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                shader1: path.resolve(__dirname, 'shaders/Shader 1/card.html'),
                shader2: path.resolve(__dirname, 'shaders/Shader 2/card.html'),
                shader3: path.resolve(__dirname, 'shaders/Shader 3/card.html'),
                shader4: path.resolve(__dirname, 'shaders/Shader 4/card.html'),
                shader5: path.resolve(__dirname, 'shaders/Shader 5/card.html'),
                shader6: path.resolve(__dirname, 'shaders/Shader 6/card.html'),
                shader7: path.resolve(__dirname, 'shaders/Shader 7/card.html'),
                shader8: path.resolve(__dirname, 'shaders/Shader 8/card.html'),
                shader9: path.resolve(__dirname, 'shaders/Shader 9/card.html'),
                shader10: path.resolve(__dirname, 'shaders/Shader 10/card.html'),
                shader11: path.resolve(__dirname, 'shaders/Shader 11/card.html'),
            }
        }
    }
})
