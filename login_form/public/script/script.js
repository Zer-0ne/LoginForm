let signBtn = document.querySelector('#signBtn')
let loginBtn = document.querySelector('#loginBtn')
let moveBtn = document.querySelector('#moveBtn')
let action = document.querySelector('.action')
let input = document.getElementsByClassName('input')
let signUpInput = document.querySelector('.signUpInput')
let loginInput = document.querySelector('.loginInput')
let warning = document.querySelector('.warning')
loginBtn.addEventListener('click',()=>{
    moveBtn.value = 'Login'
    action.style.transform = 'translateX(111.5%)'
    signUpInput.style.display = 'none'
    loginInput.style.display='block'
    

})
signBtn.addEventListener('click',()=>{
    moveBtn.value = 'SignUp'
    action.style.transform = 'translateX(1px)'
    signUpInput.style.display = 'block'
    loginInput.style.display='none' 
    
})