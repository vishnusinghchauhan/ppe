import { PRODUCT_LIST , PRODUCT_DETAIL, PRODUCT_TOTAL, PENDING_PRODUCT, COMPANY_LIST} from "../Actions/types";

const initialState = {
	productList:[],
	productDetails:{},
	productTotal:0,
	pendingProducts:[],
	companyList:[],


}
const stockReducer = (currentState = initialState, action) => {
    switch (action.type) {

    case PRODUCT_LIST:
	  	return {
	  		...currentState, productList:action.payload
	  	};

	case PRODUCT_DETAIL:
	  	return {
	  		...currentState, productDetails:action.payload
	  	};

	case PRODUCT_TOTAL:
	  	return {
	  		...currentState, productTotal:action.payload
	  	};


    case PENDING_PRODUCT:
	  	return {
	  		...currentState, pendingProducts:action.payload
	  	};

    case COMPANY_LIST:
	  	return {
	  		...currentState, companyList:action.payload
	  	};
	  	
    default:
            return currentState
    }
}
export default stockReducer;