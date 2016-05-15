'use strict';

function thousands_separators(num) {
	var arr,index,flag;
	num = num.toString();
	if (num.indexOf(".") != -1) {
		if (num.length>3) {

			index = num.indexOf(".");
			//整数部分
			var num_int = num.substring(index,0);
			//小数部分
			var num_float = num.substring(index);
			
			arr = num_int.split("");
			arr.reverse();

			flag = parseInt((arr.length-1)/3);
			for(var i = 0;i<flag;i++){
				//添加第一个,后，length+1,故改变之后,插入的位置
				arr.splice(3+i*4, 0,",");
			}
			
			arr.reverse();
			num = arr.join("");
			//组合两个字符串
			num = num + num_float;
		}
	 		
	 } else {
	 	if (num.length>3) {
	 		arr = num.split("");
	 		arr.reverse();
	 		
	 		flag = parseInt((arr.length-1)/3);
			for(var i = 0;i<flag;i++){
				//添加第一个,后，length+1,故改变之后,插入的位置
				arr.splice(3+i*4, 0,",");
			}

	 		arr.reverse();
	 		num = arr.join("");
	 	}
	 	
	 }
	return num;
}

module.exports = thousands_separators;

console.log(thousands_separators(100000000000.222));