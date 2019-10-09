import React from 'react';
import Board from './Board';
var api = require('../api-functions');

class Boards extends React.Component {

    state = {
        boards: [],
    }

    componentDidMount() {
        api.getMemberInfo()
            .then((res) => {
                this.setState({
                    boards: res["idBoards"],
                })
            });
    }

    displayBoards = () => {
        return this.state.boards.map((board) => (
            <Board boardId={board} />
        ));
    }

    render() {
        return (
            <div className="card-deck">
                {this.displayBoards()}
            </div>
        );
    }
};

export default Boards;
