import Layout from '../components/Layout';
import theme from '../styles/theme.json';

import {
	FaYoutubeSquare,
	FaTwitterSquare,
	FaDev,
	FaGithubSquare,
	FaEnvelope,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

import styled from '@emotion/styled';

const index = () => {
	return (
		<Layout maxWidth={theme.maxWidth.home}>
			<StyledMainContainer>
				<StyledNavSection>
					<nav>
						<IconContext.Provider value={{ size: '1.5rem' }}>
							<ul>
								<li>
									<a href='https://youtube.com/corykelley'>
										<FaYoutubeSquare />
									</a>
								</li>
								<li>
									<a href='https://twitter.com/corykelley_'>
										<FaTwitterSquare />
									</a>
								</li>
								<li>
									<a href='https://dev.to/corykelley_'>
										<FaDev />
									</a>
								</li>
								<li>
									<a href='https://github.com/johncoryk'>
										<FaGithubSquare />
									</a>
								</li>
								<li>
									<a href='mailto:me@corykelley.com'>
										<FaEnvelope />
									</a>
								</li>
							</ul>
						</IconContext.Provider>
					</nav>
					<section>
						<img src='' alt='image' />
						<article>
							<h3>Hi I'm cory</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
								adipisci cum velit est eos recusandae, natus perspiciatis
								nesciunt?
							</p>
						</article>
					</section>
				</StyledNavSection>
				<StyledBlogSection>blogs</StyledBlogSection>
			</StyledMainContainer>
		</Layout>
	);
};

const StyledMainContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledNavSection = styled.section`
	display: flex;
	width: 500px;
	margin-right: 1.5rem;

	nav {
		margin-right: 1.5rem;

		li {
			padding: 4px;

			a {
				color: ${theme.colors.lightGray};
			}
		}
	}
`;

const StyledBlogSection = styled.section`
	margin-top: 2.5rem;
	width: 100%;
`;

export default index;
