import React, { Component } from "react";
import api from "../../services/api";

import { useParams } from "react-router-dom";

import "./styles.css";

export default class WorldInfo extends Component {
  state = {
    worldInfo: {},
    playersOnline: [],
  };

  componentDidMount() {
    this.loadWorld();
  }

  loadWorld = async () => {
    const { match: { params } } = this.props;
    const response = await api.get("/v2/world/" + params.name + ".json");
    this.setState({
      worldInfo: response.data.world.world_information,
      playersOnline: response.data.world.players_online
    });
    console.log(response)
  };

  render() {
    const worldInfo = this.state.worldInfo;
    return (
      <div className="world-info">
          <article>
            <strong>
              {worldInfo.name} ({worldInfo.pvp_type})
            </strong>
            <p>
              {worldInfo.world_quest_titles}
            </p>
          </article>
      </div>
    );
  }
}
