import { Button as UIButton, Container, Icon } from "semantic-ui-react";

const Button = props => {

    return <Container fluid>
        <UIButton disabled={!props.valid} color='teal' floated='right' onClick={() => props.setState(3)}>
            Next
            <Icon name='right arrow' />
        </UIButton>
    </Container>
}

export default Button;