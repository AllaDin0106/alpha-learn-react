import { useState } from "react";
import { Form, Icon, Label, Popup, Input, Container, Button, Progress, Message } from "semantic-ui-react";

const Password = props => {

    const [strength, setStrength] = useState({});
    const [valid, setValid] = useState(false);
    const [password, setPassword] = useState();
    const [confirm, setConfirm] = useState();

    let wait;

    const medium = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
    const strong = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

    const Strength = (_, { value }) => {
        clearTimeout(wait);

        wait = setTimeout(() => {
            if (value.length === 0) setStrength({});
            else if (strong.test(value)) setStrength({ label: 'Strong', color: 'green', length: 4 });
            else if (medium.test(value)) setStrength({ label: 'Medium', color: 'yellow', length: 2.5 });
            else setStrength({ label: 'Weak', color: 'red', length: 1 });
        }, 250);

        setPassword(value);
        setValid(value.length >= 8 && value === confirm);
    }

    const Confirm = (_, { value }) => {
        setConfirm(value);
        setValid(value.length >= 8 && password === value);
    }

    const Next = () => {
        // TODO: Encrypt
        localStorage['password'] = password;
        props.setState(2);
    }

    return <>
        <Form>
            <Form.Field required>
                <label>Enter new password</label>
                <Input type='password' fluid required onChange={Strength} {...strength.label ? { ...{ labelPosition: 'right' } } : null} >
                    <input />
                    {strength.label ? <Label basic className='passwordStrength'>
                        <Popup
                            trigger={<Icon color={strength.color} name='key' />}
                            content={
                                <div>
                                    Password Strength: {strength.label}
                                    <Progress className='flippedMargin' size='tiny' percent={(strength.length * 100 / 4)} indicating />
                                </div>} />
                    </Label> : null}
                </Input>
            </Form.Field>
            <Form.Input label='Confirm password' type='password' required onChange={Confirm} />
        </Form>
        <br />
        <Container fluid>
            <Button disabled={!valid} color='teal' floated='right' onClick={() => Next()}>
                Next
                <Icon name='right arrow' />
            </Button>
        </Container>


        <Message
            info className='topMargin'
            content='Your password is encrypted using {some algorithm} and is locally saved on your machine.'
        /></>
}

export default Password;