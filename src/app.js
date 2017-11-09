import Layer from './components/layer/layer.js'
import './css/common.css'

const App = function() {
    const app = document.getElementById('app')
    const layer = new Layer()
    app.innerHTML = layer.tpl
}

new App()