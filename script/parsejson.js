$(function() {
    $.getJSON( "./items.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push(val);
    });
    console.log(items);
    
  });
});