import slice from './signup.slice'

export const selectSlice = (state) => state[slice.name]


export const selectedFetchedData = (state) => selectSlice(state).employee