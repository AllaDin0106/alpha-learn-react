import { useState, useContext } from 'react';
import { Menu, Header, Table, Radio } from 'semantic-ui-react';
import Data from '../data/Settings.json';
import { Context, DarkMode } from '../core/context';

const Settings = () => {

    const [group, setGroup] = useState('account');

    let { darkMode, setDarkMode } = useContext(Context);

    function toggleDarkMode() {
        localStorage['dark-mode-enabled'] = !darkMode;
        setDarkMode(!darkMode);
    }

    return <div>
        <Header as='h1' {...DarkMode}>Settings</Header>

        <Menu pointing secondary {...DarkMode}>
            {Data.groups.map((item, key) => {
                return <Menu.Item name={item} key={key} active={group === item} onClick={() => setGroup(item)} />;
            })}
        </Menu>

        <Table unstackable {...DarkMode}>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>Dark Mode</Table.Cell>
                    <Table.Cell textAlign='right'>
                        <Radio toggle checked={darkMode} onClick={() => toggleDarkMode()}/>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>

    </div>;
}

export default Settings;