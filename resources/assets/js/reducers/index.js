import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import messageReducer from './messageReducer';
import contactReducer from './contactReducer';
import modalReducer from './modalReducer';


export default combineReducers({
    contacts: contactReducer,
    messages: messageReducer,
    modal: modalReducer,
    form: formReducer
});