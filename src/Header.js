import React from 'react';
import './index.css';

const Header = ({title}) => {
    
    /*const headerstyle = {
        backgroundColor: 'blue',
        color:'#fff'
    };*/
  return (
    <header /*style={index.css/headers}*/>
        <h1>{title}</h1>

    </header>
  )
}
Header.defaultProps = {
  title:"Default title"
}

export default Header