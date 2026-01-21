export const handleClick = (url) => {
    if(!url) return;
    window.open(url, '_blanck');
}