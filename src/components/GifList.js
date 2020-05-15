import React from "react";

export default class GifList extends React.Component {
    render(){
        return (
            <ul>
                {this.props.gifs.map(gif => {
                    return (
                        <li key={gif.id}>
                            <img src={`https://media.giphy.com/media/${gif.slug}/giphy.gif`} />
                        </li>
                    )
                })}
            </ul>
        );
    }
}