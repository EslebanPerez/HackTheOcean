const formElement = document.getElementById("form")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let beaches = document.getElementById("beaches").value;
    let avMonday = document.getElementById("avMonday").value;
    let avTuesday = document.getElementById("avTuesday").value;
    let avWednesday = document.getElementById("avWednesday").value;
    let avThursday = document.getElementById("avThursday").value;
    let avFriday = document.getElementById("avFriday").value;
    let avSaturday = document.getElementById("avSaturday").value;
    let avSunday = document.getElementById("avSunday").value;

    let transaction = { firstName: firstName,lastName: lastName, email: email,age: age, city: city, beaches: beaches,
        avMonday: avMonday, avTuesday: avTuesday, avWednesday:avWednesday, avThursday: avThursday, avFriday: avFriday, avSaturday:avSaturday, avSunday: avSunday };
    let transactionJson = JSON.stringify(transaction);
    console.log(transactionJson);
    fetch('http://localhost:3000/v1/volunteer/', {
        method: 'Post',
        body: transactionJson
    })
    


})
