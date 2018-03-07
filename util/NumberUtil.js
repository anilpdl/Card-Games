class NumberUtil{

	static sortTwoNumbers(a, b) {
		return a-b;
	}

	static sortArrayOfNumbers(_sortValues){
		let sortValues = [..._sortValues];		
		return 	(sortValues.sort(this.sortTwoNumbers));
	}

}

module.exports = NumberUtil;