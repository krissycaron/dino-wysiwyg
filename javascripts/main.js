///in class Ajax and WYSIWYG demo 
///grabbing dinos from json 

//gobal variable to hold the array
var dinoArray = [];

/// ajax get method to get data
//grab the data by calling file path 
$.ajax('./db/dinosaurs.json').done(function(data){
	console.log(data);
	//putting the data in dinosaurs.json equal to the dino arrray variable.
	//"dinosaurs is the key to the array of json."
	dinoArray =  data.dinosaurs;
	//pushing the array through the MakeDom function 
	//because that where we knwo the data needs to go.
	makeDom(dinoArray);
	//error handling ... 
}).fail(function(error){
	console.log("You're Busted!", error);
});

//creating a card to print to the Dom.
//only using Jquery when interatcting directly to the DOM and when using AJAX
//parameter (insideHere) is just a place holder
//so when printing the card it will always refence the palce holder and feed that in. 
function makeDom(myArrayToPrint){
	var myDomString = "";
	 for (var i=0; i<myArrayToPrint.length; i++){
	 	console.log(myArrayToPrint);
	 	myDomString += `<div class="dinoCard">`;
	 	myDomString += `<header><h1>${myArrayToPrint[i].type}<h1></header>`;
	 	myDomString += `<section>`;
	 	myDomString += `<img src="${myArrayToPrint[i].img}">`;
	 	myDomString += `<p class="bio">"${myArrayToPrint[i].bio}"</p>`;
	 	myDomString += `</section>`;
	 	myDomString += `<footer>${myArrayToPrint[i].info}</footer>`;
	 	myDomString +=`</div>`;
	}
	//target to print to dom with jquery
	//taking the dinosaurs and adding the data to the string. 
	$("#dinosaurs").append(myDomString);
}


