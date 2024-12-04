const fetchWithAuth = (url: string, method: 'get' | 'post'): 1 | -1 => {
    return 1;
}

let method = 'post';
// проблема в том, что функция принимает литеральный тип 'get' | 'post', а тут тип string данный 
// тип можно привести с помощью каста одного типа к другому с помощью as - но нужно пользоваться аккуратно

fetchWithAuth('asdf', method as 'post')