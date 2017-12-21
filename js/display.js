$(document).ready(function() {
  var flag=false;
  $("#register").click(function(){
    $("#register_display" ).fadeIn( "slow", function() {});
  });
  $( "#register_form" ).click(function() {
    flag=true;
  });
  $("#register_display").click(function(){
    if(flag){
      flag=false;
    }
    else{
        $("#register_display" ).fadeOut( "slow", function() {});
        flag=false;
    }
  });
});
