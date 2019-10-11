import React from 'react';
import { Link } from 'react-router-dom';
var api = require('../api-functions');


class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            details: null,
            style: {
                "objectFit": "cover",
                "height": "200px",
                "background": "grey",
            },
        }
    }

    componentDidMount() {
        api.getBoard(this.props.boardId)
            .then((res) => {
                this.setState({
                    details: res,
                })
            });
    }

    BoardUrl = `/Boards/${this.props.boardId}`;
    // OpenBoard = (e) => {
    //     if (e.target !== ('div' | 'img'))
    //         return;
    //     window.location = this.BoardUrl;
    // }

    deleteBoard = (e) => {
        if (e.target.tagName.toLowerCase() !== ('div')) {
            return;
        }
        this.props.deleteFunc(e.target.id);
    }

    render() {
        return (<>
            {this.state.details ?
                (
                    <Link to={this.BoardUrl} className="card-body b-0 col-md-4 text-warning">
                        {
                            this.state.details.prefs.backgroundImage ?
                                (
                                    <img style={this.state.style}
                                        src={this.state.details.prefs.backgroundImage}
                                        className="card-img rounded-lg shadow" alt=""
                                        id={this.props.boardId}
                                    />
                                )
                                : (
                                    <div style={this.state.style}
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
                    </Link>)
                : (<></>)
            }
        </>);
    }
}

export default Board;