import Head from 'next/head';
import { Container } from 'semantic-ui-react';
import Header from './Header';

const styles = {
	container: {
		paddingTop: '1em',
		paddingBottom: '1em',
		minWidth: '100%',
	},
};

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>PM Tech Crypto Tracker</title>
			</Head>
			<Header />
			<Container text style={styles.container}>
				{children}
			</Container>
		</>
	);
};

export default Layout;
