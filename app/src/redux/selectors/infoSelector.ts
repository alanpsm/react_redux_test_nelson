import { createSelector } from "reselect"

const infoState = (state: any) => state.infoReducer;

export const makeSelectInfo = createSelector(
    infoState,
    info => info
)