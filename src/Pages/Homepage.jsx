import React from 'react'
import { Card, CardGroup } from 'semantic-ui-react'
import "../styles/homepage.scss"

const Homepage = () => {

    const items = [
        {
            image: 'https://avatars3.githubusercontent.com/u/9421706?s=460&u=ad5e3e5bad96970aa57444b19f4b5382fef54e7a&v=4',
            header: 'Bloom',
            description: 'an interactive js soundboard app',
            href: "ill put the link here when it's deployed",
            color: "red"
        },
        {
            header: "StarWars Bounty Guild",
            description: "A rails monolith app for those who want to live like boba-the-fet"
        }
    ]

    console.log("Hello")

    return (
        <div className="back">
            <img className="image" src={"https://avatars3.githubusercontent.com/u/9421706?s=460&u=ad5e3e5bad96970aa57444b19f4b5382fef54e7a&v=4"} alt="" />
            <p> hello! My name is angelo and im an aspiring software engeneer. I've recently graduated from the Flatiron school for software engeneering and have been looking to improve upon myself everyday since graduation! </p>


            <div className="ProjectShowcase">

            <Card.Group items={items}>
            </Card.Group>

                
            </div>
        </div>



    )
}

export default Homepage
