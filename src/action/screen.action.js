export const getActiveScreen = () => {
  return {
    type: 'GET_ACTIVE_SCREEN'
  }
}

export const setActiveScreen = (screen) => {
  return {
    type: 'SET_ACTIVE_SCREEN',
    payload: {
      activeScreen: screen.name
    }
  }
}