import React, {Component} from 'react';
import Profile from "./Profile";
import nba from '../nba-client';
import ShotChart from "./ShotChart";
import DataViewContainer from "./DataViewContainer";


class Main extends Component {
    // state = {
    //     playerInfo: {}
    // }
    constructor () {
        super();
        this.state = {
            playerInfo: {},
            playerId: 201939,
        }
    }
    componentDidMount() {
        window.nba = nba;
        const playerId = nba.findPlayer('Stephen Curry').playerId;
        // console.log(playerId);
        nba.stats.playerInfo({PlayerID: playerId})
            .then (info => {
                // console.log(info)
                const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log(playerInfo);

                this.setState({
                    playerInfo: playerInfo
                });
            })
    }
    render() {
        return (
            <div className = 'main'>
                <Profile playerInfo = {this.state.playerInfo} />
                <DataViewContainer playerId = {this.state.playerId}/>
            </div>
        );
    }
}

export default Main;