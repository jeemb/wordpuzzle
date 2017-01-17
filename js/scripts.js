$(document).ready(function(){
  $("form#stress-signs").submit(function(event){
    event.preventDefault();

    var userResponses = [];
    $("input:checkbox[name=stress-signs]:checked").each(function(){
      var stressigns = $(this).val();
      userResponses.push(stressigns);

    if (userResponses.length = 2) {
      $("#stress-causes").show();
    } else {
      $("#health-causes").show();
    });
//
//     $("#stress-causes").show();
//     $("input:checkbox[name=stress-signs]:checked").each(function(){
//       var stresssigns = $(this).val();
//
//     });
//     $("#fun-responses").show();
//     $("input:checkbox[name=fun-transportation]:checked").each(function(){
//       var funTransportationMode = $(this).val();
//       $('#fun-responses').append(funTransportationMode + "<br>");
//     });
//     $('#transportation_survey').hide();
//   });
// });

});
