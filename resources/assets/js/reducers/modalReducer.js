import * as types from '../actions/types';
const initialState = {
	[types.SHOW_CREATE_CONTACT]: false,
	[types.SHOW_CREATE_MESSAGE]: false,
	[types.SHOW_EDIT_CONTACT]: false,
	[types.SHOW_EDIT_MESSAGE]: false,
	[types.SHOW_DELETE_CONTACT]: false,
	[types.SHOW_DELETE_MESSAGE]: false
};
export default function(state = initialState, action) {
	switch (action.type) {
		case types.CLOSE_MODAL:
			return Object.keys(state).reduce((newState, key) => {
				newState[key] = false;
				return newState;
            }, {});
        case types.SHOW_CREATE_CONTACT:
        case types.SHOW_CREATE_MESSAGE:
        case types.SHOW_EDIT_CONTACT:
        case types.SHOW_EDIT_MESSAGE:
        case types.SHOW_DELETE_CONTACT:
        case types.SHOW_DELETE_MESSAGE:
			return Object.keys(state).reduce((newState, key) => {
				newState[key] = action.type === key;
				return newState;
			}, {});
        default:
            return state;
	}
}
