import React from 'react';
import { useActiveSession } from './services';

interface IActiveSessionProps {
	postAction: () => void;
	preAction?: () => void;
	timeout: number;
}

export const ActiveSession: React.FC<IActiveSessionProps> = ({ children, timeout, postAction, preAction }) => {
	const { eventTrigger } = useActiveSession(postAction, timeout);

	React.useEffect(() => {
		if (preAction) {
			preAction();
		}
	}, [preAction]);

	React.useEffect(() => {
		window.onclick = eventTrigger;
		window.onmousemove = eventTrigger;
		window.onkeydown = eventTrigger;
		window.onscroll = eventTrigger;
		window.ondrag = eventTrigger;
	}, [eventTrigger]);

	return <React.Fragment>{children}</React.Fragment>;
};

export default ActiveSession;
