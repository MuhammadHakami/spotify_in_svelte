import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({url, cookies}) => {
    const code = url.searchParams.get('code') || null;
    const state = url.searchParams.get('state') || null;

    const storedState = cookies.get('spotify_auth_state') || null;
    const storedChallengeVerifier = cookies.get('spotify_auth_challenge_verifier') || null;

    if (state !== null || state !== storedState) {
        throw error(400, "State Mismatch!");
    }
};
