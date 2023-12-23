import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({url, cookies, fetch}) => {
    const code = url.searchParams.get('code') || null;
    const state = url.searchParams.get('state') || null;

    const storedState = cookies.get('spotify_auth_state') || null;
    const storedChallengeVerifier = cookies.get('spotify_auth_challenge_verifier') || null;

    if(state == null || state !== storedState ) {
        throw error(400, 'State Mismatch!')
    }

//     const response = await fetch('https://accounts.spotify.com/api/tokens',{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//         }
//     })
// };