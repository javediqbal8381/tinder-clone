import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import axios from './axios'

import './tindercards.css'

function TinderCards() {

    const [peoples, setPeoples] = useState([])

    useEffect(() => {
        async function fetchcards() {
            const req = await axios.get('/api/tinder/getallcards')
            setPeoples(req.data)
        }
        fetchcards()

    }, [])
    const swiped = (direction, nameToDelete) => {
        console.log("removing : " + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }


    return (
        <div className='tindercards'>
            <div className='tindercards_cardCoontainer'>

                {peoples.map((person, i) => (
                    <TinderCard
                        className='swipe'
                        key={i}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir => swiped(dir, person.name))}
                        onCardLeftScreen={() => outOfFrame(person.name)}>

                        <div style={{ backgroundImage: `url(${person.imgurl})` }} className='card'>
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards