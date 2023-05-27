import { conHello, fnPlusNum } from "./library_named.js";

console.log(conHello, '이름으로 내보내기입니다');
console.log('1+2 = ', fnPlusNum(1,2));

import * as myLibrary from "./library_named.js";

console.log(myLibrary.conHello, '* 을 사용한 이름으로 내보내기입니다');
console.log('3+4 = ', myLibrary.fnPlusNum(3,4));

import fnFunction from "./library_default.js";

console.log('기본으로 내보내기입니다');
console.log('5+6 = ', fnFunction(5,6));


