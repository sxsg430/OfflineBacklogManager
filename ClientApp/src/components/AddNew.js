import React, { Component } from 'react';
import { Alert } from 'reactstrap';

export class AddNew extends Component {
    static displayName = AddNew.name;
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return (
            <main>
                <Alert color="primary">
                    Placeholder element.
                </Alert>
            </main>
            )
    }
}