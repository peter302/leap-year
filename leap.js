var r=function(year){
  if(year % 4 ===0){
    return true;}else{return false;}
  };
  $(document).ready(function(){
  $("form#enter").submit(function(event){
    event.preventDefault;
    var year=parseInt($("enter").val());
    $(".poa").text("year")

  });
});
