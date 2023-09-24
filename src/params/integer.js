/**
 * @param {string} param
 */
export function match(param){
    return /^\d+$/.test(param);
}

// 라우팅 조건에 matcher 만들어주는 것임