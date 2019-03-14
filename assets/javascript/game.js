// variable declarations
$(document).ready(function() {

var usrHealth = 100;
var userAttack = 6;
var cntrAttack = 5;
var defHealth = 100;
var snow
var jamie
var dany
var stannis


    console.log("Ready");

// click events

$("#snow").click(attPic("snow.jpg")); 
$("#jamie").click(attPic("jamie.jpg")); 
$("#dany").click(attPic("dany.jpg")); 
$("#stannis").click(attPic("stannis.jpg")); 
$("#battle").click( battle());





// functions - foreach click add to userAttack - remove from defHealth - remove from usrHealth


// $("select").change(function () {
//     var str = "";
//     $( "select option:selected" ).each(function() {
//       str += $( this ).text() + " ";
//     });
//     $( "div" ).text( str );
//   })
//   .change();

  
  function attPic(attacker){
      $("#attackSpace").append("<img src=./assets/images/" + attacker  + ' height="300px"' + "class='col-md-3'" + ">"  );
      console.log(attacker);
    }


  function battle(){
      defHealth = defHealth - userAttack;
      userAttack = userAttack + 6;
      usrHealth = usrHealth - cntrAttack;
      console.log(defHealth);
      console.log(userAttack);
      console.log(usrHealth);
  };

});


// $(selector).append(content);



