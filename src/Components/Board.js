import React from 'react';
var api = require('../api-functions');


class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            details: null,
        }
    }

    style = {
        "objectFit": "cover",
        "height": "200px",
        "background": "grey",
    };

    componentDidMount() {
        api.getBoard(this.props.boardId)
            .then((res) => {
                this.setState({
                    details: res,
                })
            });
    }

    BoardUrl = `/Boards/${this.props.boardId}`;
    openBoard = (e) => {
        console.log(e.target.tagName.toLowerCase());
        if (e.target.tagName.toLowerCase() !== ('div' || 'h5')) {
            return;
        }
        window.location = this.BoardUrl;
    }

    deleteBoard = (e) => {
        if (e.target.tagName.toLowerCase() !== ('button')) {
            return;
        }
        this.props.deleteFunc(e.target.id);
    }

    render() {
        return (<>
            {this.state.details ?
                (
                    <div onClick={this.openBoard} className="card-body b-0 col-md-4 text-white">
                        {
                            this.state.details.prefs.backgroundImage ?
                                (
                                    <img style={this.style}
                                        src={this.state.details.prefs.backgroundImage}
                                        className="card-img rounded-lg shadow" alt=""
                                        id={this.props.boardId}
                                    />
                                )
                                : (
                                    <div style={this.style}
                                        className="card-img rounded-lg shadow"
                                        id={this.props.boardId}>
                                    </div>
                                )
                        }
                        <div className="card-img-overlay mr-3 mt-2">
                            <button onClick={this.deleteBoard}
                                id={this.props.boardId}
                                className="close card-title text-white">x</button>
                        </div>
                        <div className="card-img-overlay m-5">
                            <h5 className="card-title">{this.state.details.name}</h5>
                        </div>
                    </div>)
                : (<></>)
            }
        </>);
    }
}

export default Board;