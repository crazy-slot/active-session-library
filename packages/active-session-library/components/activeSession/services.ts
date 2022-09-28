import { useCallback, useEffect, useState } from 'react';

export const useActiveSession = (postAction: () => void, timeout: number) => {
	const [isActiveSession, setIsActiveSession] = useState<boolean>(true);

	useEffect(() => {
		if (isActiveSession) {
			const now = new Date().getTime();
			localStorage.setItem('lastEvent', String(now));
			const timer = setInterval(() => {
				const lastEvent = Number(localStorage.getItem('lastEvent'));
				const now = new Date().getTime();
				if (now > lastEvent + timeout) {
					setIsActiveSession(false);
					localStorage.removeItem('lastEvent');
					postAction();
				}
			}, 1000);
			return () => {
				clearInterval(timer);
			};
		}
	}, [isActiveSession, postAction]);

	const updateLastEvent = () => {
		const eventDate = new Date().getTime();
		localStorage.setItem('lastEvent', String(eventDate));
	};

	const eventTrigger = useCallback(updateLastEvent, []);

	return { isActiveSession, eventTrigger };
};
