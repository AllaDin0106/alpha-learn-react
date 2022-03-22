import Home from './Home';
import Wallet from './Wallet';
import Settings from './Settings';
import Compound from './Compound';
import { DarkMode } from '../core/context';

const Content = props => {

    let content;
    

    switch (props.content) {

        case 'home': content = <Home/>; break;
        case 'wallet': content = <Wallet/>; break;
        case 'compound': content = <Compound/>; break;
        case 'settings': content = <Settings/>; break;

        default: content = <Home/>;
    }

    return <div className={DarkMode.inverted ? 'inverted content' : 'content'}>{content}</div>;
}

export default Content;