import { DarkMode } from '../core/context';
import { Header } from 'semantic-ui-react';

const Home = () => {

    return (
        <div>
            <Header as='h1' {...DarkMode}>Home</Header>
        </div>
    )
}

export default Home;