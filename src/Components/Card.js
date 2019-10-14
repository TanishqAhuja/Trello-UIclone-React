import React from 'react';
import Checklists from './Checklists';

const Card = (props) => {


    const deleteCard = (e) => {
        e.stopPropagation();
        props.delFunc(props.details.id);
    }

    return (<>
        {
            (props.details.idChecklists.length !== 0) ? (<>
                <div className="d-inline-block w-100 shadow card card-body my-2" data-toggle="modal" data-target={`#modal${props.details.id}`}>
                    <button onClick={deleteCard} className="close">x</button>
                    <span className="text-success">☰ </span>
                    <span>{props.details.name}</span>
                </div>
                <div className="modal fade" id={`modal${props.details.id}`} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-info">
                                <h5 className="modal-title" id="addCardLabel">{props.details.name}</h5>
                                <span className="btn close" data-dismiss="modal">x</span>
                            </div>
                            <div className="modal-body">
                                <Checklists cardId={props.details.id} />
                            </div>
                        </div>
                    </div>
                </div></>
            ) : (
                    <div className="d-inline-block w-100 shadow card card-body my-3">
                        <button onClick={deleteCard} className="close ">x</button>
                        <span>{props.details.name}</span>
                    </div>
                )
        }
    </>);
};

export default Card;