// diff tabs diff content items start
let tabs=document.querySelectorAll(".tabs h3");
let tabcontent=document.querySelectorAll(".tabs-content div");


tabs.forEach((tab,index)=>{

    tab.addEventListener("click",()=>{
        tabcontent.forEach(content=>{
            content.classList.remove("active");
        });
        tabs.forEach(tab =>{
            tab.classList.remove("active");
        });
        tabcontent[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});
// diff tabs diff content items end

// -------------gallery part----------------

//-----------------go to button start-------------
    let mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    // -----------------------go to button end ------------
    
    // -----------------------FQAs start------------
   const faqs=document.querySelectorAll(".faq");
   faqs.forEach(faq=> {
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    });
   });

   

   
//validation
const namee= document.getElementById('name');
const email= document.getElementById('email');
const phone= document.getElementById('phone');
const date=document.getElementById('date');
const email_error =document.getElementById('email_error');
const name_error =document.getElementById('name_error');
const phone_error =document.getElementById('phone_error');
const date_error=document.getElementById('date_error');
const register = document.getElementById('register');

function validated(){
if(email.value==''){
 email_error.style.display="block";
 }else{
 email_error.style.display="none"
 }
if(namee.value ==''){
  name_error.style.display="block";
  }else{
    name_error.style.display="none"
  }
if(phone.value==''){
    phone_error.style.display="block";
    } else{
      phone_error.style.display="none"
    }
if(date.value==''){
  date_error.style.display="block";
    }
    else{
      date_error.style.display="none";
    }
  }
  register.addEventListener("submit", (e) => {
    e.preventDefault();
    validated();
  



    
    // handle submit
  });
