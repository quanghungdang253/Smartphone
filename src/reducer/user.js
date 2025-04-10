
const userReducer = (state = {},action) => {
    switch(action.type) {
            case 'ADD_USER': {
                 break;
            }
            case 'SET_ACTIVE_USER':{
                break;
            }
            default : {
                return state;
            }
    }
}

export default userReducer;