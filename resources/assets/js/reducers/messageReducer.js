import { CREATE_MESSAGE, FETCH_MESSAGES, UPDATE_MESSAGE, DELETE_MESSAGE } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
        case FETCH_MESSAGES:
            return action.payload || false;

        case UPDATE_MESSAGE:
            if(state){
                return state.map( message => {
                    if(message.id === action.payload.id){
                        return action.payload;
                    }
                    return message;
                });
            }
            return [action.payload];

        case CREATE_MESSAGE:
            return action.payload || false;

        case DELETE_MESSAGE:
            if(state){
                return state.filter( message => message.id !== action.payload.id );
            }
            return false;

        default:
            return state;
	}
}