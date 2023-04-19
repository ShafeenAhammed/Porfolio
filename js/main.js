
// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 


$("#data").submit((e) => {
    e.preventDefault()
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbyRdU8pa5eAjMjNBWAbcDcpq6MF0E0aFe48Iz3hsKwpWV8g0ie4UeKrG-Q-9wbKvWVc/exec",
      data: $("#data").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully")
        window.location.reload()
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error")
  
      }
    })
  })