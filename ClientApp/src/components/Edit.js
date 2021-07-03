import React, { Component } from 'react';
import { Input, Form, FormGroup, Label, Col, Row, Button } from 'reactstrap';

export class Edit extends Component {
    static displayName = Edit.name;
    constructor(props) {
        super(props);
        this.updateStatus = this.updateStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            finishedload: false,
            title: '.',
            ownership: 'Owned',
            status: 'Unplayed',
            platform: 'Steam',
            achievement: 0,
            achievementmax: 0,
            progress: '.',
            playing: 'false',
            wishlist: 'false',
            ID: 0
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
        let internalVal = value.target.value;
        this.setState({ playing: internalVal });
    }

    updateWishlist = (value) => {
        let internalVal = value.target.value;
        this.setState({ playing: internalVal });
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
        console.log(data);
    }

    componentDidMount() {
        let getUrl = window.location;
        let baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
        let search = window.location.search;
        let parameters = new URLSearchParams(search);
        let url = parameters.get('ID');
        fetch(baseUrl + "GetGameInfo?gameid=" + url)
            .then(res => res.json())
            .then(res => this.setState({
                ID: res.ID,
                title: res.title,
                ownership: res.ownership,
                status: res.status,
                platform: res.gamesystem,
                achievement: res.achievement,
                achievementmax: res.achievement_max,
                progress: res.progress,
                playing: res.playing,
                wishlist: res.wishlist,
            }))

        console.log(this.state.playing)
    }

    render() {
            return (
                <main>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label for="title">Game Title:</Label>
                            <Col sm={10}>
                                <Input type="text" name="title" id="title" placeholder="Game Title" value={this.state.title} onChange={this.updateTitle} required />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="ownership">Ownership Status:</Label>
                            <Col sm={10}>
                                <Input type="select" name="ownership" id="ownership" value={this.state.ownership} onChange={this.updateOwnership}>
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
                                <Input type="select" name="completestatus" id="completestatus" value={this.state.status} onChange={this.updateStatus}>
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
                                <Input type="select" name="platform" id="platform" value={this.state.platform} onChange={this.updatePlatform}>
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
                                    <Input type="text" name="achievement" id="achievement" placeholder="0" value={this.state.achievement} onChange={this.updateAchievement1} />
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="achievementmax">Max Achievements:</Label>
                                    <Input type="text" name="achievementmax" id="achievementmax" placeholder="0" value={this.state.achievementmax} onChange={this.updateAchievement2} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Label for="progresscomment">Progress Comments:</Label>
                            <Col sm={10}>
                                <Input type="text" name="progresscomment" id="progresscomment" value={this.state.progress} placeholder="Comments" onChange={this.updateProgress} required />
                            </Col>
                        </FormGroup>
                        <br />
                        <FormGroup row>
                            <Label for="playing">Playing:</Label>
                            <Col sm={1.5}>
                                <Input type="select" name="playing" id="playing" value={this.state.playing} onChange={this.updatePlaying}>
                                    <option>true</option>
                                    <option>false</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="wishlist">Wishlisted:</Label>
                            <Col sm={1.5}>
                                <Input type="select" name="wishlist" id="wishlist" value={this.state.wishlist} onChange={this.updateWishlist}>
                                    <option>true</option>
                                    <option>false</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <Button color="primary">Submit</Button>
                    </Form>
                </main>
            )
        }
}