import React from 'react';
import { ActiveSessionProvider } from 'active-session-library';

const App: React.FC = () => {
	return (
		<div>
			<div>Create react app example</div>
			<ActiveSessionProvider
				timeout={6000}
				preAction={() => {
					console.log('Start ...');
				}}
				postAction={() => {
					console.log('redirect to logout');
				}}
				events={['click', 'mousemove', 'keydown', 'scroll', 'drag']}
			>
				<div>Secured Page</div>
			</ActiveSessionProvider>
		</div>
	);
};

export default App;
