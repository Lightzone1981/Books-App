import {
	SET_THEME,SET_BURGER_STATUS, SET_ACTIVE_PAGE, SET_SEARCH_REQUEST
} from "../action-types/index";

const initialState = {
	theme: "light",
	activePage: 'new',
	searchRequest:'',
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
		
		
		default: {
			return state;
		}
	}
};

export { uiReducer };
