import React, { Component } from 'react';
import Card from '../Card';
import './index.css'


class CardList extends Component {

    render() {
        const { robots } = this.props;
        return (

            <div className="CardList">
                {
                    robots.map(CardItem => {
                        return (
                            <div >
                                <Card key={CardItem.id} CardItem={CardItem} />
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}

export default CardList;

/* <div>
    <Card id={robots[0].id}
        name={robots[0].name}
        email={robots[0].email}
    />
    <Card id={robots[1].id}
        name={robots[1].name}
        email={robots[1].email}
    />
    <Card id={robots[2].id}
        name={robots[2].name}
        email={robots[2].email}
    />

</div> */