import Link from 'next/link';
import { Container, Menu } from 'semantic-ui-react';

function Header() {
	return (
		<Menu color="blue" inverted borderless>
			<Container textAlign="left">
				<Link href="/">
					<Menu.Item style={{ paddingLeft: 0 }}>
						<h1>PM Tech Crypto Tracker</h1>
					</Menu.Item>
				</Link>
			</Container>
		</Menu>
	);
}

export default Header;
