import {
	SET_THEME,SET_CART_STATUS, SET_ACTIVE_PAGE, SET_SEARCH_REQUEST, SET_LOADER_STATUS, SET_PAGINATION_ITEM, SET_PROFILE_MODAL_VISIBLE, SET_REGISTRATION_MODAL_VISIBLE, SET_SIGN_IN_MODAL_VISIBLE, SET_LOADER_VISIBLE, SET_SEARCH_STATUS, SET_SORT_TYPE, SET_SORT_PARAM, SET_ERROR_VISIBLE, SET_ERROR_MESSAGE, SET_ACTIVATION_MODAL_VISIBLE, SET_SUCCESS_MODAL_VISIBLE, SET_404, SET_ACTION_MODAL,
} from "../action-types/index";

const initialState = {
	theme: "light",
	activePage: 'new',
	searchRequest: '',
	cartPopupStatus: false,
	loaderStatus: false,
	errorVisible: false,
	errorMessage: '',
	status404:true,
	paginationItem: 1,
	profileModalVisible: false,
	signInModalVisible: false,
	registrationModalVisible: false,
	activationModalVisible: false,
	successModalVisible: false,
	actionModal: {visible:false, message:'', callback:{}},
	searchErrorStatus: true,
	sortType: 'asc',
	sortParam:'Sort by Title',
};

const getInitialState = () => {
	const localState = localStorage.localBooksState
	if (localState) {
		const parse = JSON.parse(localState)
		const { ui } = parse
		return ui
	}
	return initialState
};

const uiReducer = (state = getInitialState(), action: any) => {
	switch (action.type) {
		
		case SET_THEME: {
			const { theme } = action;
			return {
				...state,
				theme,
			};
		}
			
		case SET_ACTIVE_PAGE: {
			const { activePage } = action;
			return {
				...state,
				activePage
			};
		}
			
		case SET_SEARCH_REQUEST: {
			const { searchRequest } = action;
			return {
				...state,
				searchRequest
			};
		}
		
		case SET_CART_STATUS: {
			const { cartPopupStatus } = action;
			return {
				...state,
				cartPopupStatus
			};
		}
			
		case SET_LOADER_STATUS: {
			const { status } = action;
			return {
				...state,
				loaderStatus:status
			};
		}
		
		case SET_PAGINATION_ITEM: {
			const { item } = action;
			return {
				...state,
				paginationItem:item
			};
		}
			
		case SET_PROFILE_MODAL_VISIBLE: {
			const { profileModalVisibleStatus } = action;
			return {
				...state,
				profileModalVisibleStatus,
			};
		}
			
		case SET_REGISTRATION_MODAL_VISIBLE: {
			const { status } = action;
			return {
				...state,
				registrationModalVisible:status,
			};
		}
		
		case SET_ACTIVATION_MODAL_VISIBLE: {
			const { activationModalVisible } = action;
			return {
				...state,
				activationModalVisible,
			};
		}
			
		case SET_SUCCESS_MODAL_VISIBLE: {
			const { successModalVisible } = action;
			return {
				...state,
				successModalVisible,
			};
		}
		
		case SET_ACTION_MODAL: {
			const { actionModal } = action;
			return {
				...state,
				actionModal,
			};
		}	
			
		
			
		case SET_SIGN_IN_MODAL_VISIBLE: {
			const { status } = action;
			return {
				...state,
				signInModalVisible:status,
			};
		}
			
		case SET_LOADER_VISIBLE: {
			const { status } = action;
			return {
				...state,
				loaderStatus:status,
			};
		}
		
		case SET_SEARCH_STATUS: {
			const { status } = action;
			return {
				...state,
				searchErrorStatus:status,
			};
		}	
			
		case SET_SORT_TYPE: {
			const { sortType } = action;
			return {
				...state,
				sortType,
			};
		}	
		
		case SET_SORT_PARAM: {
			const { sortParam } = action;
			return {
				...state,
				sortParam,
			};
		}	
			
		case SET_ERROR_VISIBLE: {
			const { errorVisible } = action;
			return {
				...state,
				errorVisible,
			};
		}	
			
		case SET_ERROR_MESSAGE: {
			const { errorMessage } = action;
			return {
				...state,
				errorMessage,
			};
		}
			
		case SET_404: {
			const { status } = action;
			return {
				...state,
				status404:status,
			};
		}

		default: {
			return state;
		}
	}
};

export { uiReducer };
