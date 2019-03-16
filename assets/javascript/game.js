// variable declarations


$(document).ready(function () {

        var usrHealth = 100;
        var usrAttack = 6;
        var cntrAttack = 15;
        var defHealth = 100;
        var wins = 0;
        var losses = 0;
        var snow
        var jamie
        var dany
        var stannis


        console.log("Ready");

        // click events


        // confirm("Choose your opponent")
        // select();
        
        $("#wins").text("Wins = " + wins);
        $("#losses").text("Losses = " + losses);

        gameStart ();
        // gameLoop();
        
        function gameStart (){
        confirm("Choose your champion")
                chooseChr();
                gameLoop ();
        };

        function gameLoop (){
                confirm("Choose your Opponent");
                chooseChr();
                alert("Press the Battle button to begin");
                };
        


        function chooseChr(){
        $("#snow").click(function () {
                attPic("snow.jpg");
        });
        $("#jamie").click(function () {
                attPic("jamie.jpg");
        });
        $("#dany").click(function () {
                attPic("dany.jpg");
        });
        $("#stannis").click(function () {
                attPic("stannis.jpg");
        });
        };


        $("#battle").click(function () {
                battle(usrHealth, usrAttack);
        });



        // functions - foreach click add to userAttack - remove from defHealth - remove from usrHealth


        // $("select").change(function () {
        //     var str = "";
        //     $( "select option:selected" ).each(function() {
        //       str += $( this ).text() + " ";
        //     });
        //     $( "div" ).text( str );
        //   })
        //   .change();


        function attPic(attacker) {
                $("#attackSpace").append("<img src=./assets/images/" + attacker + ' height="300px"' + "class='col-md-3'" + ">");
                console.log(attacker);
        }



        function battle() {
                defHealth = defHealth - usrAttack;
                usrAttack = usrAttack + 6;
                usrHealth = usrHealth - cntrAttack;
                gameCounter();
                console.log(usrHealth);
                console.log(usrAttack);
                console.log(defHealth);
        };

        //     function wins(){
        //         if (defHealth = 0) {
        //          wins = + 1;
        //         }

        //     }

        function gameCounter() {
                if (defHealth <= 0) {
                        wins = +1;
                        alert("You Win this round");
                        gameLoop ();
                } else if (usrHealth <= 0) {
                        losses = +1;
                        alert("You lose");
                }
                $("#wins").text("Wins = " + wins);
                $("#losses").text("Losses = " + losses);
        }



});