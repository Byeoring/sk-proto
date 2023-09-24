import { json } from '@sveltejs/kit'
import { comments } from '$lib/comments.js';

// export function GET() {
//     return new Response(JSON.stringify(comments), {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }
export function GET() {
    return json(comments);
}

/**
 * @param {{ request: any; }} requestEvent
 * @returns {Promise<*>}
 * @constructor
 */
export async function POST(requestEvent) {
    const { request } = requestEvent;
    const { text } = await request.json();
    const newComment = {
        id: comments.length + 1,
        text
    };
    comments.push(newComment);

    // return new Response(JSON.stringify(newComment), {status : 201});
    return json(newComment, { status: 201 });
}

