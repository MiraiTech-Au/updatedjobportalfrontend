import slice from './user.slice'

export const selectSlice = (state) => state[slice.name]

export const selectUser = (state) => selectSlice(state).user