import Card from './Card'
import Photo from '../images/image-jeremy.png'
import React from 'react'

const Profile = (props) => {

    const data = require('../data.json');

    const [option, setOption] = React.useState({
        daily: false,
        weekly: true,
        monthly: false,
    })
    
    const cards =  data.map(element => {
        return <Card 
                    key = {element.title}
                    item = {element}
                    option = {option}
               />
    })

    function changeToDaily () {
        setOption({
            daily:true,
            weekly: false,
            monthly: false
        })
    }

    function changeToMonthly () {
        setOption({
            daily: false,
            weekly: true,
            monthly: false
        })
    }

    function changeToWeekly () {
        setOption({
            daily: false,
            monthly: true,
            weekly: false
        })
    }

    return (
        <>
            <header className='header'>
                <div className='header--info'>
                    <img src={Photo}  className="header--photo"/>
                    <h1 className='header--name'>
                        <span>Report for</span>
                        Jeremy Robson
                    </h1>
                </div>
                <div className="header--selection">
                    <ul className="header--selection-options">
                        <li onClick={changeToDaily}>Daily</li>
                        <li onClick={changeToWeekly}>Weekly</li>
                        <li onClick={changeToMonthly}>Monthly</li>
                    </ul>
                </div>
            </header>
            <div className="cards-container">
                {cards}
            </div>
        </>
    )
}

export default Profile