import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const token = cookies.get('jwt');
	console.log('summary server load');
	console.log('token: ', token);
	return {
		token
	};
};
