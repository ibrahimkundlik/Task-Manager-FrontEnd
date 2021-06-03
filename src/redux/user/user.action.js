import * as api from "../../api/api-call";
import { userActionType } from "./user.type";

export const startLogin = (formData, history) => async (dispatch) => {
	try {
		dispatch({
			type: userActionType.AUTH_START,
		});
		const { data } = await api.login(formData);
		dispatch({
			type: userActionType.LOGIN_SUCCESS,
			payload: data,
		});
		history.push("/teams");
	} catch (error) {
		let errorMessage = error.message;
		if (error.response) {
			errorMessage = error.response.data.message;
		}
		dispatch({
			type: userActionType.AUTH_FAILURE,
			payload: errorMessage,
		});
	}
};

export const logout = () => {
	return {
		type: userActionType.LOGOUT,
	};
};

export const checkUser = () => {
	let userData = null;
	const user = JSON.parse(localStorage.getItem("profile"));
	if (user) {
		userData = user;
	}
	return {
		type: userActionType.CHECK_USER,
		payload: userData,
	};
};
