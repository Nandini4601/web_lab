var nam = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var phoneNumber = document.getElementById("tele");
var zipcode=document.getElementById("zipcode");
function formval()
{   
  if(nam.value=="")
  {
    alert("Name is empty");
    return false;
  }
    else if (nam.value.length < 2 || nam.value.length > 20) {
        alert("Name length should be more than 2 and less than 21");
        nam.focus();
        return false;
      }

      if(email.value=="")
      {
        alert("Email is empty");
        return false;
      }
      // checking email
  else if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }

  if(password.value=="")
  {
    alert("Password is empty");
    return false;
  }
      else if (!password.value.match(/^.{5,15}$/)) {
        alert("Password length must be between 5-15 characters!");
        password.focus();
        return false;
      }
      // checking phone number
      if(phoneNumber.value=="")
      {
        alert("Number is empty");
        return false;
      }
      else if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
        alert("Phone number must be 10 characters long number and first digit can't be 0!");
        phoneNumber.focus();
        return false;
      }
      if(zipcode.value=="")
      {
        alert("Zipcode is empty");
        return false;
      }
     else if (!zipcode.value.match(/^[0-9]{6}$/)) {
        alert("Zip code must be 6 characters long number!");
        zipcode.focus();
        return false;
      }
      return true;
}