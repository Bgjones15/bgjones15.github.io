var board;
$(function() {

    if (document.location.hash == "" || document.location.hash == "#") {
        document.location.hash = "#home";
    };

    replaceSymbols(["<",">","/"]);
        
    board = $('#gameboard');
    init()

    var app = document.getElementById("name");

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

function init(){
    for (let i = 0; i < 10; i++) {
        board.append($(`<div id="row${i}" class="row"></div>`));
        for (let j = 0; j < 10; j++) {
            if(Math.floor(Math.random() * 5) == 1){
                $(`#row${i}`).append($(`<button id='${i}-${j}' class='gamebutton bomb'>`));
            }
            else{
                $(`#row${i}`).append($(`<button id='${i}-${j}' class='gamebutton safe'>`));
            }
        }
    }

    generateNumbers();
    $(".gamebutton").click(function() {
        userClick($(this));
    });

    $(document).on("contextmenu", ".gamebutton", function(e){
        userRightClick($(this));
        return false;
     });
}

function generateNumbers(){
    $(".safe").each(function() {
        let numbers = $(this)[0].id.split("-");
        column = numbers[0];
        row = numbers[1];
        let adjacents = generateAdjacent(column, row, 9);
        let bombs = 0;
        console.log(column, row);
        adjacents.forEach(a => {
            if($(`#${a}`)[0].className.includes("bomb")){
                bombs++;
            }
        });
        $(this).addClass(""+bombs);
    });
}

function generateAdjacent(x, y, size){
    let adjacent = [];
    //top row
    if(x!=0){
        adjacent.push(`${parseInt(x)-1}-${parseInt(y)}`);
        if(y>0){
            adjacent.push(`${parseInt(x)-1}-${(parseInt(y)-1)}`);
        }
        if(y<size){
            adjacent.push(`${parseInt(x)-1}-${parseInt(y)+1}`);
        }
    }
    //left, right
    if(y>0){
        adjacent.push(`${parseInt(x)}-${parseInt(y)-1}`);
    }
    if(y<size){
        adjacent.push(`${parseInt(x)}-${parseInt(y)+1}`);
    }

    //bottom row
    if(x!=size){
        adjacent.push(`${parseInt(x)+1}-${parseInt(y)}`);
        if(y>0){
            adjacent.push(`${parseInt(x)+1}-${parseInt(y)-1}`);
        }
        if(y<size){
            adjacent.push(`${parseInt(x)+1}-${parseInt(y)+1}`);
        }
    }
    return adjacent;
}

function userClick(button){
    if(button[0].className.includes("bomb")){
        alert("Boom");
    }
    else{
        button.text(button[0].className[button[0].className.length - 1]);
    }
}

function userRightClick(button){
    console.log($(button).css('background'));
    if($(button).css('background').includes("rgb(255, 0, 0)")){
        $(button).css('background', '');
    }
    else{
        $(button).css('background', 'red');
    }
}


