import React from 'react';
import Board from './Board';
import Header from './Header';

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
                });
            });
    }

    deleteBoard = (id) => {
        api.deleteBoard(id)
            .then(() => {
                var newBoards = this.state.boards.filter((elem) => (elem != id))
                this.setState({
                    boards: [...newBoards],
                })
            })
    }

    displayBoards = () => {
        return this.state.boards.map((board) => (
            <Board boardId={board} deleteFunc={this.deleteBoard} key={board} />
        ));
    }

    addBoard = (boardName) => {
        console.log(this.state)
        api.addBoard(boardName)
            .then((res) => {
                this.setState({
                    boards: [...this.state.boards, res["id"]],
                }, console.log(this.state));
            })
    }

    render() {
        return (
            <>
                <Header func={this.addBoard} item='Board'></Header>
                <div className="row mt-4 mx-4 text-center">
                    {this.displayBoards()}
                </div>
            </>
        );
    }
};

export default Boards;
