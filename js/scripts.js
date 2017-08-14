$(document).ready(function() {
  $("#favorite").submit(function(event) {
    event.preventDefault();
  var food = $("input#food").val();
  var movie = $("input#movie").val();
  var dinosaur = $("input#dinosaur").val();




  var array1 = [food, movie, dinosaur]
  var array2 = [];
  array2.push([array1[1], array1[0], array1[2]]);
    $(".foodOutput").text(array2[0]);
    $(".movieOutput").text(array2[1]);
    $(".dinosaurOutput").text(array2[2]);


    $("#result").show();
    console.log(array2);
    });
});
