console.log("Hello World !");

var button = document.querySelector('#button');

button.addEventListener('click', function () {
    fetchJson().then(function(res) {
        console.log(res);
    })
});

function fetchJson() {
    return fetch('/test').then(function (res) {
        return res.json();
    }).then(function (json) {
        return json;
    });
}