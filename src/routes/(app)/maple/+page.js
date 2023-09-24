// export const load = async () => {
//     const response = await fetch('http://localhost:4000/characters');
//     const characters = await response.json();
//     return {
//         characters
//     };
// };
// 위는 윈도우 자체에서 제공하는 fetch 함수이지만 우리 스벨트 킷에서는 따로 추가된 기능 함수를 제공해준다.

export const load = async (/** @type {{ fetch: any; }} */ loadEvent) => {
    console.log('load 함수 실행됨');
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