import slice from './profile.slice'

export const selectSlice = (state) => state[slice.name]

export const selectGlobalVariable = (state) => selectSlice(state).globalVariable

export const selectedFetchedData = (state) => selectSlice(state).fetchedData