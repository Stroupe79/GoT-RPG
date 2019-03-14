// variable declarations
$(document).ready(function() {

var usrHealth
var userAttack
var cntrAttack
var defHealth
var snow
var jamie
var dany
var stannis


    console.log("Ready")

$("#picChange").attr('src', './assets/images/stannis.jpg');

$("#snow").click(function() {
    console.log("Test");
    picChange("#snow");
});

function picChange(){
$("#picChange").show(function() {
   if ((this).attr === "./assets/images/snow.jpg"){
        $(this).attr('src', './assets/images/stannis.jpg');
        console.log("Ran");
   }
});
}
// functions - foreach click add to userAttack - remove from defHealth - remove from usrHealth
$("#battle").click(function() {
    console.log("Test");
    picChange();
});

$("select").change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "div" ).text( str );
  })
  .change();

});

// $(selector).append(content);



