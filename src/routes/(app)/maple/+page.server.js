export const load = async (/** @type {{ fetch: any; }} */ loadEvent) => {
    console.log('Server Load 함수 실행됨');
    // 위 콘솔로그는 클라이언트와 서버 양쪽에서 실행됨.
    // 그런데 링크타고가면 클라이언트에서만 실행됨
    // universal load 함수라고 한다. 새로고침과 직접 url 치고 들어가면 양쪽에서 실행됨

    const { fetch } = loadEvent;
    const response = await fetch('http://localhost:4000/characters');
    const characters = await response.json();
    return {
        characters
    };
};