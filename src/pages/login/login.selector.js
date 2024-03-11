import slice from './login.slice'

export const selectSlice = (state) => state[slice.name]


export const selectedFetchedData = (state) => selectSlice(state).employee