import { FETCH_CONTACTS, UPDATE_CONTACT, CREATE_CONTACT, DELETE_CONTACT } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
        
        case FETCH_CONTACTS:
            return action.payload || false;

        case UPDATE_CONTACT:
            if(state){
                return state.map( contact => {
                    if(contact.id === action.payload.id){
                        return action.payload;
                    }
                    return contact;
                });
            }
            return [action.payload];

        case CREATE_CONTACT:
            return action.payload || false;

        case DELETE_CONTACT:
            if(state){
                return state.filter( contact => contact.id !== action.payload.id );
            }
            return false;
        default:
            return state;
	}
}