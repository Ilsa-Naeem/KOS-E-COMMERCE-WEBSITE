$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            300:{
                items:1
            },                          
            600:{
                items:2
            },
            850:{                                                                                                                                                           
                items:3
        },                                                                                                                                                          
            1000:{
                items:4
            }
        }
    })   
})
let lactive=document.getElementById("loginid");
let sactive=document.getElementById("signupid");
let sform=document.getElementById("signupform");
let lform=document.getElementById("loginform");

function show_signup_form()
{
  
   sform.classList.remove("d-none");
   sform.classList.add("d-block");  
   lform.classList.add("d-none");
   
//    for bottom border

   lactive.classList.remove("loginbottom");
   lactive.classList.remove("activeform");
   sactive.classList.add("activeform");
   

}
function show_login_form()
{

   lform.classList.remove("d-none");
   lform.classList.add("d-block"); 
   sform.classList.add("d-none");

//    for bottom border
lactive.classList.remove("loginbottom");
sactive.classList.remove("activeform");
lactive.classList.add("activeform");
}                                                                                                       

// search barr 
document.getElementById('searchicon').onclick = function() {
    document.getElementById('search').style.display = 'block';
    document.getElementById('clearicon').style.display = 'block';
    // document.getElementById('search').focus();
    document.getElementById('searchicon').style.display = 'none';
  }
  document.getElementById('clearicon').onclick = function() {
    document.querySelector('#search').value = "";
    document.getElementById('searchicon').style.display = 'block';
    document.getElementById('search').style.display = 'none';
    document.getElementById('clearicon').style.display = 'none';
  }