import { combineReducers } from 'redux';
import infoReducer from './infoReducer';


export const createRootReducer = (history: any) =>
    combineReducers({
        infoReducer    
    });
