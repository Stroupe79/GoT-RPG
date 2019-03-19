

$(document).ready(function () {
        
        // variable declarations

        var usrHealth = 100;
        var usrAttack = 6;
        var wins = 0;
        var losses = 0;
        var opp = false;
        var attacker;
        var defender;
        var snow = {defHealth:200, cntrAttack:20};
        var jamie = {defHealth:120, cntrAttack:15};
        var dany = {defHealth:150, cntrAttack:15};
        var stannis = {defHealth:100, cntrAttack:20};

        // character health

        $("#snowHealth").text(snow.defHealth);
        $("#jamieHealth").text(jamie.defHealth);
        $("#danyHealth").text(dany.defHealth);
        $("#stannisHealth").text(stannis.defHealth);

        
        // reset counters after battle

        function varReset() {
                usrHealth = 100;
                opp = false;
        };


        // win loss counter
                
        $("#wins").text("Wins = " + wins);
        $("#losses").text("Losses = " + losses);
        
        // official start - first function to run on load

        gameStart();
        
        
        
        // click events

        function chooseChr() {
                $("#snow").on("click", function() {
                        attPic("snow.jpg");
                        attCheck(snow);
                        opponent();
                        $("#snowHealth").text(snow.defHealth);
                        console.log(opp);
                });
                $("#jamie").on("click", function () {
                        attPic("jamie.jpg");
                        attCheck(jamie);
                        opponent();
                        $("#jamieHealth").text(jamie.defHealth);
                });
                $("#dany").on("click", function () {
                        attPic("dany.jpg");
                        attCheck(dany);
                        opponent();
                        $("#danyHealth").text(dany.defHealth);
                });
                $("#stannis").on("click", function () {
                        attPic("stannis.jpg");
                        attCheck(stannis);
                        opponent();
                        $("#stannisHealth").text(stannis.defHealth);
                });
        };


        $("#battle").click(function () {
                battle(usrHealth, usrAttack);
                disableClick();
                $("#snowHealth").text(snow.defHealth);
                $("#jamieHealth").text(jamie.defHealth);
                $("#danyHealth").text(dany.defHealth);
                $("#stannisHealth").text(stannis.defHealth);        
        });

        function attCheck(character) {
                if (opp === false) {
                        attacker = character;
                        console.log(attacker.defHealth);
                } else if (opp === true) {
                        defender = character;
                        console.log("defender" + defender);
                }
        };


        // functions

        function gameStart() {
                confirm("Choose your champion");
                chooseChr();
                console.log(opp);
        };
        
        function opponent() {
                if (opp === true) {
                        return;
                }
                confirm("Choose your Opponent and Press the Battle button to begin");
                opp = true;
        };
        

        function attPic(character) {
                $("#attackSpace").append("<img src=./assets/images/" + character + ' height="300px"' + ">");
                if (opp === false) {
                $("#attackSpace").append("<img src=./assets/images/vs.png" +' height="300px"' + ">");                
                };
                console.log(character);
        };



        function battle() {
                defender.defHealth = defender.defHealth - usrAttack;
                usrAttack = usrAttack + 6;
                usrHealth = usrHealth - defender.cntrAttack;
                gameCounter();
                console.log(usrHealth);
                console.log(usrAttack);
                console.log(defender.defHealth);
                console.log(defender.cntrAttack);
        };


        function gameCounter() {
                if (defender.defHealth <= 0) {
                        wins = +1;
                        alert("You Win this round");
                        varReset();
                        enableClick()
                        opponent();
                        $(defender).remove();
                } else if (usrHealth <= 0) {
                        losses = +1;
                        alert("You lose");
                        varReset();
                        enableClick()
                        opponent();
                }
                $("#wins").text("Wins = " + wins);
                $("#losses").text("Losses = " + losses);
        }
        function disableClick() {
                $("img").off();
        }
        
        function enableClick() {
                $("img").on("click");
        }

        function remove(){
        }


});