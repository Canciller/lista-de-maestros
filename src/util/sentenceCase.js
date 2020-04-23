export default function(str) {
    if (!str || typeof str != 'string' || str instanceof String) return null;

    str = str.trim();
    if (str === '') return '';

    str = str.toLowerCase();

    let strSplit = str.split();
    let firstLetter = strSplit[0].charAt(0).toUpperCase();
    strSplit[0] = strSplit[0].slice(1);

    let lastWordIndex = strSplit.length - 1;
    const match = strSplit[lastWordIndex].match(/^\w+\.$/);

    return firstLetter + strSplit.join() + (match ? '' : '.');
}
