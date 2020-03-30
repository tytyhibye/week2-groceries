$(document).ready(function(){
  $("form#list").submit(function(event){
    event.preventDefault();
    $("form#list").hide();
    var theirList = ["item1", "item2", "item3", "item4"];
    console.log(theirList);
    theirList.forEach(function(item) {
      var userInput = $("input#" + item).val();
      $("ul#output").append('<li>' + userInput + '</li>');
    });
  });
});
// flavors.forEach(function(flavor){
//   $("ul#output").append('<li></li>', flavor);
// });