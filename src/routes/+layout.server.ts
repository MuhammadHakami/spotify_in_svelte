import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const accessToken = cookies.get('access_token');

    
    return {
        user: null,
        
    }
}