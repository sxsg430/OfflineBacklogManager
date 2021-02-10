import React, { Component } from 'react';
import { Alert, Input, ButtonGroup } from 'reactstrap';
import StatusDropdown from './ui_components/StatusDropdown';
import GameTitle from './ui_components/GameTitle';
import OwnershipDropdown from './ui_components/OwnershipDropdown';
import Achievement from './ui_components/Achievement';
import Progress from './ui_components/Progress'

export class AddNew extends Component {
    static displayName = AddNew.name;
    constructor(props) {
        super(props);
        this.updateStatus = this.updateStatus.bind(this);

        this.state = {
            currentStatus: 'Status',
            currentTitle: '',
            currentOwnership: 'Ownership',
            currentAchievement: 0,
            currentAchievementMax: 0,
            currentProgress: ''
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

    updateOwnership = (value) => {
        let internalVal = value;
        this.setState({ currentOwnership: internalVal });
    }

    updateAchievement1 = (value) => {
        let internalVal = value;
        this.setState({ currentAchievement: internalVal });
    }

    updateAchievement2 = (value) => {
        let internalVal = value;
        this.setState({ currentAchievementMax: internalVal });
    }

    updateProgress = (value) => {
        let internalVal = value;
        this.setState({ currentProgress: internalVal });
    }

    render() {
        return (
            <main>
                <GameTitle updateState={this.updateTitle} />
                <OwnershipDropdown updateState={this.updateOwnership} />
                <StatusDropdown updateState={this.updateStatus} />
                <Achievement updateState={this.updateAchievement1} updateState2={this.updateAchievement2} />
                <Progress updateState={this.updateProgress} />
            </main>
            )
    }
}