import React, { Component } from 'react';
import { Alert, Input, ButtonGroup } from 'reactstrap';
import StatusDropdown from './ui_components/StatusDropdown';
import GameTitle from './ui_components/GameTitle';

export class AddNew extends Component {
    static displayName = AddNew.name;
    constructor(props) {
        super(props);
        this.updateStatus = this.updateStatus.bind(this);

        this.state = {
            currentStatus: 'Status',
            currentTitle: ''
        }

    }

    updateStatus = (value) => {
        let internalVal = value;
        this.setState({ currentStatus: internalVal });
    }

    updateTitle = (value) => {
        let internalVal = value;
        this.setState({ currentTitle: internalVal });
    }

    render() {
        return (
            <main>
                <Alert color="primary">
                    Placeholder element.
                </Alert>
                <ButtonGroup>
                    <StatusDropdown updateState={this.updateStatus} />
                    <GameTitle updateState={this.updateTitle} />
                </ButtonGroup>
            </main>
            )
    }
}