import React from 'react';
import Board from './Board';
import Header from './Header';

var api = require('../api-functions');

class Boards extends React.Component {

    state = {
        boards: [],
        Uname: '',
    }

    componentDidMount() {
        document.body.style.background = "none";
        api.getMemberInfo()
            .then((res) => {
                this.setState({
                    boards: res["idBoards"],
                    Uname: res.fullName,
                });
            });
    }

    deleteBoard = (id) => {
        api.deleteBoard(id)
            .then(() => {
                var newBoards = this.state.boards.filter((elem) => (elem !== id))
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
        api.addBoard(boardName)
            .then((res) => {
                this.setState({
                    boards: [...this.state.boards, res["id"]],
                });
            })
    }

    render() {
        return (
            <>
                <Header func={this.addBoard} item='Board' toDisplay={this.state.Uname} color='success'></Header>
                <div className="row mt-4 mx-4 text-center">
                    {this.displayBoards()}
                </div>
            </>
        );
    }
};

export default Boards;
