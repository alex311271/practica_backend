import { ACTION_TYPE } from './action-type';

export const removeComment = (commentId) => ({
	type: ACTION_TYPE.ADD_COMMENT,
	payload: commentId,
});
