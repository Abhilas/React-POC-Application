import React from 'react';

const showPerson = (props) => {
    const perRecord = props.personData.map(perData => {
        return (
            <li key={Math.random()}>{perData}</li>
        )
    });

    return (
        <ul>
            {perRecord}
        </ul>
    )
}

export default showPerson;