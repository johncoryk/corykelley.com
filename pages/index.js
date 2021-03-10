import Layout from '../components/Layout';
import { getPosts } from '../lib/posts';
import Link from 'next/link';

import styled from '@emotion/styled';

const Index = ({ posts }) => {
	console.log(posts);
	return (
		<Layout>
			<StyledMainContent>
				<section className='intro'>
					<h1>Hey, I'm Cory.</h1>
					<p>
						I'm a software engineer, web developer, writer, and occasional video
						creator. Depending on the season, I'm most likely watching college
						football.
					</p>
				</section>
				<section className='latest-blog'>
					<h2>Latest Posts</h2>
					<ul>
						{posts.map((post) => (
							<li key={post.id}>
								<h3>
									<Link href={`/posts/${post.slug}`}>{post.title}</Link>
								</h3>
								<p>{post.excerpt}</p>
							</li>
						))}
					</ul>
					<ul>
						{posts.map((post) => (
							<li key={post.id}>
								<h3>
									<Link href={`/posts/${post.slug}`}>{post.title}</Link>
								</h3>
								<p>{post.excerpt}</p>
							</li>
						))}
					</ul>
					<ul>
						{posts.map((post) => (
							<li key={post.id}>
								<h3>
									<Link href={`/posts/${post.slug}`}>{post.title}</Link>
								</h3>
								<p>{post.excerpt}</p>
							</li>
						))}
					</ul>
					<ul>
						{posts.map((post) => (
							<li key={post.id}>
								<h3>
									<Link href={`/posts/${post.slug}`}>{post.title}</Link>
								</h3>
								<p>{post.excerpt}</p>
							</li>
						))}
					</ul>
					<ul>
						{posts.map((post) => (
							<li key={post.id}>
								<h3>
									<Link href={`/posts/${post.slug}`}>{post.title}</Link>
								</h3>
								<p>{post.excerpt}</p>
							</li>
						))}
					</ul>
				</section>
			</StyledMainContent>
		</Layout>
	);
};

export default Index;

const StyledMainContent = styled.div`
	.intro {
		margin: 5rem 0;

		h1 {
			font-size: 2.75rem;
			margin-bottom: 1.3rem;
		}
	}

	.latest-blog {
		h2 {
			margin-bottom: 0.9rem;
		}

		li {
			margin-bottom: 0.9rem;
		}
	}
`;

export async function getStaticProps(context) {
	const posts = await getPosts();

	if (!posts) {
		return {
			notFound: true,
		};
	}

	return {
		props: { posts },
		revalidate: 1,
	};
}
