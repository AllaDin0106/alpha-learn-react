import { useEffect, useState } from "react";
import { Segment, Message, Modal, Dimmer, Icon } from "semantic-ui-react";
import Button from "./Button";
import { Public, Private, Phrase as Generate } from "../../../core/mnemonic";

const Phrase = props => {

    const [valid, setValid] = useState(false);
    const [reveal, setReveal] = useState(false);
    const [mnemonic, setMnemonic] = useState('');
    const [open, setOpen] = useState(false);
    // const [address, setAddress] = useState('');

    useEffect(() => {
        (async () => {
            const m = await Generate();
            setMnemonic(m);
            // const a = await Private(m);
            // setAddress(a);
        })();
    }, []);

    return <>
        <div>
            <Dimmer.Dimmable as={Segment} textAlign='center' size='huge' className='invertedContentDimmer' dimmed={!reveal} blurring>
                <div className='seedphrase'>
                    {mnemonic.split(' ').map((i, k) =>
                        <span className='seedword'>{i}</span>
                    )}
                </div>
                <Dimmer active={!reveal} inverted onClick={() => { setReveal(true); setValid(true) }}>
                    Click to reveal your seed phrase
                </Dimmer>

            </Dimmer.Dimmable>
        </div>

        <br />

        <Button valid={valid} setState={props.setState} />

        <Message className='topMargin' info>
            <span>Save your secret seed phase and never share it. </span>
            <br />
            <Modal trigger={<span className='clickable'>What is this?</span>}>
                <Modal.Header>Seed Phrase</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <p>A seed phrase is a collection of words that can be used to access and restore your cryptocurrency wallet from anywhere.</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </Message>
    </>
}

export default Phrase;
