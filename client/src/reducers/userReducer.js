import { LOGIN_USER_INFO } from "../Actions/types";

const initialState = {
	dataList:[]
}
const userReducer = (currentState = initialState, action) => {
    switch (action.type) {

    case LOGIN_USER_INFO:
	  	return {
	  		...currentState, userInfo:action.payload
	  	};
        default:
            return currentState
    }
}
export default userReducer;