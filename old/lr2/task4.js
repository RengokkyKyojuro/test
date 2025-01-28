const str = 'привіт світ';
const result = str.slice(0, -1) + str.charAt(str.length - 1).toUpperCase();
console.log(result)

const result1 = str.substring(0, str.length - 1) + str[str.length - 1].toUpperCase();
console.log(result1);