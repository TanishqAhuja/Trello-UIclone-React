import React from 'react';

const Checklist = (props) => {

    const displayCheckItems = () => {
        return props.details.checkItems.map((checkitem) => {
            return (
                <div className="card card-body d-inline-block" key={checkitem.id}>
                    <span>{checkitem.name}</span>
                    {(checkitem.state === 'complete') ? (
                        <button className="btn float-right btn-outline-success px-1 py-0">✓</button>
                    ) : (
                            <button className="btn float-right btn-outline-danger px-1 py-0">✗</button>
                        )}
                </div>
            );
        })
    }

    return (
        <div className="card my-4">
            <div className="card card-body card-title bg-success m-0 text-center">
                <h5>{props.details.name}</h5>
            </div>
            {displayCheckItems()}
        </div>
    );
};

export default Checklist;