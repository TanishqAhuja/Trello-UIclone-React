import React from 'react';
import { CoverageMap } from 'istanbul-lib-coverage';
// import { Link } from 'react-router-dom';
var api = require('../api-functions');


class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'loading',
            details: {},
            style: {
                "object-fit": "cover",
                "height": "200px",
            }
        }
    }

    componentDidMount() {
        api.getBoard(this.props.boardId)
            .then((res) => {
                this.setState({
                    status: 'done',
                    details: res,
                })
                console.log(this.state);
            });
    }

    render() {
        if (this.state.status === 'loading') {
            return (
                <div className="spinner-border text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            );
        }

        if (this.state.status === 'done') {
            return (
                <div className="card w-25 bg-dark text-white">
                    <img style={this.state.style}
                        src={this.state.details.prefs.backgroundImage}
                        className="card-img img-fluid" alt=""
                    />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{this.state.details.name}</h5>
                    </div>
                </div>
            );
        }
    }
}

export default Board;