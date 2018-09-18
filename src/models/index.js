import {combineReducers} from 'redux';
import infoReducer from './getInfoReducer';
import { reducer as formReducer } from 'redux-form' 

const rootReducer = combineReducers({
    info: infoReducer,
    form: formReducer
});

export default rootReducer;
