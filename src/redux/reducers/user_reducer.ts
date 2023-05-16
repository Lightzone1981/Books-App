import { SET_USER, LOG_OUT } from "../action-types/index";
import { IUserData } from "../../types";

const initialState = {
	authorizedUser: {
		username: "",
		email: "",
		id: "",
	},
}

const getInitialState = () => {
	const localState = localStorage.localState
	if (localState) {
		const parse = JSON.parse(localState)
		const { user } = parse
		return user
		
	}
	return initialState
};

const userReducer = (state = getInitialState(), action: any) => {
	switch (action.type) {
		case SET_USER: {
			const { user } = action;
			return {
				...state,
				authorizedUser:user,
			};
		}

		case LOG_OUT: {
			return {
				...state,
				authorizedUser: {
					username: "",
					email: "",
					id: "",
				},
			};
		}
		
		default: {
			return state;
		}
	}
};

export { userReducer };
