import React, { useState } from 'react'
import './ProfileCard.css'
import Photo from '../markzuck.png'

function ProfileCard() {

const [name, setName] = useState('Mark Zuckerberg')
const [job, setJob] = useState('CEO of Facebook')
const [school, setSchool] = useState('Harvard')
const[interests, setInterests] = useState('Interests: Games')
const [about, setAbout] = useState('The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be.') //research what this does
    return (
        <div className = "Card">
            <div className = 'upper'>
                <div className = 'image'>
                    <img src = { Photo } height = "125px" width = "125px"/>
                </div>
            </div>
            <div className = 'lower'>
                <h2> { name } </h2>
                <h3> { job } </h3>
                <h4> { school }</h4>
                <h5> { interests }</h5>
                <p> {about } </p>
            </div>
        </div>
    )
}

export default ProfileCard