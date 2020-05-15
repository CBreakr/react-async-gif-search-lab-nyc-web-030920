import React from "react";

export default class GifSearch extends React.Component {

    state = {
        searchTerm: ""
    }

    enterSearch = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    runSearch = () => {
        this.props.getGifs(this.state.searchTerm);        
    }

    render(){
        return (
            <div>
                <input value={this.state.searchTerm} onChange={this.enterSearch} />
                <button onClick={this.runSearch}>Search</button>
            </div>
        )
    }
}