import React, { Component } from 'react';
import { Input } from 'reactstrap';

class Progress extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Open: false,
            currValue: "",
        }
    }

    toggle = () => {
        this.setState({ Open: !this.state.Open })
    }

    updateSelection = (val) => {
        // Get Inner Text of the element provided and update local and parent state.
        this.setState({ currValue: val.target.value });
        this.props.updateState(val.target.value);
    }

    textValue = () => {
        // If the dropdown is loaded from the edit page, show the default value from the parent (the existing status from the game being edited). Otherwise, use the internal default value.
        if (this.props.edit === 1) {
            return this.props.currentValue;
        } else {
            return this.state.currValue;
        }
    }

    render() {
        return (
            <Input type="text" id="gametitle" name="title" value={this.state.currValue} onChange={this.updateSelection} placeholder="Progress Comments"></Input>
        )
    }
}

export default Progress;