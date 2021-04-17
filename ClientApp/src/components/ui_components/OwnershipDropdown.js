import React, { Component } from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown } from 'reactstrap';

class OwnershipDropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Open: false,
            currValue: "Ownership",
        }
    }

    toggle = () => {
        this.setState({ Open: !this.state.Open })
    }

    updateSelection = (val) => {
        // Get Inner Text of the element provided and update local and parent state.
        this.setState({ currValue: val.currentTarget.innerText });
        this.props.updateState(val.currentTarget.innerText);
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
            <ButtonDropdown direction="down" isOpen={this.state.Open} toggle={this.toggle}>
                <DropdownToggle className="menu-button" caret color="primary">
                    {this.textValue()}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Owned</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Household</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Subscription</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Borrowed/Rented</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Formerly Owned</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Other</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

export default OwnershipDropdown;