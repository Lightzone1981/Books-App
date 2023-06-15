import { SET_USER, SET_SIGN_UP_DATA, SET_ACTIVATION_LINK, LOG_OUT } from "../action-types/index";
import { IUserData } from "../../types";

const initialState = {
	authorizedUser: {
		username: "",
		email: "",
		id: "",
	},
	signUpData: {},
	activationLink:'',
}

const getInitialState = () => {
	const localState = localStorage.localBooksState
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
			
		case SET_SIGN_UP_DATA: {
			const { data } = action;
			return {
				...state,
				signUpData:data,
			};
		}

		case SET_ACTIVATION_LINK: {
			const { activationLink } = action;
			return {
				...state,
				activationLink,
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
