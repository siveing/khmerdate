const { KhmerDate } = require("..");

const date = "2002-08-06";
const dateKhmer = new KhmerDate(date);

console.log(dateKhmer.dateTimeFormat('LLLLT'));
console.log(dateKhmer.dateTimeFormat('LLLL'));
console.log(dateKhmer.dateTimeFormat('L'));
console.log(dateKhmer.dateTimeFormat('LT'));
console.log(dateKhmer.format('LLL'));
