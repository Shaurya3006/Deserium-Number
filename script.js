var num;
function digit_count(x){
	var count=0;
	while (x!=0) {
		x=Math.floor(x/10);
		count++;
		// statement
	
	}
	return count;
}
function check(n){
	var count_digit= digit_count(n);
	var sum=0;
	var x=n;

// alert(digit_count(23244));
while(x!=0){
	var r=x%10;
	sum=sum+Math.pow(r,count_digit);
	count_digit--;
	x=Math.floor(x/10);
}
return (sum==n);
}
// console.log(check(463));
function maincall(){
	var number=document.getElementById("numid").value;
	var result=check(number)?"Disarium Number":"Not a Disarium Number";
	document.getElementById("resultdiv").innerHTML="The "+number+"is a "+result;
}
function reset(){
	document.getElementById("numid").value="";
	document.getElementById("resultdiv").innerHTML="";
}