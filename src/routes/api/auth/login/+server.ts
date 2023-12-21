import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
    throw redirect(307, `https://accounts.spotify.com/authorize${
        new URLSearchParams({
            
        })
    }`);
}