var FirstName = document.querySelector('#fname');
var LastName = document.querySelector('#lname');
var Email = document.querySelector('#email');
var Password = document.querySelector('#password');
var Default = document.querySelector('button');


Default.addEventListener('click', function(e) {
    e.preventDefault();
    formValidation();
});

function formValidation() {
    if (FirstName.value.trim()=== "") {
        errorValidation(FirstName, '<em>First Name cannot be empty</em>');
    } else {
        successValidation(FirstName);
    }

}