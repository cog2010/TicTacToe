$(document).ready(function(){
 var moveSet = [];
 var player = [];
 var cpu = [];
 var playerPiece;
 var cpuPiece;


 $("#board , #gameOver").hide();

 $("#playerX").on("click", function(){
    playerPiece = "X";
    cpuPiece = "O";
    getMoves();
    $("#pieceSelector").hide();
    $("#board").show();
});
 $("#playerO").on("click", function(){
    playerPiece = "O";
    cpuPiece = "X";
    getMoves();
    $("#pieceSelector").hide();
    $("#board").show();
});

//Generate a random array of number 1-9 that corrospond to the squares
 function getMoves(){
    while (moveSet.length < 10) {
       if (moveSet[moveSet.length-1] === undefined){
         moveSet.pop();
      }
       temp = Math.ceil(Math.random() * 9);
       for (var j = 0; j < moveSet.length; j++){
         if (temp !== moveSet[j]){
         } else {
            temp = undefined;
            break;
         }
      }
      moveSet.slice('undefined');
      moveSet.push(temp);
      }
   moveSet.pop();
   }

//Function to check if anyone has won yet
   function checkWin(player, cpu) {
      if (moveSet.length === 0){
         $("#winner").html("<h1>It's a Tie</h1>");
         $("#gameOver").show();
         $("#board").hide();
      }
      var winConditions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
      for (var j = 0;j < winConditions.length; j++){
         if (containsAll(winConditions[j],player) === true){
            $("#winner").html("<h1>Player Wins</h1>");
            $("#gameOver").show();
            $("#board").hide();
         }
      };
      for (var j = 0;j < winConditions.length; j++){
         if (containsAll(winConditions[j],cpu) === true){
            $("#winner").html("<h1>CPU Wins</h1>");
            $("#gameOver").show();
            $("#board").hide();
         }
      };
         function containsAll(needles, haystack){
            for(var i = 0; i < needles.length; i++){
                 if($.inArray(needles[i], haystack) == -1) {
                    return false;
                 }
            }
            return true;
         };
      };

$("#reset").on("click", function(){
   $("#gameOver").hide();
   $("#pieceSelector").show();
   player = [];
   cpu = [];
   $("#t1 , #t2 , #t3 , #t4 , #t5 , #t6 , #t7 , #t8 , #t9").html("");
});

$("#t1").on("click", function(){
   if (moveSet.indexOf(1) !== -1){
      $("#t1").html(playerPiece);
      player.push(1);
      var remover = moveSet.indexOf(1);
      moveSet.splice(remover, 1);
      cpu.push(moveSet[0]);
      $("#t"+moveSet[0]).html(cpuPiece);
      moveSet.shift();
      checkWin(player,cpu);
   }
});
$("#t2").on("click", function(){
   if (moveSet.indexOf(2) !== -1){
      $("#t2").html(playerPiece);
      player.push(2);
      var remover = moveSet.indexOf(2);
      moveSet.splice(remover, 1);
      cpu.push(moveSet[0]);
      $("#t"+moveSet[0]).html(cpuPiece);
      moveSet.shift();
      checkWin(player,cpu);
   }
});
$("#t3").on("click", function(){
   if (moveSet.indexOf(3) !== -1){
      $("#t3").html(playerPiece);
      player.push(3);
      var remover = moveSet.indexOf(3);
      moveSet.splice(remover, 1);
      cpu.push(moveSet[0]);
      $("#t"+moveSet[0]).html(cpuPiece);
      moveSet.shift();
      checkWin(player,cpu);
   }
});
$("#t4").on("click", function(){
   if (moveSet.indexOf(4) !== -1){
      $("#t4").html(playerPiece);
      player.push(4);
      var remover = moveSet.indexOf(4);
      moveSet.splice(remover, 1);
      cpu.push(moveSet[0]);
      $("#t"+moveSet[0]).html(cpuPiece);
      moveSet.shift();
      checkWin(player,cpu);
   }
});
$("#t5").on("click", function(){
   if (moveSet.indexOf(5) !== -1){
      $("#t5").html(playerPiece);
      player.push(5);
      var remover = moveSet.indexOf(5);
      moveSet.splice(remover, 1);
      cpu.push(moveSet[0]);
      $("#t"+moveSet[0]).html(cpuPiece);
      moveSet.shift();
      checkWin(player,cpu);
   }
});
$("#t6").on("click", function(){
   if (moveSet.indexOf(6) !== -1){
      $("#t6").html(playerPiece);
      player.push(6);
      var remover = moveSet.indexOf(6);
      moveSet.splice(remover, 1);
      cpu.push(moveSet[0]);
      $("#t"+moveSet[0]).html(cpuPiece);
      moveSet.shift();
      checkWin(player,cpu);
   }
});
$("#t7").on("click", function(){
   if (moveSet.indexOf(7) !== -1){
      $("#t7").html(playerPiece);
      player.push(7);
      var remover = moveSet.indexOf(7);
      moveSet.splice(remover, 1);
      cpu.push(moveSet[0]);
      $("#t"+moveSet[0]).html(cpuPiece);
      moveSet.shift();
      checkWin(player,cpu);
   }
});
$("#t8").on("click", function(){
   if (moveSet.indexOf(8) !== -1){
      $("#t8").html(playerPiece);
      player.push(8);
      var remover = moveSet.indexOf(8);
      moveSet.splice(remover, 1);
      cpu.push(moveSet[0]);
      $("#t"+moveSet[0]).html(cpuPiece);
      moveSet.shift();
      checkWin(player,cpu);
   }
});
$("#t9").on("click", function(){
   if (moveSet.indexOf(9) !== -1){
      $("#t9").html(playerPiece);
      player.push(9);
      var remover = moveSet.indexOf(9);
      moveSet.splice(remover, 1);
      cpu.push(moveSet[0]);
      $("#t"+moveSet[0]).html(cpuPiece);
      moveSet.shift();
      checkWin(player,cpu);
   }
});
});
