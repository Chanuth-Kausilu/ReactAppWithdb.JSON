import React from 'react'
import { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa'
import ItemList from './ItemList';


const Content = ({items,setItems,handleCheck,handleDelete}) => {



    /*const [name, setName] = useState('tom')
    const [count,setCount] = useState(0)
     const handlenamechange =()=>{
        const names = ["bob","tom","ben"];
        const int =  Math.floor(Math.random()*3);
        setName(names[int]);
    
      }

      const handleclick = () =>{
        
        setCount(count+1)
        console.log(count)
      }

      const handleclick2 = (name) =>{
        console.log(`${name} was clicked`)
      }
      const handleclick3 = (e) =>{
        console.log(e.target.innerText)
      } */



  

  return (
    <>
        {/* <p onDoubleClick={handleclick}>
          {name}
        </p>
        <button onClick={handlenamechange}>change name</button>
        <button onClick={() => handleclick2('tom')}>on click</button>
        <button onClick={(e) => handleclick3(e)}>on click</button> */}
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          />
      ):(
        <p style={{marginTop:'2rem'}}> list is empty
        </p>
      )}
    </>
  )
}

export default Content