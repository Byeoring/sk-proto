// @ts-nocheck
import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments.js';

/**
 * @param {{ params: any; }} requestEvent
 */
export function GET(requestEvent) {
    const { params } = requestEvent;
    const { commentId } = params;

    const findedComment = comments.find(
        (comment) => comment.id === parseInt(commentId)
    );

    return json(findedComment);
}

/**
 * @param {any} requestEvent
 */
export async function PATCH(requestEvent) {
    const { params, request } = requestEvent;
    const { commentId } = params;
    const { text } = await request.json();

    //db에서 비즈니스 로직 수행 (db의 어떤 특징 댓글의 내용을 수정한다.)
    const findedComment = comments.find(
        (comment) => comment.id === parseInt(commentId)
    );

    findedComment.text = text;

    return json(findedComment);

}

export async function DELETE(requestEvent) {
    const { params, request } = requestEvent;
    const { commentId } = params;

    //db에서 비즈니스 로직 수행 (db의 어떤 특징 댓글을 삭제한다.)
    const findedComment = comments.find(
        (comment) => comment.id === parseInt(commentId)
    );

    comments.splice(comments.indexOf(findedComment), 1);

    return json(findedComment);
}