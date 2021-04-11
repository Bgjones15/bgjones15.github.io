$(function() {
    $.getJSON( "./items.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
        $("#list").append(`<li>${val.item} ${val.description?"":val.description} ${val.link}</li>`)
    });
  });
});