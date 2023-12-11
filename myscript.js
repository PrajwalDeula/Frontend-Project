"use strict";


const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

const circles = document.querySelectorAll(".circle");
const progressEl = document.getElementById("progress");

let currentActive = 1;




//Next One//
function nextOne(){
form1.style.left = '-450px';
form2.style.left = '25px';

currentActive++;
if(currentActive>circles.length){
	currentActives = circles.length;
}
incrementnumber()

update();

}

//Next Two//

function nextSecond(){
	form2.style.left = '-450px';
	form3.style.left = '25px';

	incrementnumber()

update();
}

//Previous One//

function previousOne(){
	form1.style.left = '25px';
	form2.style.left = '450px';
	
	decrementnumber()
	update();
}

//Previous Two//
function previousTwo(){

form2.style.left = '25px';
form3.style.left = '450px';

decrementnumber()
update();
} 
//update the progress//
function update(){
	circles.forEach((circle,indx)=>{
		if(currentActive<indx){
			circle.classList.add('active');
		}
		else{
			circle.classList.remove('active');
		}}

	);}

	function incrementnumber(){
		currentActive++;
		if(currentActive>circles.length){
			currentActive = length;
		}
	}

	function decrementnumber(){
		currentActive--;
		if(currentActive<1){
			currentActive = 1;
		}
	}

//Button Events//
const btnEvents = () => {
	const next1 = document.getElementById("next1");
	const next2 = document.getElementById("next2");
	const previous1 = document.getElementById("previous1");
	const previous2 = document.getElementById("previous2");

	next1.addEventListener("click",nextOne);
	next2.addEventListener("click",nextSecond);
	previous1.addEventListener("click",previousOne);
	previous2.addEventListener("click",previousTwo);

	
};

document.addEventListener("DOMContentLoaded",btnEvents);

