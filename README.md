# khmerdate

Installation
------------

```bash
npm i @siveing/khmerdate
```

Usage
------------
```
import { KhmerDate } from '@siveing/khmerdate';

const date = "2002-08-06";
const dateKhmer = new KhmerDate(date);

console.log(dateKhmer.dateTimeFormat('LLLLT'));
console.log(dateKhmer.dateTimeFormat('LLLL'));
console.log(dateKhmer.dateTimeFormat('L'));
console.log(dateKhmer.dateTimeFormat('LT'));
console.log(dateKhmer.format('LLL'));
```

Testing
--------------
You can run the testing by in `testing` 
And run the command `npm test`.

Support
--------------
Pull requests and new issues are of course welcome. If you have any questions, comments or feedback you can contact us by email at siveing.huyy@gmail.com. We will try to answer your questions, but we have limited manpower so please, be patient with us.