import React from 'react';
import ActiveSession from './components/activeSession';

export interface IActiveSessionProviderProps {
	postAction: () => void;
	preAction?: () => void;
	isEnabled?: boolean;
	timeout: number;
	children?: React.ReactNode;
}

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
