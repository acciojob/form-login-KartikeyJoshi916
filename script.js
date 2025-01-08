function getFormvalue() {
    //Write your code here
	let arr=document.getElementById("form1");
	let fname=arr[0].value;
	let lname=arr[1].value;
	let message=fname+" "+lname;
	alert(message);
}
