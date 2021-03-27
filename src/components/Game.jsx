import React from 'react'
import PropTypes from 'prop-types'

function Game({ rock, paper, shears, onClick}) {
    return (
        <form onClick={onClick}>
            <input id="rock"value="rock">{rock}</input>
            <input id="paper"value="paper">{paper}</input>
            <input id="shears" value="shears">{shears}</input>
            <button>Hit</button>
        </form>
    )
}

Game.propTypes = {
    rock: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
    shears: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Game

