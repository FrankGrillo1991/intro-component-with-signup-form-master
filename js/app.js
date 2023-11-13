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

    if (LastName.value.trim()=== "") {
        errorValidation(LastName, '<em>Last Name cannot be empty</em>');
    } else {
        successValidation(LastName);
    }
    if (Email.value.trim()=== "") {
        errorValidation(Email, '<em>Email cannot be empty</em>');
    } else {
        if (!isValid(Email.value())) {
            errorValidation(Email, '<em>Looks like this is not an email<em>');
            errorMailMsg();
        } else {
            successValidation(Password);
        }
    }
}