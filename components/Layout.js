import styled from '@emotion/styled';

const Layout = ({ children }) => {
	return (
		<StyledLayoutContainer>
			<StyledHeader>
				<h3>logo</h3>
				<nav>
					<ul>
						<li>About</li>
						<li>Blog</li>
						<li>Projects</li>
					</ul>
				</nav>
			</StyledHeader>
			<main>{children}</main>
			<footer>this is the footer</footer>
		</StyledLayoutContainer>
	);
};

export default Layout;

const StyledLayoutContainer = styled.div`
	max-width: 41rem;
	margin: 0 auto;
	padding: 1rem 1.7rem;

	main {
		min-height: 85vh;
	}
`;

const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: sticky;
	z-index: 10;
	top: 0;
	margin: 2rem 0 2rem;
	background-color: #f1f3f5;
	padding: 1.5rem 0;

	ul {
		display: flex;
		flex-direction: row;

		li {
			padding-left: 1.75rem;
		}
	}
`;
