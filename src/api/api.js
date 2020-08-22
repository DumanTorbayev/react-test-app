export const onFetch = value => {
    return fetch(`https://api.github.com/users/${value}`);
}
