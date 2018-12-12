import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';

class ContributeForm extends Component {
    state = {
        value: '',
        loading: false
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        try {

        } catch (err) {

        }
        this.setState({loading: false});
    };

    render() {
        <Form onSubmit={this.onSubmit}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input
                    value={this.state.value}
                    onChange={event => this.setState({value: event.target.value})}
                    label="ether"
                    labelPosition="right"
                />
            </Form.Field>
            <Button primary>
                Contribute!
            </Button>
        </Form>
    }

}

export default ContributeForm;