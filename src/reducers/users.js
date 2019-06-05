
export function userLogedIn (state= {}, action) {
  switch (action.type) {
    case 'USER_LOGGED':
      return action.payload
    default:
      return state  
  }
}

export function playersInGame (state= [], action) {
  switch (action.type) {
    case 'PLAYERS_IN_GAME':
      return action.payload
    case 'GAME_OVER':
      return []  
    default:
      return state  
  }
}

export function userJoinedGame (state = false, action) {
  switch (action.type) {
    case 'USER_JOINED':
      return true
    case 'GAME_OVER':
        return false   
    default:
      return state  
  }
}



