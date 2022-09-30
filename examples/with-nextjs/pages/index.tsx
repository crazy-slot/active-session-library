import { useRouter } from 'next/router';
import { ActiveSessionProvider } from 'active-session-library';

export const Web = () => {
	const router = useRouter();
	return (
		<>
			<h1>NextJs example</h1>
			<ActiveSessionProvider
				timeout={6000}
				postAction={() => {
					router.push('/logout');
				}}
				events={['click', 'mousemove', 'keydown', 'scroll', 'drag']}
				isEnabled
			>
				<div>Secured Page</div>
			</ActiveSessionProvider>
		</>
	);
};

export default Web;
