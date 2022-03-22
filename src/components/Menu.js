import { useState } from 'react';
import { Menu, Image, Icon } from 'semantic-ui-react';
import { DarkMode } from '../core/context';
import Data from '../data/Menu.json';

const AlphaMenu = ({ setContent }) => {

    const items = Data.items;

    const [state, setState] = useState('home');
    // const inverted = { inverted: useContext(Context).darkMode };

    const set = content => {
        setContent(content);
        setState(content);
    }

    return (
        <Menu vertical className='main-menu' {...DarkMode}>

            {items.map((item,key) => {
                return <Menu.Item key={key}>
                    <Menu.Header>{item.header}</Menu.Header>
                    <Menu.Menu>
                        {item.items.map((i,k) => {
                            return <Menu.Item key={k} active={state === i.internal} onClick={() => set(i.internal)}>
                                <span>{i.icon ? <Icon name={i.icon} /> : <Image src={i.img} />}</span>
                                <span>{i.name}</span>
                            </Menu.Item>
                        })}
                    </Menu.Menu>
                </Menu.Item>
            })}

            <Menu.Item className='bottom'>
                <Menu.Menu>
                        <Menu.Item active={state === 'settings'} onClick={() => set('settings')}>
                            <span><Icon name='setting' /></span>
                            <span>Settings</span>
                        </Menu.Item>
                </Menu.Menu>
            </Menu.Item>

        </Menu>
    )

}

export default AlphaMenu;