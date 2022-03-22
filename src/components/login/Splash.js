import { Header, Button, Icon } from 'semantic-ui-react';

const ButtonWrapper = props => {
    return <div className='buttonWrapper'>
        <Button icon labelPosition='left' color='teal' onClick={() => props.setState(props.next)}>
            <Icon name={props.icon} />
            {props.main}
        </Button>
        <Header as='h5' color='grey'>{props.sub}</Header>
    </div>
}

const Splash = ({ setState }) => {
    return <div>
        <Header as='h1' className='alpha'>
            Alpha
            <Header.Subheader>All your decentralized financial needs under one banner.</Header.Subheader>
        </Header>
        <br />
        <ButtonWrapper
            setState={setState}
            next={'create'}
            icon={'user'}
            main={'Create Wallet'}
            sub={'Generate a new wallet and seed phrase.'} />
        <br />
        <ButtonWrapper
            setState={setState}
            next={'import'}
            icon={'key'}
            main={'Import Wallet'}
            sub={'Restore an existing wallet.'} />
    </div>
}

export default Splash;