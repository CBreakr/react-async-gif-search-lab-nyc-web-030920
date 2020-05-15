import React from "react";

import GifSearch from "./GifSearch";
import GifList from "./GifList";

export default class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    getGifs = (search) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({gifs: data.data});
        })
        .catch(err => console.err("err", err));
    }

    render(){
        return (
            <div>
                <GifSearch getGifs={this.getGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}