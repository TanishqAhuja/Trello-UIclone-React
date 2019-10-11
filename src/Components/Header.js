import React from 'react';

class Header extends React.Component {

    state = {
        input: '',
    }

    addItemHandeler = (e) => {
        e.preventDefault();
        this.props.func(this.state.input);
    }

    setValue = (e) => {
        this.setState({
            input: e.target.value,
        })
    }

    render() {
        const styles = `card-header text-center text-white bg-${this.props.color}`;
        return (
            <>
                <div className={styles}>
                    <img alt='' src='https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png' />
                    <button className="btn float-right btn-outline-light mt-xs-3 py-3 px-2"
                        data-toggle="modal" data-target="#addModal">＋</button>
                </div>

                <div className="modal fade" id="addModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addModalLabel">Add New {this.props.item}</h5>
                                <span className="btn close" data-dismiss="modal">x</span>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.addItemHandeler}>
                                    <div className="input-group">
                                        <input type="text" onChange={this.setValue} className="form-control" id="recipient-name" placeholder="Name" autoFocus />
                                        <span className="input-group-btn">
                                            <button onClick={this.addItemHandeler} className="btn btn-info" type="submit" data-dismiss="modal">＋</button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;