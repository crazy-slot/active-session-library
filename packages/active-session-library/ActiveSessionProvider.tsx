import React from 'react';
import ActiveSession from './components/activeSession';
import type { IActiveSessionProviderProps } from './types';

export const ActiveSessionProvider: React.FC<IActiveSessionProviderProps> = ({
	children,
	timeout,
	postAction,
	preAction,
	isEnabled = true,
}) => {
	return isEnabled ? (
		<ActiveSession postAction={postAction} timeout={timeout} preAction={preAction}>
			{children}
		</ActiveSession>
	) : (
		<React.Fragment>{children}</React.Fragment>
	);
};
