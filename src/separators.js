'use strict';

function thousands_separators(num) {
	var arr,index,flag;
	num = num.toString();

	//判断字符串是否有小数点
	if (num.indexOf(".") != -1) {
		if (num.length>3) {

			index = num.indexOf(".");
			//整数部分
			var num_int = num.substring(0,index);
			//小数部分
			var num_float = num.substring(index);
			
			//将整数部分转换成数组并倒置
			arr = num_int.split("");
			arr.reverse();

			//计算出需插入多少个",",并赋给flag
			flag = parseInt((arr.length-1)/3);

			//遍历数组,将","插入进去
			for(var i = 0;i<flag;i++){
				//添加第一个,后，length+1,故改变之后,插入的位置
				arr.splice(3+i*4, 0,",");
			}
			
			//再次将新数组倒置,使其正常显示
			arr.reverse();
			//将数组转换为字符串
			num = arr.join("");
			//组合两个字符串
			num = num + num_float;
		}
	 		
	 } else {//没有小数点的情况下
	 	if (num.length>3) {
	 		arr = num.split("");
	 		arr.reverse();
	 		
	 		flag = parseInt((arr.length-1)/3);
			for(var i = 0;i<flag;i++){
				arr.splice(3+i*4, 0,",");
			}

	 		arr.reverse();
	 		num = arr.join("");
	 	}
	 	
	 }
	return num;
}

module.exports = thousands_separators;

console.log(thousands_separators());