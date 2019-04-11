import React, { Component, Fragment } from 'react';
import '../Assets/SCSS/Select.scss';

import CardItem from '../Components/Items';

import backgroundImg from '../Assets/Images/background.jpeg';

import Header from '../Components/Header';

class ProSelect extends Component {
    state = {
        itemDetails: [{
            'id': 1,
            'imgLink': backgroundImg,
            'alt': 'Jwellery',
            'cardTitle': 'Jwellery'
        },
        {
            'id': 2,
            'imgLink': backgroundImg,
            'alt': 'Organic Store',
            'cardTitle': 'Organic Store'
        },
        {
            'id': 3,
            'imgLink': backgroundImg,
            'alt': 'Sports',
            'cardTitle': 'Sports'
        }]
    }

    render () {
        let item = this.state.itemDetails.map(item => {
            return (<CardItem key={item.id} details={item} />)
        });
        return (
            <Fragment>
                <Header />
                <div className="prntContainer row">
                    Inside Select !!!

                    {item}
                    
                </div>
            </Fragment>
        );
    }
}

export default ProSelect;