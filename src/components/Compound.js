import { DarkMode } from '../core/context';
import { Header } from 'semantic-ui-react';

const Compound = () => {
    return (
        <div>
            <Header as='h1' {...DarkMode}>Compound</Header>
        </div>
    )
}

export default Compound;