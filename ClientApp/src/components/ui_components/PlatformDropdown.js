import React, { Component } from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown } from 'reactstrap';

class PlatformDropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Open: false,
            currValue: "Platform",
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
            <ButtonDropdown direction="right" isOpen={this.state.Open} toggle={this.toggle}>
                <DropdownToggle className="menu-button" caret color="primary">
                    {this.textValue()}
                </DropdownToggle>
                <DropdownMenu modifiers={{
                    setMaxHeight: {
                        enabled: true,
                        order: 890,
                        fn: (data) => {
                            return {
                                ...data,
                                styles: {
                                    ...data.styles,
                                    overflow: 'auto',
                                    maxHeight: '700px',
                                },
                            };
                        },
                    },
                }}>
                    <DropdownItem disabled>Computer</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Amazon Luna</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Battle.Net</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Bethesda Launcher</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Big Fish Games</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Browser</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Desura</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Discord</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>DOS</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>EA Access</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Epic Games Launcher</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>GamersGate</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>GameStop PC</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Games For Windows</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>GOG.com</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Green Man Gaming</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>HTC Vive</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Humble Bundle Store</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>IndieGala</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>itch.io</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Linux</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Mac</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Nuuvem</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Oculus Store</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Origin</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>PC</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>PC Downloads</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Rockstar Games Launcher</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Steam</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Prime Gaming</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Uplay</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Windows Store</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Windows Game Pass</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem disabled>Apple</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Apple II</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Apple Arcade</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>Apple Bandai Pippin</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>iOS</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>iPad</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>iPod</DropdownItem>
                    <DropdownItem style={{ fontWeight: 500, color: 'black' }} onClick={this.updateSelection}>iPhone</DropdownItem>
                    <DropdownItem divider />
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

export default PlatformDropdown;