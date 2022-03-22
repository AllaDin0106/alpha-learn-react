import { DarkMode } from '../core/context';
import { Header } from 'semantic-ui-react';

const Wallet = () => {

    return <div>
        <Header as='h1' {...DarkMode}>Wallet</Header>
    </div>;
}

export default Wallet;