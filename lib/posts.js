import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
	url: 'https://corykelley-cms.herokuapp.com',
	key: '8dcb8d661e9a048f371418de48',
	version: 'v3',
});

export async function getPosts() {
	return await api.posts
		.browse({
			limit: 'all',
		})
		.catch((err) => {
			console.error(err);
		});
}

export async function getSinglePost(postSlug) {
	return await api.posts
		.read({
			slug: postSlug,
		})
		.catch((err) => {
			console.error(err);
		});
}
