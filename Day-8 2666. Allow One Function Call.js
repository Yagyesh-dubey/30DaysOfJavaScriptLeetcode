var once = function(fn) {

	let Flag = true
	return function(...args){

		if(Flag == true)
		{
			const result = fn(...args);
			Flag = false
			return result;
		}
		else
		{
			return undefined;
		}
	}
};
