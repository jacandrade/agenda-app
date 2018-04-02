import * as types from './types';

//Contact action creators
export const fetchContacts = () => async dispatch => {
    const res = await axios.get('/api/contacts');
    dispatch({ type: types.FETCH_CONTACTS, payload: res.data.data });
};

export const editContact = (contact) => async dispatch => {
    const res = await axios.put(`api/contacts/${contact.id}`, contact);
    if(res.status === 200){
        dispatch({ type: types.UPDATE_CONTACT, payload: res.data.data });
        dispatch({ type: types.CLOSE_MODAL });
    }
}

export const createContact = (contact) => async dispatch => {
    const res = await axios.post(`api/contacts/`, contact);
    if(res.status === 200){
        dispatch({ type: types.CREATE_CONTACT, payload: res.data.data });
        dispatch({ type: types.CLOSE_MODAL });
    }
}

export const deleteContact = (contact) => async dispatch => {
    const res = await axios.delete(`api/contacts/${contact.id}`);
    if(res.status === 200){
        dispatch({ type: types.DELETE_CONTACT, payload: contact });
        dispatch({ type: types.CLOSE_MODAL });
    }
}

//Message action creators
export const fetchMessages = () => async dispatch => {
    const res = await axios.get('/api/messages');
    dispatch({ type: types.FETCH_MESSAGES, payload: res.data.data });
}

export const editMessage = (message) => async dispatch => {
    const res = await axios.put(`api/messages/${message.id}`, message);
    if(res.status === 200){
        dispatch({ type: types.UPDATE_MESSAGE, payload: res.data.data });
        dispatch({ type: types.CLOSE_MODAL });
    }
}

export const createMessage = (message) => async dispatch => {
    const res = await axios.post(`api/messages/`, message);
    if(res.status === 200){
        dispatch({ type: types.CREATE_MESSAGE, payload: res.data.data });
        dispatch({ type: types.CLOSE_MODAL });
    }
}

export const deleteMessage = (message) => async dispatch => {
    const res = await axios.delete(`api/messages/${message.id}`);
    if(res.status === 200){
        dispatch({ type: types.DELETE_MESSAGE, payload: message });
        dispatch({ type: types.CLOSE_MODAL });
    }
}


//modal action creators
export const showEditContact = () => dispatch => {
    dispatch({ type: types.SHOW_EDIT_CONTACT });
}

export const showCreateContact = () => dispatch => {
    dispatch({ type: types.SHOW_CREATE_CONTACT });
}

export const showDeleteContact = () => dispatch => {
    dispatch({ type: types.SHOW_DELETE_CONTACT });
}

export const showEditMessage = () => dispatch => {
    dispatch({ type: types.SHOW_EDIT_MESSAGE });
}

export const showCreateMessage = () => dispatch => {
    dispatch({ type: types.SHOW_CREATE_MESSAGE });
}

export const showDeleteMessage = () => dispatch => {
    dispatch({ type: types.SHOW_DELETE_MESSAGE });
}

export const closeModal = () => dispatch => {
    dispatch({ type: types.CLOSE_MODAL });
}