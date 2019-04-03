$(document).ready(function(){
  $("form#stress-survey").submit(function(event){
    event.preventDefault();
    $("#stress-responses").show();
    $("input:checkbox[name=stressors]:checked").each(function(){
      var lifeStressors = $(this).val();
      $('#stress-responses').append(lifeStressors + "<br>");
    });
    $("#mitigation-responses").show();
    $("input:checkbox[name=stressMitigators]:checked").each(function(){
      var stressBuster = $(this).val();
      $('#mitigation-responses').append(stressBuster + "<br>");
    });
    $('#stress-survey').hide();
  });
});
