import React, { Component } from 'react';
import { Alert, Input, ButtonGroup } from 'reactstrap';
import StatusDropdown from './ui_components/StatusDropdown';
import GameTitle from './ui_components/GameTitle';
import OwnershipDropdown from './ui_components/OwnershipDropdown';
import Achievement from './ui_components/Achievement';
import Progress from './ui_components/Progress'
import PlatformDropdown from './ui_components/PlatformDropdown'

export class AddNew extends Component {
    static displayName = AddNew.name;
    constructor(props) {
        super(props);
        this.updateStatus = this.updateStatus.bind(this);

        this.state = {
            currentStatus: '',
            currentTitle: '',
            currentOwnership: '',
            currentAchievement: 0,
            currentAchievementMax: 0,
            currentProgress: '',
            currentPlatform: ''
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

    updatePlatform = (value) => {
        let internalVal = value;
        this.setState({ currentPlatform: internalVal });
    }

    render() {
        return (
            <main>
                <GameTitle updateState={this.updateTitle} />
                <OwnershipDropdown updateState={this.updateOwnership} />
                <StatusDropdown updateState={this.updateStatus} />
                <Achievement updateState={this.updateAchievement1} updateState2={this.updateAchievement2} />
                <Progress updateState={this.updateProgress} />
                <PlatformDropdown updateState={this.updatePlatform} />
                <br />
                <br />
                <form action="/addGame" method="post" encType="multipart/form-data">
                    <Input type="hidden" name="title" value={this.state.currentTitle} />
                    <Input type="hidden" name="status" value={this.state.currentStatus} />
                    <Input type="hidden" name="ownership" value={this.state.currentOwnership} />
                    <Input type="hidden" name="achievement" value={this.state.currentAchievement} />
                    <Input type="hidden" name="achievementmax" value={this.state.currentAchievementMax} />
                    <Input type="hidden" name="progress" value={this.state.currentProgress} />
                    <Input type="hidden" name="platform" value={this.state.currentPlatform} />
                    <Input type="submit" value="Submit" style={{ width: "100px" }} />
                </form>
            </main>
            )
    }
}