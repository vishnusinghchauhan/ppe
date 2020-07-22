import { combineReducers } from 'redux'
import user from "./userReducer";
import login from "./loginReducer";
import stock from "./stockReducer";



const rootReducer = combineReducers({  
	user: user,
	login: login,
	stock: stock
})

export default rootReducer