/* Add your JavaScript to this file */ 
window.onload=function(){
    let submit = document.getElementsByClassName("btn");
    let form = document.getElementById("email");
    let msg = document.getElementsByClassName("message");

    submit[1].addEventListener("click",function(event){
        event.preventDefault();

        if (form.value !="" && form.value.includes("@")){
            msg[0].innerHTML = "Thank you! Your email address " + form.value +" has been added to out mailing list!"
        }else{
            msg[0].innerHTML = "Please enter valid email address" 
        }
    })
}