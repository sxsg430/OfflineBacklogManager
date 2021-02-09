import React, { Component } from 'react';
import { Alert, Input, ButtonGroup } from 'reactstrap';
import StatusDropdown from './ui_components/StatusDropdown';

export class AddNew extends Component {
    static displayName = AddNew.name;
    constructor(props) {
        super(props);
        this.updateStatus = this.updateStatus.bind(this);

        this.state = {
            currentStatus: 'Status'
        }

    }

    updateStatus = (value) => {
        let internalVal = value;
        this.setState({ currentStatus: internalVal });
    }

    render() {
        return (
            <main>
                <Alert color="primary">
                    Placeholder element.
                </Alert>
                <ButtonGroup>
                    <StatusDropdown updateState={this.updateStatus}/>
                </ButtonGroup>
            </main>
            )
    }
}