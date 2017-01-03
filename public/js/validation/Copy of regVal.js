/**
 * @author Clayton G. Ousley
 * 
 * Validates Registration Form
 */

document.getElementById("regSubmit").addEventListener("click", function(evt){
	
	var inputs = document.querySelectorAll(".hasError"); //grabs all the inputs that have error functions
	var num2check = inputs.length; //gets the number of errorable inputs
	var inputs2check = []; //creates empty array to hold errorable input values
	
	for (i = 0; i < num2check; i++){ //gathers all errorable inputs and places them in array
		inputs2check.push(inputs[i].value);
	}
		
	var alerts4inputs = document.querySelectorAll(".regError"); //gathers all alert icons
				
	var regex = [
		/^[A-Za-z\s\-]+$/ig,//First Name: Alpha, Num, Space, Hyphen
		/^[A-Za-z\s\-]+$/ig,//Last Name: Alpha, Num, Space, Hyphen
		/^[0-9]+[A-Za-z\s\-]* ([A-Za-z\s\-]+)+[0-9A-Za-z]*$/gi,
		/^[A-Za-z\s\-]+$/ig,//City: Alpha, Num, Space, Hyphen
		/[0-9]{5}$/g,//ZIP: Five Numbers
		/(([\d]{3})|(\([\d]{3}\)))(((-)|(\s)|()))([\d]{3})(([-]|(\s)|())([\d]{4}))$/g,//Phone: (xxx) xxx xxxx or (xxx)xxxxxxx or (xxx) xxx-xxxx or xxx xxx xxxx or xxxxxxxxxx or xxx-xxx-xxxx  
		/^[\w.]+[@]([\w]+[.])+((com)|(org)|(edu)|(net)|(biz)|(uk)|(ru)|(me)|(co)|(info)|(gov)|(mil)(ca))$/gi, //Email
		/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^.])(?=.*[!@#$%^&*]).{8,10}$/gi, //Password: 8-10 of ALPHA alpha num !@#$%^&*  
		/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^.])(?=.*[!@#$%^&*]).{8,10}$/gi //Password: 8-10 of ALPHA alpha num !@#$%^&*
	];
	
	var i = 0;
		
	do {//Validates all inputs against regex rules
		
		if (regex[i].test(inputs2check[i])){ //if pass, alert icon remains hidden
				alerts4inputs[i].style.display = "none";
		}
	
		else {//if fail, alert icon appears
			evt.preventDefault();//prevents from submittal
			alerts4inputs[i].style.display = "inline-block";
		}
	
	i++;
	
	}	while (i < num2check);
	
	
	
	// do {//Validates email
// 		
		// if inputs2check[i] == "a@b.com"){ //if pass, alert icon remains hidden
				// $('#errorMessage').modal({
  				// show: true
				// })
		// }
// 	
		// else {//if fail, alert icon appears
			// $('#errorMessage').modal({
  			// show: false
			// })
		// }
// 	
	// i++;
// 	
	// }	while (i = 6);

	
		if (inputs2check[7] == inputs2check[8] && inputs2check[8] !== ""){ //checks to see if both password fields match AND if confirm password field is filled
			alerts4inputs[8].style.display = "none"; //if yes to both, confirm password alert icon remains hidden
		}
	
		else { //if one or both above conditions fail, confirm password icon appears
			evt.preventDefault();//prevents from submittal
			alerts4inputs[8].style.display = "inline-block";
		}
	
		// if (inputs2check[6] == 'a@b.com'){
			// evt.preventDefault();//prevents from submittal
			// $('#errorMessage').modal("show");
		// }
	
}, false);