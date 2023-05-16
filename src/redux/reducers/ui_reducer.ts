import {
	SET_THEME,
} from "../action-types/index";

const initialState = {
	theme: "light",
	burgerStatus: false,
	postModalVisible: false,
	profileModalVisible: false,
	searchActive: false,
	paginationActiveItem: 1,
	activeTab: 'All',
};

const getInitialState = () => {
	const localState = localStorage.localState
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
		
		default: {
			return state;
		}
	}
};

export { uiReducer };
