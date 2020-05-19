import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/*
    Note: The array of objects above is:
    fifaData = [
        {various items here}
    ];
*/

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

/*function find2014Final() {
    const games2014 = fifaData.filter(function(get2014) {
        return get2014.year === 2014;
    });
}*/


const games2014 = fifaData.filter(function(get2014) {
    return ((get2014.Year === 2014) && (get2014.Stage === 'Final'));
});
console.log("Task 1a below\nThe 2014 World Cup Final Home Team was " + games2014[0]['Home Team Name']);

console.log("Task 1b below\nThe 2014 World Cup Final Away Team was " + games2014[0]['Away Team Name']);

console.log("Task 1c below\n" + games2014[0]['Home Team Name'] + "'s goals for the 2014 World Cup Final was " + games2014[0]['Home Team Goals']);

console.log("Task 1d below\n" + games2014[0]['Away Team Name'] + "'s goals for the 2014 World Cup Final was " + games2014[0]['Away Team Goals']);

console.log("Task 1e below");
if(games2014[0]['Home Team Goals'] > games2014[0]['Away Team Goals']) {
    console.log("" + games2014[0]['Home Team Name'] + " won the 2014 World Cup");
} else if(games2014[0]['Home Team Goals'] < games2014[0]['Away Team Goals']) {
    console.log("" + games2014[0]['Away Team Name'] + " won the 2014 World Cup");
} else {
    console.log("In an unprecedented event, we have a tie in the World Cup Finals. Neither " + games2014[0]['Home Team Name'] + " nor " + games2014[0]['Away Team Name'] + " wins.");
}


/* Task 2: Create a function called getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finalsOnly = data.filter(function(specificGame) {
        return specificGame.Stage === 'Final';
    });
    return finalsOnly;
}
console.log("Task 2: getFinals() function below");
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`,
    and returns an array called `years` containing all of the years in the dataset */

function getYears(finalsData) {
    const years = finalsData.map(function(theGame) {
        return theGame.Year;
    });
    return years;
}
console.log("Task 3: getYears() function below");
console.log(getYears(getFinals(fifaData)));


console.log("Task 4 results below\nThere was no 'Task 4' assigned in this project. Soooo, Done!");

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()`
    and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(finalsData) {
    const winners = [];

    finalsData.filter(function(teams) {
        if(teams['Home Team Goals'] > teams['Away Team Goals']) {
            winners.push(teams['Home Team Name']);
        } else if(teams['Home Team Goals'] < teams['Away Team Goals']) {
            winners.push(teams['Away Team Name']);
        } else {
            // There were two ties in World Cup history. Look for the team named in Win Conditions to get your winner
            let conditions = teams['Win conditions'];
            let homeTeam = teams['Home Team Name'];
            if(conditions.includes(homeTeam) > -1) {
                winners.push(teams['Home Team Name']);
            } else {
                winners.push(teams['Away Team Name']);
            }
        }
    });
    return winners;
}
console.log("Task 5: getWinners() function below");
console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings
    "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnersData, yearsData) {
    const announceWinners = [];

    yearsData.forEach((specificYear, position) => {
        const gameWinner = winnersData[position];
        announceWinners.push(`In ${specificYear}, ${gameWinner} won the World Cup!`);
    });

    return announceWinners;
}
console.log("Task 6: getWinnersByYear() function below");
console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals
    and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    //For the record, the instructions above did NOT specify this is only for the Final game each year, like all the previous Tasks, so I'll compute for ALL matches
    let homeCounter = 0;
    let awayCounter = 0;

    let avgHomeGoals = data.reduce(function(totalGoals, currentGoals) {
        homeCounter++;
        return totalGoals + currentGoals['Home Team Goals'];
    }, 0);
    
    let avgAwayGoals = data.reduce(function(totalGoals, currentGoals) {
        awayCounter++;
        return totalGoals + currentGoals['Away Team Goals'];
    }, 0);

    return "For all games 1930 - current: Average Home Team Goals total " + Number(Math.round((avgHomeGoals / homeCounter)+'e2')+'e-2') + " and Average Away Team Goals total " + Number(Math.round((avgAwayGoals / awayCounter)+'e2')+'e-2');
};
console.log("Task 7: getAverageGoals() function below");
console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
