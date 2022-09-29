import React from 'react';
import ActiveSession from './components/activeSession';
import type { IActiveSessionProviderProps } from './types';
import { DEFAULT_EVENTS } from './utils/defaults';

export const ActiveSessionProvider: React.FC<IActiveSessionProviderProps> = ({
	children,
	timeout,
	postAction,
	preAction,
	isEnabled = true,
	events = DEFAULT_EVENTS,
}) => {
	return isEnabled ? (
		<ActiveSession postAction={postAction} timeout={timeout} preAction={preAction} events={events}>
			{children}
		</ActiveSession>
	) : (
		<React.Fragment>{children}</React.Fragment>
	);
};
