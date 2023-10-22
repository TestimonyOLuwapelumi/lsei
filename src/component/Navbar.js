import React, {useState} from 'react'
import Accord from './Accord'

const Navbar = () => {
    const [list, setList] = useState([
        {
            question: 'what is your name',
            answer: 'my name is Testimony'
        },
        {
            question: 'what do you do',
            answer: 'Full-stack developer'
        }
    ])
  return (
    <>
    
           {
            list.map((item, key) => (
                <Accord key={key} datas={item}/>
            ))
           }
    </>
  )
}

export default Navbar