
export const sendMessage = (payload) => {
    return  {
        type: 'REQUEST_SEND_MESSAGE',
        payload,
    }
}

export const sendMessageSuccess = () => {
    return {
        type: 'REQUEST_SEND_MESSAGE_SUCCESS',
    }
}

export const sendMessageError = () => {
    return {
        type: 'REQUEST_SEND_MESSAGE_ERROR',
    }
}

export const searchingUser = (payload) => {
    return {
        type: 'REQUEST_SEARCH_USER',
        payload
    }
}

export const searchingUserSuccess = (result) => {
    return {
        type: 'REQUEST_SEARCH_USER_SUCCESS',
        result
    }
}

export const searchingUserError = () => {
    return {
        type: 'REQUEST_SEARCH_USER_ERROR',
    }
}
