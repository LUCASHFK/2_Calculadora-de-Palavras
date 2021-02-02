let btn = document.getElementById('btn');
let output = document.getElementById('btn');

btn.addEventlistener('click', function(){
	let str = document.getElementById('word');
	output.innerHTML = str.length; 
)}