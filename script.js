var form = document.getElementById('form')
form.addEventListener('submit', function(event) {

    event.preventDefault();

    var FromZip = document.getElementById("FCity").value;
    var ToZip = document.getElementById("TCity").value;
    var weight = document.getElementById("weight").value;

    console.log(FromZip, ToZip, weight);
})
