import { Image, Transition } from 'semantic-ui-react';

const Logo = props => {
    return <div className='logo'>
        <Transition animation={props.type} duration='600' visible={props.animation}>
            <Image centered src='../logo.svg' size='small' onClick={() => props.animate()} />
        </Transition>
    </div>
}

export default Logo;