import React, { Component } from 'react';
import { Input, Form, FormGroup, Label, Col, Row, Button } from 'reactstrap';

export class List extends Component {
    static displayName = List.name;
    constructor(props) {
        super(props);
        this.updateStatus = this.updateStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            title: '.',
            ownership: 'Owned',
            status: 'Unplayed',
            platform: 'Steam',
            achievement: 0,
            achievementmax: 0,
            progress: '.',
            playing: 'false',
            wishlist: 'false'
        }

    }


    updateTitle = (value) => {
        let internalVal = value.target.value;
        this.setState({ title: internalVal });
    }

    updateOwnership = (value) => {
        let internalVal = value.target.value;
        this.setState({ ownership: internalVal });
    }

    updateStatus = (value) => {
        let internalVal = value.target.value;
        this.setState({ status: internalVal });
    }

    updatePlatform = (value) => {
        let internalVal = value.target.value;
        this.setState({ platform: internalVal });
    }

    updateAchievement1 = (value) => {
        let internalVal = value.target.value;
        this.setState({ achievement: internalVal });
    }

    updateAchievement2 = (value) => {
        let internalVal = value.target.value;
        this.setState({ achievementmax: internalVal });
    }

    updateProgress = (value) => {
        let internalVal = value.target.value;
        this.setState({ progress: internalVal });
    }

    updatePlaying = (value) => {
        let internalVal = value.target.checked;
        this.setState({ playing: internalVal });
    }

    updateWishlist = (value) => {
        let internalVal = value.target.checked;
        this.setState({ wishlist: internalVal });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const formDat = new FormData();
        formDat.append('title', this.state.title);
        formDat.append('status', this.state.status);
        formDat.append('ownership', this.state.ownership);
        formDat.append('achievement', this.state.achievement);
        formDat.append('achievementmax', this.state.achievementmax);
        formDat.append('progress', this.state.progress);
        formDat.append('platform', this.state.platform);
        formDat.append('playing', this.state.playing);
        formDat.append('wishlist', this.state.wishlist);
        const SendOpts = {
            method: 'POST',
            body: formDat
        }
        const response = await fetch('AddGame', SendOpts);
        const data = await response.json();
    }

    render() {
        return (
            <main>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for="title">Game Title:</Label>
                        <Col sm={10}>
                            <Input type="text" name="title" id="title" placeholder="Game Title" onChange={this.updateTitle} required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="ownership">Ownership Status:</Label>
                        <Col sm={10}>
                            <Input type="select" name="ownership" id="ownership" defaultValue="Owned" onChange={this.updateOwnership}>
                                <option>Owned</option>
                                <option>Household</option>
                                <option>Subscription</option>
                                <option>Borrowed/Rented</option>
                                <option>Formerly Owned</option>
                                <option>Other</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="completestatus">Completion Status:</Label>
                        <Col sm={10}>
                            <Input type="select" name="completestatus" id="completestatus" defaultValue="Unplayed" onChange={this.updateStatus}>
                                <option>Unplayed</option>
                                <option>Incomplete</option>
                                <option>Beaten</option>
                                <option>Complete</option>
                                <option>Mastered</option>
                                <option>N/A</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="platform">Platform:</Label>
                        <Col sm={10}>
                            <Input type="select" name="platform" id="platform" defaultValue="Steam" onChange={this.updatePlatform}>
                                <optgroup label="Computers">
                                    <option>Amazon Luna</option>
                                    <option>Battle.Net</option>
                                    <option>Bethesda Launcher</option>
                                    <option>Big Fish Games</option>
                                    <option>Browser</option>
                                    <option>Desura</option>
                                    <option>Discord</option>
                                    <option>DOS</option>
                                    <option>EA Access</option>
                                    <option>Epic Games Launcher</option>
                                    <option>GamersGate</option>
                                    <option>GameStop PC</option>
                                    <option>Games For Windows</option>
                                    <option>GOG.com</option>
                                    <option>Green Man Gaming</option>
                                    <option>HTC Vive</option>
                                    <option>Humble Bundle Store</option>
                                    <option>IndieGala</option>
                                    <option>itch.io</option>
                                    <option>Linux</option>
                                    <option>Mac</option>
                                    <option>Nuuvem</option>
                                    <option>Oculus Store</option>
                                    <option>Origin</option>
                                    <option>PC</option>
                                    <option>PC Downloads</option>
                                    <option>Rockstar Games Launcher</option>
                                    <option>Steam</option>
                                    <option>Prime Gaming</option>
                                    <option>Uplay</option>
                                    <option>Windows Store</option>
                                    <option>Windows Game Pass</option>
                                </optgroup>
                                <optgroup label="Apple">
                                    <option>Apple II</option>
                                    <option>Apple Arcade</option>
                                    <option>Apple Bandai Pippin</option>
                                    <option>iOS</option>
                                    <option>iPad</option>
                                    <option>iPod</option>
                                    <option>iPhone</option>
                                </optgroup>
                            </Input>
                        </Col>
                    </FormGroup>
                    <Row>
                        <Col md={5}>
                            <FormGroup>
                                <Label for="achievement">Current Achievements:</Label>
                                <Input type="text" name="achievement" id="achievement" placeholder="0" onChange={this.updateAchievement1} />
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <Label for="achievementmax">Max Achievements:</Label>
                                <Input type="text" name="achievementmax" id="achievementmax" placeholder="0" onChange={this.updateAchievement2} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup row>
                        <Label for="progresscomment">Progress Comments:</Label>
                        <Col sm={10}>
                            <Input type="text" name="progresscomment" id="progresscomment" placeholder="Comments" onChange={this.updateProgress} required />
                        </Col>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" onChange={this.updatePlaying} />{' '}
                            Currently Playing
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" onChange={this.updateWishlist} />{' '}
                            Wishlisted
                        </Label>
                    </FormGroup>
                    <Button color="primary">Submit</Button>
                </Form>
            </main>
        )
    }
}