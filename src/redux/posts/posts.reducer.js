import { postAction } from "./posts.type";

const INITIAL_VALUE = [];

const postReducer = (state = INITIAL_VALUE, action) => {
	switch (action.type) {
		case postAction.FETCH_ALL:
			return action.payload;
		default:
			return state;
	}
};

export default postReducer;
