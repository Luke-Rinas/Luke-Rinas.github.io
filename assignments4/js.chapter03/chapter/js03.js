/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

     Filename: js03.js
 */

     let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

     function addWeekDays() {
        let i = 0; //initial counter value

        //reference the collection of heading cells

        let headingCells = document.getElementsByTagName("th");

        //write each of the seven dats into a heading cell

        while(i < 7) {
            headingCells[i].innerHTML = weekDays[i];

            //increase the counter by 1
            i++;
        }

     }
     window.onload = addWeekDays;
     window.addEventListener("load",showGames);

      function showGames() {

       
        for (let i = 0; i < gameDates.length; i++) {
            let gameInfo = ""; 
    
            switch (gameResults[i]) {
                case "W":
                    gameInfo += "<p class='win'>";
                    break;
                case "L":
                    gameInfo += "<p class='lose'>";
                    break;
                case "S":
                    gameInfo += "<p class='suspended'>";
                    break;
                case "P":
                    gameInfo += "<p class='postponed'>";
                    break;
                default:
                    gameInfo += "<p>"; 
                    break;
            }
    
            if (gameLocations[i] === "h") {
                gameInfo += "vs. ";
            } else if (gameLocations[i] === "a") {
                gameInfo += "@ ";
            }
    
            gameInfo += gameOpponents[i] + "<br>";
            gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";
    
            if (gameInnings[i] < 5) {
                gameInfo += " [" + gameInnings[i] + "]***";
            } else if (gameInnings[i] < 9) {
                gameInfo += " [" + gameInnings[i] + "]*";
            } else {
                gameInfo += " [" + gameInnings[i] + "]";
            }
    
            gameInfo += "</p>"; 
            let tableCell = document.getElementById(gameDates[i]);
            tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
        }
     } 
    