import React from 'react';
import '../CardList/index.css'

const Card = ({ CardItem }) => {
    const { id, name, email } = CardItem;
    return (

        // removed grow class
        <div className="tc bg-light-green dib br3 pa3 ma2  bw2 shadow-5 Card " >
            <img alt="robot_photos" src={`https://robohash.org/${id}.png?size=200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;