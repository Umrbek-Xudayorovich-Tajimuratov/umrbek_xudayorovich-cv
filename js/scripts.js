$(document).ready(function(){



    
    // language sector
    $(".lang-toggle").click(function() {
        $(".arrow-lang").toggleClass("rotateing");
        $(".lang-list").fadeToggle(500);
        $(".selected-lang").toggleClass("rounded-bottom-0");
    });

    // scroll back to top 
    let pageUp = $("#page-up");
    $(window).scroll(()=>{
        if($(window).scrollTop() > 20) pageUp.fadeIn(500);
        else pageUp.fadeOut(500);
    });



    


    $("#tosign").on("click", ()=>{

        
        $("#form").innerHTML=`
        <div class="form-type text-center">Sign Up Form</div>
        <form action="#" method="POST" class="signup">
            <div class="name">
                <input type="text" name="firstName" id="firstName" placeholder="First Name">
                <input type="text" name="lastName" id="lastName" placeholder="Last name">
            </div>
            <div class="emails-s">
                <input type="email" name="email" id="email" placeholder="Email">
            </div>
            <div class="passwords-s">
                <input type="password" name="password" id="passwords1" placeholder="Password">
                <div class="position-relative">
                    <img src="./images/visible-interface.svg" width="25px" class="position-absolute" id="eye-s" onclick="signup()">
                </div>
            </div>
            <div class="passwords-s">
                <input type="password" name="password" id="confirm-password" placeholder="Confirm Password">
                <div class="position-relative">
                    <img src="./images/visible-interface.svg" width="25px" class="position-absolute" id="eye-sconfpass" onclick="signup()">
                </div>
            </div>
            <button type="submit" id="submit-sign">Sign Up</button>

            <div class="invent">
                Already a member? <span class="tosign" id="tolog">Log in now</span>
            </div>
        </form>`;
    });

    
});

function login(){
     // todo: login form

    eyeclick = document.getElementById("eye");
    inputPassword = document.getElementById("password-r");
    eyefunction(inputPassword, eyeclick);
}

function signup() {

     // todo: signup form
    eyeS = document.getElementById("eye-s");
    eyeSPassword = document.getElementById("passwords1");
    eyeConfS =  document.getElementById("eye-sconfpass");
    eyeConfSPassword = document.getElementById("confirm-password");

    eyefunction(eyeSPassword, eyeS);
    eyefunction(eyeConfSPassword, eyeConfS);
    
}

// for open close login signup password 
function eyefunction(inputx, eyex){
    // console.log("baxt", inputx.type);
    
    if(inputx.type =="password"){
        eyex.src = "../images/not-visible-interface.svg";
        inputx.type = "text";
    }
    else{
        eyex.src = "../images/visible-interface.svg";
        inputx.type = "password";
    }
}

function getTechSkills(num){

    getTech=document.getElementById("tech-skills");
    html = document.getElementById("html");
    css = document.getElementById("css");
    bootstrap = document.getElementById("bootstrap");
    sass = document.getElementById("sass");
    jsy = document.getElementById("jsy");
    jquery = document.getElementById("jquery");
    react = document.getElementById("react");
    webpack = document.getElementById("webpack");
    github = document.getElementById("github");

    html.classList.remove("active-tech");
    css.classList.remove("active-tech");
    bootstrap.classList.remove("active-tech");
    sass.classList.remove("active-tech");
    jsy.classList.remove("active-tech");
    react.classList.remove("active-tech");
    jquery.classList.remove("active-tech");
    webpack.classList.remove("active-tech");
    github.classList.remove("active-tech");
    getTech.innerHTML = "";

    switch(num){
        case 0:
            ["Umrbek","Xudayorovich","Tajimsdvvd","HTML"].forEach((element)=>{
                getTech.innerHTML += '<div><span class="white-circle"></span>'+element+'</div>';});
            html.classList.add("active-tech");
            break;
        case 1:
            ["Umrbek","Xudayorovich","Tajimsdvvd","css"].forEach((element)=>{
                getTech.innerHTML += '<div><span class="white-circle"></span>'+element+'</div>';});
            css.classList.add("active-tech");
            break;
        case 2:
            ["Umrbek","Xudayorovich","Tajimsdvvd","bootstrap"].forEach((element)=>{
                getTech.innerHTML += '<div><span class="white-circle"></span>'+element+'</div>';});
            bootstrap.classList.add("active-tech");
            break;
        case 3:
            ["Umrbek","Xudayorovich","Tajimsdvvd","sass"].forEach((element)=>{
                getTech.innerHTML += '<div><span class="white-circle"></span>'+element+'</div>';});
            sass.classList.add("active-tech");
            break;
        case 4:
            ["Umrbek","Xudayorovich","Tajimsdvvd","javascript"].forEach((element)=>{
                getTech.innerHTML += '<div><span class="white-circle"></span>'+element+'</div>';});
            jsy.classList.add("active-tech");
            break;
        case 5:
            ["Umrbek","Xudayorovich","Tajimsdvvd","jquery"].forEach((element)=>{
                getTech.innerHTML += '<div><span class="white-circle"></span>'+element+'</div>';});
            jquery.classList.add("active-tech");
            break;
        case 6:
            ["Umrbek","Xudayorovich","Tajimsdvvd","react"].forEach((element)=>{
                getTech.innerHTML += '<div><span class="white-circle"></span>'+element+'</div>';});
            react.classList.add("active-tech");
            break;
        case 7:
            ["Umrbek","Xudayorovich","Tajimsdvvd","webpack"].forEach((element)=>{
                getTech.innerHTML += '<div><span class="white-circle"></span>'+element+'</div>';});
            webpack.classList.add("active-tech");
            break;
        case 8:
            ["Umrbek","Xudayorovich","Tajimsdvvd","git"].forEach((element)=>{
                getTech.innerHTML += '<div><span class="white-circle"></span>'+element+'</div>';});
            github.classList.add("active-tech");
            break;
    }
}