$(function() {

    if (document.location.hash == "" || document.location.hash == "#") {
        document.location.hash = "#home";
    };
        

    var app = document.getElementById('home');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hey!')
    .pauseFor(2500)
    .start();

});
