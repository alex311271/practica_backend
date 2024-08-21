import { request } from '../utils';
import { setPostData } from './set-post-data';

export const saveEditAsync = (id, editData) => (dispatch) => {
	const saveRequest = id
		? request(`/posts/${id}`, 'PATCH', editData)
		: request('/posts', 'POST', editData);
	return saveRequest.then((editingPost) => {
		dispatch(setPostData(editingPost.data));
		return editingPost.data;
	});
};
