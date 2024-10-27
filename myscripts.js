var a;
    function showandhide()
    {
if(a==1)
         {

        document.getElementById("div1").style.display="inline";
        return a=0;
      }
else {
      document.getElementById("div1").style.display="none";

      return a=1;
}
    }





var a;
    function showandhide2()
    {
if(a==1)
         {

        document.getElementById("div2").style.display="inline";
        return a=0;
      }
else {
      document.getElementById("div2").style.display="none";

      return a=1;
}
    }


    var a;
    function showandhide3()
    {
if(a==1)
         {

        document.getElementById("div3").style.display="inline";
        return a=0;
      }
else {
      document.getElementById("div3").style.display="none";

      return a=1;
}
    }



    var a;
    function showandhide4()
    {
if(a==1)
         {

        document.getElementById("div4").style.display="inline";
        return a=0;
      }
else {
      document.getElementById("div4").style.display="none";

      return a=1;
}
    }


    var a;
    function showandhide5()
    {
if(a==1)
         {

        document.getElementById("div5").style.display="inline";
        return a=0;
      }
else {
      document.getElementById("div5").style.display="none";

      return a=1;
}
    }

    var a;
    function showandhide6()
    {
if(a==1)
         {

        document.getElementById("div6").style.display="inline";
        return a=0;
      }
else {
      document.getElementById("div6").style.display="none";

      return a=1;
}
    }



    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var phoneError = document.getElementById('phonenb-error');
    var messageError = document.getElementById('message-error');
    var submitError = document.getElementById('submit-error');

    


  
    function validatename()     
    { 
      var Name = document.getElementById('contact-name').value ;

        if(Name.length == 0){
           nameError.innerHTML= 'Name is required';
           return false;
        } 
if (!Name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
     nameError.innerHTML = 'Write full name';
     return false;
}
        
        nameError.innerHTML = 'valid';
         return true;

}

function validateemail()     
{ 
  var email = document.getElementById('contact-email').value ;

    if(email.length == 0){
       emailError.innerHTML= 'Email is required';
       return false;
    } 
if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Z-a-z]*[\.][a-z]{2,4}$/))
{
 emailError.innerHTML = 'Email Invalid';

 return false;
}
    
    emailError.innerHTML = 'valid';
     return true;

}




function validatephone()     
{
  var phone = document.getElementById('contact-phone').value ;

    if(phone.length == 0){
       phoneError.innerHTML= 'Phone is required';
       return false;
    } 
     
   if(phone.length !== 8){
      phoneError.innerHTML = 'Phone number should be 8 digits'
      return false;
   }


if (!phone.match(/^[0-9]{8}$/)){
 phoneError.innerHTML = 'Only Digits Please';
 return false;
}
    
    phoneError.innerHTML = 'valid';
     return true;

}




function validatemessage()     
{
  var message = document.getElementById('contact-message').value ;
  var required = 30;
  var left = required - message.length ;

     if(left>0){
       messageError.innerHTML= left + 'more characters required';
       return false;
    }
    
    messageError.innerHTML = 'valid';
     return true;
}


function validateForm()
{
 if ( (!validatename() || !validateemail() || !validatephone()) || (!validatemessage())){
      submitError.style.display= 'block';
      submitError.innerHTML= 'Fix the error to submit';
      setTimeout(function() {submitError.style.display= 'none';},3000);
      return false;
 }



}