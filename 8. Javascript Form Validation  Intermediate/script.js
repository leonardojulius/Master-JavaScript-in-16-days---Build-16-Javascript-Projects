/*let = keyword in JavaScript: The let keyword is an improved version of the var keyword. 
Scope: block scoped: The scope of a let variable is only block scoped. It can’t be accessible outside the particular block ({block}). Let’s see the below example.
const = keyword in JavaScript: The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.
var = can be access globally

*/
const form = document.querySelector('.form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')

/*Preventing reloading on submission */

form.addEventListener('submit', e=> {
   e.preventDefault(); // preventing reloading the submission
   validatedInputs();
})

/* to get the element(id) parent elements,
target its error class, give it a message, add error class and remove  */

const setError = (element, message) =>{
    const input = element.parentElement;
    const error = input.querySelector('.error');
    error.textContent = message;
    input.classList.add('error');
    input.classList.remove('sucess');
}

/* */
const setSucess = element =>{
    const input = element.parentElement;
    const error = input.querySelector('.error');
    error.textContent = '';
    input.classList.add('success');
    input.classList.remove('error');


}
/* Checking if the input is an email */

const validEmail = email => {
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase())
}
/* Trimming all the white spaces */
const validatedInputs = ()=> {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    
    
}
function validatedInputs() {

}
