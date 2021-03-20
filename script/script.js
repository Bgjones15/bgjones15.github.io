$(function() {

    if (document.location.hash == "" || document.location.hash == "#") {
        document.location.hash = "#home";
    };

    replaceSymbols(["<",">","/"]);
        

    var app = document.getElementById('name');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Barett!')
    .pauseFor(2500)
    .start();
});

function replaceSymbols(symbols){
    symbols.forEach(n => {
        $('body :not(script)').contents().filter(function() {
            return this.nodeType === 3;
          }).replaceWith(function() {
              return this.nodeValue.replace(n,`<span class="symbol">${n}</span>`);
          });
    });
}
