import { combineReducers } from 'redux'
import { userLogedIn } from './users'
import { playersInGame } from './users'
import currentTurn from './turns'
import gameStarted from './startingGame'

export default combineReducers ({
  userLogedIn,
  playersInGame,
  gameStarted,
  currentTurn,
})

