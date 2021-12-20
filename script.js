//RACE DAY PROGRAM

//floor rounds to whole number, random generate a random # times 1000
let raceNumber = Math.floor(Math.random() * 1000);
//Input fields:
let registrationEarly = true;
let runnerAge = 20;
//console.log(raceNumber)

//Calculates Runner Age and Registration
//Accounts for raceNumber conditions
if (runnerAge > 18 && registrationEarly === true) {
  raceNumber = (raceNumber + 1000);
  console.log('Adult 9:30AM \n--------------');
} else if (runnerAge > 18 && registrationEarly === false) {
  raceNumber < 1000;
  console.log('Adult 11AM \n--------------');
} else if (runnerAge < 18) {
  raceNumber < 1000;
  console.log('Youth 12:30PM \n--------------');
} else {
  console.log('Please see the registration desk.');
}
//Uses race time and age to return instructions and raceNumber
if (runnerAge > 18 && registrationEarly === true) {
  console.log(`Thanks for registering early! Your race begins at 9:30 AM. \nRaceNumber:${raceNumber}`);
} else if (runnerAge > 18 && registrationEarly === false) {
  console.log(`Thanks for your registration! Your race begins at 11 AM. \nRaceNumber:${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Thanks for your registration! Your race begins at 12:30PM \nRaceNumber:${raceNumber}`);
} else {
    null;
};


//GOALS:
//Register runners for the race & give them instructions on race day

//TIMELINE:
//9:30AM = Adult and registered early
//11AM = Adult and registered late
//12:30PM = All youth

//RUNNERS:
//Adult Runner = over 18
// can register early or late
//Youth Runner = under 18
// regardless of registration run at 12:30 PM

//RACE NUMBER:
// early + adult >= 1000
// all else < 1000