import React, { Component } from 'react';
import { Input, InputGroup } from 'reactstrap';

class Achievement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Open: false,
            currValue: 0,
            currValue2: 0
        }
    }

    updateSelection = (val) => {
        // Get Inner Text of the element provided and update local and parent state.
        this.setState({ currValue: val.target.value });
        this.props.updateState(val.target.value);
    }

    updateSelection2 = (val) => {
        // Get Inner Text of the element provided and update local and parent state.
        this.setState({ currValue2: val.target.value });
        this.props.updateState2(val.target.value);
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
            <InputGroup style={{ width: "200px" }}>
                <Input type="text" id="gametitle" name="title" value={this.state.currValue} onChange={this.updateSelection}></Input>&nbsp;&nbsp;out of&nbsp;&nbsp;<Input type="text" id="gametitle" name="title" value={this.state.currValue2} onChange={this.updateSelection2}></Input>
            </InputGroup>
        )
    }
}

export default Achievement;