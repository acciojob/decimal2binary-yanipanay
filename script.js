function decimalToBinary(num) {
  // Write your code here
	let ans = '';
	while(num>0){
		if((num&1)>0) ans = "1"+ans;
		else ans = '0'+ans;

		num= (num>>1)
	}

	return ans;
}

window.decimalToBinary = decimalToBinary;