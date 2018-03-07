class NumberUtil{

	static sortTwoNumbers(a, b) {
		return a-b;
	}

	static sortArrayOfNumbers(sortValues){
		
		return 	(sortValues.sort(this.sortTwoNumbers));
	}

}

module.exports = NumberUtil;