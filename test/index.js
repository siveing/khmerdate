const { KhmerDate } = require("..");

const dateKhmer = new KhmerDate();

console.log(dateKhmer.dateTimeFormat('LLLLT'));
console.log(dateKhmer.dateTimeFormat('LLLL'));
console.log(dateKhmer.dateTimeFormat('L'));