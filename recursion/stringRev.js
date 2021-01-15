

const reverse = str => {
    const len = str.length;
    if(str.length == 0) return '';
    return str[len - 1] + reverse(str.substring(0, len - 1))
};
const str = reverse('puneet');

console.log(str);

const reverse2 = str => {
    if(str.length == 0) return;

    reverse2(str.substring(1));
    console.log(str[0]);
}