import { useState } from "react";
import { Header, Breadcrumb, Message } from "semantic-ui-react";
import Password from "./create/Password";
import Phrase from "./create/Phrase";
import Verify from "./create/Verify";

const Create = props => {

    const [state, setState] = useState(1);

    const sections = [
        { key: 'password', as: 'span', content: 'Password', active: state === 1 },
        { key: 'phrase', as: 'span', content: 'Seed Phrase', active: state === 2 },
        { key: 'verify', as: 'span', content: 'Verify', active: state === 3 },
    ]

    let stage;

    switch (state) {
        case 1: stage = <Password setState={setState} />; break;
        case 2: stage = <Phrase setState={setState} />; break;
        case 3: stage = <Verify setState={setState} />; break;

        default: <></>;
    }

    return <div>
        <Header as='h1' color='teal'>Create a new wallet</Header>

        <Breadcrumb icon='right angle' sections={sections} />
        <br />
        <br />
        {stage}
    </div>
}

export default Create;