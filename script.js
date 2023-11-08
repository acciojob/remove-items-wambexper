//your JS code here. If required.

// const button=document.querySelector("input")[0];
function solve(){
	const select=document.querySelector("#colorSelect");
 const selectedvalue=select.value;
	let option=select.children;
	for(let i=0;i<option.length;i++){
		if(option[i].value==selectedvalue){
			option[i].remove();
			return;
		}
	}
}