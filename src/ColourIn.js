import React from 'react'

const ColourIn = ({searchc,setSearchc}) => {
  return (
    <form className='colourForm' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='search'>Search</label>
      <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Items'
        value={searchc}
        onChange={(e) => setSearchc(e.target.value)}
      />
    </form>
  )
}

export default ColourIn