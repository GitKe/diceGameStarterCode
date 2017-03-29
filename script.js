$(document).ready(function(){
  
  //Place your code here
  var dice = Math.floor(Math.random() * 6) + 1;
  $("#roll-dice").click(function() {
    $("p").html(Math.floor(Math.random() * 6)+1);
  });
  
  



  
});
