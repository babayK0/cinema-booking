import { Header } from './components/Header';
import { Main } from './components/Main';

const App = () => {
    const root = document.getElementById('root');
    root.append(Header(), Main());
};

window.addEventListener('DOMContentLoaded', () => {
    console.debug('App started');
    App();
});
