// Burger Menu
const burger = document.querySelector(".burger")
const navBar = document.querySelector(".header__nav-bar")

burger.addEventListener('click', () => {
  navBar.classList.toggle('active');
});


//Tech Stack

stack = document.querySelector(".stack__card")
techStacks = [["JavaScript", "javascript"],["HTML","html"],["CSS", "css"] ,["ExpressJS","express"],["BootStrap", "bootstrap"],["TypeScript", "typescript"],["react","React"],["Node", "node"],["NestJS","nestjs"],["MySQL","mysql" ],["Firebase", "firebase"], ["MongoDB","mongodb"],["Python", "python"], ["C", "c"], ["Java", "java"], ["Flutter", "flutter"],["Git", "git"], ["MipsAssembly", "assembly"]]
stack && ( 
    techStacks.forEach(element => {
    imge = `asset/${element[1]}.png`
    namee = element[0]
    stack.innerHTML +=
        `<div class="stack__container">
        <div class="stack__figure">
            <img class="stack__image" src="${imge}" alt="" class="src">
        </div>
        <h3 class="stack__name">${element[0]}</h3>
    </div>`

})
)


//form validation
const form = document.querySelector(".form")
const fname = document.getElementById("fname")
const email = document.getElementById("email")
const comment = document.getElementById("comment")
const submit = document.querySelector(".form__button")
const success = document.querySelector(".form__success")

const error = document.getElementsByClassName("form__error")
const fnameError = error[0]
const emailError = error[1]
const commentError = error[2]

form.addEventListener("submit", e =>{
  e.preventDefault();
  const fnameEdited = fname.value.trim()
  const emailEdited = email.value.trim()
  const commentEdited = comment.value.trim()
  
  if (fnameEdited === "") {
    success.innerHTML = ""
    fnameError.innerText = "Please enter your name !"
  }else{
    fnameError.innerText = ""
  }
  if (emailEdited === ""){
    success.innerHTML = ""
    emailError.innerText = "Please enter your email !"
  }else{
    emailError.innerText = ""
  }
  if (commentEdited === ""){
    success.innerHTML = ""
    commentError.innerText = "Please enter your comment !"
  }else{
    commentError.innerText = ""
  }

  if (fnameEdited !== "" && emailEdited !== "" && commentEdited !== ""){
    success.innerHTML = "Thank you!!! we recieved your feedback."
    fname.value = ""
    email.value = ""
    comment.value = ""
  }
})

