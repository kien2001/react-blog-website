import ReactDOMClient from 'react-dom/client'
import App from './App'
import './index.css';

const disclaimer = document.getElementsByClassName("disclaimer")[0];
if(disclaimer){
    disclaimer.style.display = "none";
}
const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement);
root.render(<App/>);
