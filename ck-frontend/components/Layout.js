import Footer from './Footer';

import styled from '@emotion/styled';

const Layout = ({ maxWidth, children }) => {
	return (
		<StyledContainer maxWidth={maxWidth}>
			<main>{children}</main>
			<Footer />
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	max-width: ${(props) => props.maxWidth};
	width: 88vw;
	margin: 5rem auto 0;

	main {
		min-height: 85vh;
	}
`;

export default Layout;
