

$(document).ready(function () {
        
        // variable declarations

        var usrHealth = 100;
        var usrAttack = 0;
        var cntrAttack = 15;
        var defHealth = 100;
        var wins = 0;
        var losses = 0;
        var opp = false;
        var attacker;
        var defender;
        var snow = {defHealth:200, cntrAttack:20};
        var jamie = {defHealth:120, cntrAttack:10};
        var dany = {defHealth:150, cntrAttack:15};
        var stannis = {defHealth:100, cntrAttack:5};

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
                $("#snow").click(function () {
                        attPic("snow.jpg");
                        attCheck(snow);
                        opponent();
                        console.log(opp);
                });
                $("#jamie").click(function () {
                        attPic("jamie.jpg");
                        attCheck(jamie);
                        opponent();
                });
                $("#dany").click(function () {
                        attPic("dany.jpg");
                        attCheck(dany);
                        opponent();
                });
                $("#stannis").click(function () {
                        attPic("stannis.jpg");
                        attCheck(stannis);
                        opponent();
                });
        };


        $("#battle").click(function () {
                battle(usrHealth, usrAttack);
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
                        opponent();
                } else if (usrHealth <= 0) {
                        losses = +1;
                        alert("You lose");
                        varReset();
                        opponent();
                }
                $("#wins").text("Wins = " + wins);
                $("#losses").text("Losses = " + losses);
        }



});