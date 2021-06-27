import { taskActionType } from "./task.type";

const INITIAL_STATE = {
	loading: false,
	errorRes: null,
	tasks: null,
};

const taskReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case taskActionType.REQ_START_TASK:
			return { ...state, loading: true, errorRes: null };
		case taskActionType.REQ_SUCCESS_TASK:
			return {
				...state,
				loading: false,
				errorRes: null,
			};
		case taskActionType.REQ_FAILURE_TASK:
			return {
				...state,
				loading: false,
				errorRes: action.payload,
			};
		case taskActionType.SEPERATE_TASKS:
			const taskModel = {
				backlog: [],
				progress: [],
				review: [],
				done: [],
			};
			for (let i = 0; i < action.payload.length; i++) {
				taskModel[action.payload[i].type].push(action.payload[i]);
			}
			return {
				...state,
				tasks: taskModel,
			};
		default:
			return state;
	}
};

export default taskReducer;
