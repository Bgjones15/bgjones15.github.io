$(function() {
    $.getJSON( "./items.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
        $("#list").append(`<li>${val.item} ${val.description} <a href="${val.link}">link</a></li>`);
    });
  });
});