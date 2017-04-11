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
	 	if (i%3 === 0){
	 		myDomString += `<div class="row">`
	 	}
		 	myDomString += `<div class="col-sm-6 col-med-4 dinoCard">`;
		 	myDomString += `<header><h1>${myArrayToPrint[i].type}<h1></header>`;
		 	myDomString += `<section>`;
		 	myDomString += `<img src="${myArrayToPrint[i].img}">`;
		 	myDomString += `<p class="bio">"${myArrayToPrint[i].bio}"</p>`;
		 	myDomString += `</section>`;
		 	myDomString += `<footer>${myArrayToPrint[i].info}</footer>`;
		 	myDomString +=`</div>`;
				if(i%3===2){
				myDomString += `</div>`
				}
	}
	//target to print to dom with jquery
	//taking the dinosaurs and adding the data to the string. 
	$("#dinosaurs").append(myDomString);
}

//click events in jquery Click on the dino card and it will"bubble up" 
//to encapusulate the enitre card of what we have placed the "click" on "this"

$("#dinosaurs").on("click",".dinoCard", function(e){
	$(".dinoCard").removeClass("dottedBorder");
//wrapping it in a jquery object "this"
	$(this).addClass("dottedBorder");
//clear textbox value to an empty string,//focus on the box you re-select it. 
	$("#textbox").val("").focus(); 
});
//eventlistener clicker
$("#textbox").keyup(mirrorText);

function mirrorText(e){
	var selectedCard = $(".dottedBorder"); //only returns the one selected card ie the one that the card was clicked on 
	var bioTyped = $("#textbox").val(); //entered information in text box from user
	var bio = $(".dottedBorder").find("p.bio"); //finding the p in the class bio, we just want the selected div, with that certain tag (ie: <p> in the div) so it looks through all the children of the elements
	// bio = bioTyped;
	bio.html(bioTyped); //jquery

	if (e.keyCode === 13){
		$("#textbox").val("");
	}
}













