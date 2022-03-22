import '../../styles/login.min.css';
import Splash from './Splash';
import Logo from './Logo';
import Create from './Create';
import Import from './Import';
import { useState } from 'react';

const Login = () => {

    let content;

    const [state, setState] = useState('splash');
    const [animation, setAnimation] = useState(true);
    const [type, setType] = useState('jiggle');
    const animate = (type = 'jiggle') => {
        setAnimation(!animation);
        setType(type);
    }

    const stageProps = { setState: setState, animate: animate }
    const center = state === 'splash' ? 'credentials center' : 'credentials top';

    switch (state) {
        case 'splash': content = <Splash {...stageProps}/>; break;
        case 'create': content = <Create {...stageProps} />; break;
        case 'import': content = <Import {...stageProps} />; break;

        default: content = <Splash {...stageProps} className='centered'/>; break;
    }

    return <div className='login container'>

        <div className={center}>{content}</div>
        <Logo animate={animate} type={type} animation={animation} />
    </div>;
}

export default Login;