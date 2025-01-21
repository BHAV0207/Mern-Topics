import React from 'react'
import PropTypes from 'prop-types'

function Greetings({name , age}) {
  return (

    <div>
      <h1>hello , {name}</h1>
      <h1>your age is {age}</h1>
    </div>
  )
}

Greetings.propTypes = {
  name : PropTypes.string.isRequired,
  age : PropTypes.number.isRequired
}

export default Greetings