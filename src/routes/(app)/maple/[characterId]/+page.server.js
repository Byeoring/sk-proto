import { redirect } from '@sveltejs/kit';

export const load = async (/** @type {{ fetch: any; params: any; url: any; route: any; }} */ serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent;
    const { characterId } = params;

    if (characterId > 3) {
        throw redirect(307, '/maple');
    }

    const response = await fetch(`http://localhost:4000/characters/${characterId}`);
    const character = await response.json();

    return {
        character
    };
};