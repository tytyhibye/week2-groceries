$(document).ready(function(){
  $("form#list").submit(function(event){
    event.preventDefault();
    $("form#list").hide();
    var theirList = ["item1", "item2", "item3", "item4"];
    theirList.forEach(function(item) {
      var userInput = $("input#" + item).val();
      // console.log(userInput);
      $("ul#output").append('<li>' + userInput + '</li>');
    });
  });
});
