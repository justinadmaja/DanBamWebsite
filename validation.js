

function formValidation(){
	    var name = document.forms["contactForm"]["Name"];
        var email = document.forms["contactForm"]["Email"];
        var location = document.forms["contactForm"]["Location"];
        var phone = document.forms["contactForm"]["Phone"];
        var message = document.forms["contactForm"]["Message"];
        var gender = document.forms["contactForm"]["gender"];
        var agreement = document.forms["contactForm"]["agreement"];
        var text = document.getElementById("validationinfo");



        if (name.value == "") {
            text.innerText = "Please enter your name.";
            name.focus();
            return false;
        }
        else if(email.value == ""){
            text.innerText = "Please enter your email.";
            email.focus();
            return false;
        }
        else if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value) == false)
        {
            text.innerText = "Wrong email format!";
            email.focus();
            return false;
        }
        else if(location.selectedIndex < 1){
            text.innerText = "Please enter branch location.";
            location.focus();
            return false;
        }
        else if(phone.value == ""){
            text.innerText = "Please enter your phone number.";
            phone.focus();
            return false;
        }
        else if (isNaN(phone.value) == true){
            text.innerText = "Phone number only contains digits.";
            phone.focus();
            return false;
        }
        /* check if phone has alphabets */
        else if (message.value == ""){
            text.innerText = "Please enter your message.";
            message.focus();
            return false;
        }
        else if(!gender[0].checked && !gender[1].checked && !gender[2].checked ){
            text.innerText = "Please specify your gender.";
            return false;
        }
        else if(agreement.checked == false){
            text.innerText = "Please agree to receive the latest information.";
            agreement.focus();
            return false;
        }

        return true;
}


