import React from 'react';
import List from './List';
import Header from './Header';

var api = require('../api-functions');

class Lists extends React.Component {

    state = {
        boardId: this.props.match.params.id,
        lists: [],
    }

    componentDidMount() {
        api.getBoardBG(this.state.boardId)
            .then((res) => {
                if (res.backgroundImage) {
                    document.body.style.backgroundImage = `url(${res.backgroundImage})`;
                    document.body.style.backgroundSize = "100vw 100vh";
                    document.body.style.backgroundRepeat = "no-repeat";
                } else {
                    document.body.style.backgroundColor = "grey";
                }
            })
        api.getLists(this.state.boardId)
            .then((res) => {
                this.setState({
                    lists: [...res],
                });
            });
    }

    displayLists = () => {
        return this.state.lists.map((list) => (
            <List list={list} key={list.id} />
        ));
    }

    addList = (listName) => {
        api.addList(this.state.boardId, listName)
            .then((res) => {
                this.setState({
                    lists: [res, ...this.state.lists],
                });
            })
    }

    render() {
        return (
            <>
                <Header func={this.addList} item='List' color='info'></Header>
                <div className="d-flex flex-row overflow-auto mx-3 pb-4 mt-4 b-0">
                    {this.displayLists()}
                </div>
            </>
        );
    }
}

export default Lists;