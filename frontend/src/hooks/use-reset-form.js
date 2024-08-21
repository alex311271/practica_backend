import { useStore } from 'react-redux';
import { useEffect } from 'react';

export const useResetForm = (reset) => {
	const store = useStore();

	useEffect(() => {
		let currentWasLogout = store.getState().app.wasLogout;
		return store.subscribe(() => {
			let prevousWasLogout = currentWasLogout;
			currentWasLogout = store.getState().app.wasLogout;
			if (currentWasLogout !== prevousWasLogout) {
				reset();
			}
		});
	}, [reset, store]);
};
