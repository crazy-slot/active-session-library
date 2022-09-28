import React from 'react';
import { useActiveSession } from './services';
import { DEFAULT_EVENTS } from '../../utils/defaults';
import type { EventType } from '../../types';

interface IActiveSessionProps {
	postAction: () => void;
	timeout: number;
	preAction?: () => void;
	events?: EventType[];
}

export const ActiveSession: React.FC<IActiveSessionProps> = ({
	children,
	timeout,
	postAction,
	preAction,
	events = DEFAULT_EVENTS,
}) => {
	const { eventTrigger, isActiveSession } = useActiveSession(postAction, timeout);

	React.useEffect(() => {
		if (preAction) {
			preAction();
		}
	}, [preAction]);

	React.useEffect(() => {
		if (isActiveSession) {
			events.forEach(event => {
				document.addEventListener(event, eventTrigger, true);
			});
		} else {
			events.forEach(event => {
				document.removeEventListener(event, eventTrigger, true);
			});
		}
	}, [eventTrigger, isActiveSession]);

	return <React.Fragment>{children}</React.Fragment>;
};

export default ActiveSession;
