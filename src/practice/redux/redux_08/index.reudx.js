const ADD_GUN = 'ADD_GUN'
const REMOVE_GUN = 'REMOVE_GUN'

// reducer
export function counter(state = 10, action) {
  // console.log(state)
  switch(action.type) {
    case ADD_GUN:
      return state + 1
    case REMOVE_GUN:
      return state - 1
    default:
      return 10
  }
}

// action creator
export function addGun() {
  return { 
    type: ADD_GUN 
  }
}
export function removeGun() {
  return {
    type: REMOVE_GUN
  }
}
export function addGunAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGun()) // dispatch({type: ADD_GUN})
    }, 2000)
  }
}